import { NextResponse } from "next/server"
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore"

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
  const q = query(collection(db, 'jobs'), orderBy("postedAt"), limit(50));
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