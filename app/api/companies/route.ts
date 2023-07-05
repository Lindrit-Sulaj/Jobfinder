import { db } from "@/firebase";
import { getDocs, collection, query, limit } from "firebase/firestore";
import { NextResponse } from "next/server";

interface Company {
  name: string;
  id: string;
  about: string;
  ceo: string;
  founded: number;
  size: number;
  headquarters: string;
  industry: string;
  banner: string;
  createdAt: number;
  link?: string;
}

export async function GET() {
  const documents: any[] = [];
  const q = query(collection(db, 'companies'), limit(50));
  const res = await getDocs(q);
  res.docs.map(document => {
    documents.push({ ...document.data(), id: document.id })
  })
  return NextResponse.json(documents);
}