import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) return notFound();

  return (
    <main className="min-h-screen px-6 py-16 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="text-sm muted">← Back to portfolio</Link>
        <h1 className="text-4xl md:text-6xl font-semibold mt-8">{p.title.en}</h1>
        <p className="text-xl muted mt-4">{p.subtitle.en}</p>
        <img src={p.image} alt="" className="w-full rounded-3xl mt-10 card"/>
        <div className="flex flex-wrap gap-2 mt-6">
          {p.tags.map(tag => <span key={tag} className="border rounded-full px-3 py-1 text-sm" style={{borderColor:"var(--border)"}}>{tag}</span>)}
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Case Study</h2>
          <ul className="mt-5 space-y-3 list-disc pl-5">
            {p.details.en.map(x => <li key={x} className="leading-7">{x}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
