import { collection, getDocs, query, limit, orderBy, where, or } from "firebase/firestore"
import { db } from "@/firebase"

export interface Job {
  title: string;
  id: string;
  keywords: string[];
  description: string;
  skills: string[];
  salary: number;
  location: string;
  body: string;
  company: {
    name: string;
    id: string;
    profilePicture: string;
  },
  postedAt: number;
  education?: string[];
  workTime?: 'Part Time' | 'Full Time';
}

interface JobParams {
  query?: string | null;
  location?: string | null;
  salary?: string | null;
}

export async function getJobs(params?: JobParams) {
  let documents: Partial<Job>[] = [];
  let queryConstraints = [];

  for (let key in params) {
    if (params[key as keyof JobParams] == null) continue;

    if (key === 'query') {
      queryConstraints.push(or(where("title", "==", params[key]), where("keywords", "array-contains", params[key])));
    } else if (key === "location") {
      queryConstraints.push(where("location", '==', params[key]));
    } else if (key === "salary") {
      queryConstraints.push(where('salary', '<=', Number(params[key])));
    }
  }
  
  //@ts-ignore
  const q = query(collection(db, 'jobs'), orderBy("postedAt"), ...queryConstraints, limit(50));
  const res = await getDocs(q);
  
  res.docs.map((document) => {
    documents.push({ ...document.data(), id: document.id });
  })
  return documents;
}