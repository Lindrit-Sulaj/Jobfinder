import { NextResponse } from "next/server"
import { collection, getDocs, query, limit, orderBy, where, or } from "firebase/firestore"

import { db } from "@/firebase"

interface Job {
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

export async function GET(request: any) {
  let documents: Partial<Job>[] = [];
  let queryConstraints = [];
  const { searchParams } = new URL(request.url);
  
  const params: { [key: string]: string | null } = {
    query: searchParams.get('query'),
    location: searchParams.get('location'),
    salary: searchParams.get('salary'),
  }

  for (let key in params) {
    if (params[key] == null) continue;

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
  return NextResponse.json(documents);
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json(res);
}