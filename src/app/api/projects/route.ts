
import { NextResponse } from "next/server";
import { ourWorks } from "@/app/data/ourWorks";
 
export const dynamic = "error";
 
export async function GET() {
  const projects = ourWorks.map((project) => ({
    title: project.title,
    slug: project.slug,
    ScopeOfWork: project.services,
    industry: project.industry,
    coverImage: project.coverImage,
  }));
 
  return NextResponse.json(projects);
}
