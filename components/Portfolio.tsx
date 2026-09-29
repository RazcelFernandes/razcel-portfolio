"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness, Download, ExternalLink, Github, GraduationCap, Mail,
  Menu, Moon, Sun, X, Linkedin, Phone, Copy, Award, Layers3
} from "lucide-react";
import { projects } from "@/data/projects";
import { t } from "@/data/translations";

type Lang = "en" | "id";

const skillGroups = [
  {
    title: "Programming & Data",
    items: ["Python", "Pandas", "Scikit-learn"]
  },
  {
    title: "Data Visualization",
    items: ["Power BI", "Matplotlib", "Seaborn"]
  },
  {
    title: "Application & Dashboard",
    items: ["Streamlit"]
  },
  {
    title: "Tools",
    items: ["Microsoft Excel", "Figma"]
  },
  {
    title: "Soft Skills",
    items: [
      "Detail-oriented",
      "Effective Communication",
      "Teamwork",
      "Quick Learner",
      "Adaptable"
    ]
  }
];

const certs = [
  {
    title: "Creating Business Intelligence",
    description: {
      en: "Exploring business intelligence concepts and data-based decision making.",
      id: "Mempelajari konsep business intelligence dan pengambilan keputusan berbasis data."
    },
    image: "/certificates/business-intelligence.png",
    credential: "https://drive.google.com/file/d/1sIVBgfRwWDMwNL9ldgORcRaNVfhgkyQo/view?usp=drive_link"
  },
  {
    title: "Fundamental Web Programming",
    description: {
      en: "Learning the fundamentals of web development and website structure.",
      id: "Mempelajari dasar pengembangan web dan struktur website."
    },
    image: "/certificates/web-programming.png",
    credential: "https://drive.google.com/file/d/1dDbTxgLMDRxr4R-cKmGsCnqh6l2IZKQf/view?usp=drive_link"
  },
  {
    title: "JavaScript Programming Language Fundamentals",
    description: {
      en: "Understanding core JavaScript concepts and programming fundamentals.",
      id: "Memahami konsep dasar JavaScript dan fundamental pemrograman."
    },
    image: "/certificates/javascript.png",
    credential: "https://drive.google.com/file/d/1IWl9UC9_i-kD2vx406xn1JSqRk71xH_2/view?usp=drive_link"
  },
  {
    title: "Intro Data Analyst",
    description: {
      en: "Introduction to data analytics, data interpretation, and insight generation.",
      id: "Pengenalan analisis data, interpretasi data, dan pembuatan insight."
    },
    image: "/certificates/data-analyst.png",
    credential: "https://drive.google.com/file/d/1M0xPt_akaz6JESyziNonGOS-xv_Y8r69/view?usp=drive_link"
  },
  {
    title: "TOEFL Result",
    description: {
      en: "English proficiency assessment result.",
      id: "Hasil penilaian kemampuan bahasa Inggris."
    },
    image: "/certificates/toefl.png",
    credential: "https://drive.google.com/file/d/10Q7LzmQDrChUOob4ebW2iXk9pxgMpqvk/view?usp=drive_link"
  }
];

  const navIds = [
    "home",
    "about",
    "skills",
    "projects",
    "certificates",
    "experience",
    "education",
    "organization",
    "contact"
  ];

  export default function Portfolio() {
    const [lang, setLang] = useState<Lang>("en");
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const [projectOpen, setProjectOpen] =
      useState<(typeof projects)[number] | null>(null);

    const [activeSection, setActiveSection] = useState("home");

    const tr = t[lang];

    useEffect(() => {
      document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    useEffect(() => {
      const sections = navIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);

    const particles = useMemo(() =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${(i * 17) % 93}%`,
        top: `${(i * 29) % 88}%`,
        size: 5 + (i % 4) * 4,
        delay: `${(i % 6) * 0.8}s`
      })),
    []);

    const scrollTo = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });

      setMenuOpen(false);
    };

  return (
    <div className="min-h-screen">
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-black text-white z-50 px-6 py-8 flex-col">
        <div className="text-2xl font-semibold tracking-[.2em]">RF</div>
        <div className="mt-2 text-sm text-white/50">Razcel Fernandes</div>
        <nav className="mt-12 space-y-1">
        {tr.nav.map((label, i) => {
          const isActive = activeSection === navIds[i];

          return (
            <button
              key={label}
              onClick={() => scrollTo(navIds[i])}
              className={`relative block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                isActive
                  ? "text-white bg-white/10"
                  : "text-white/55 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-white rounded-full" />
              )}

              <span className={isActive ? "ml-2" : ""}>
                {label}
              </span>
            </button>
          );
        })}
        </nav>
      <div className="mt-auto space-y-3 text-sm text-white/65">

        <a
          href="https://github.com/RazcelFernandes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Github size={16}/>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/razcel-fernandes-01b707431/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Linkedin size={16}/>
          LinkedIn
        </a>

        <a
          href="mailto:razcelfernandes25@gmail.com"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Mail size={16}/>
          Email
        </a>

      </div>
      </aside>

      <div className="lg:pl-64">
        <header className="fixed top-0 right-0 lg:left-64 left-0 z-40 px-4 md:px-8 py-4 flex justify-between items-center bg-transparent">
          <button onClick={() => setMenuOpen(true)} className="lg:hidden p-2 rounded-xl card"><Menu size={20}/></button>
          <div className="ml-auto flex gap-2">
            <button onClick={() => setLang(lang === "en" ? "id" : "en")} className="px-3 py-2 rounded-xl card text-sm font-medium">
              {lang === "en" ? "EN" : "ID"}
            </button>
            <button onClick={() => setDark(!dark)} className="p-2 rounded-xl card">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[70] bg-black/70 lg:hidden">
              <motion.div initial={{x:-320}} animate={{x:0}} exit={{x:-320}} className="w-72 h-full bg-black text-white p-6">
                <button onClick={()=>setMenuOpen(false)} className="float-right"><X/></button>
                <div className="text-xl font-semibold mt-1">RF</div>
                <nav className="mt-12 space-y-2">
                  {tr.nav.map((label, i) => (
                    <button key={label} onClick={()=>scrollTo(navIds[i])} className="block w-full text-left py-2 text-white/75">{label}</button>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
<section
  id="home"
  className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-10 grid-bg"
>
  {particles.map((p, i) => (
    <span
      key={i}
      className="particle"
      style={{
        left: p.left,
        top: p.top,
        width: p.size,
        height: p.size,
        animationDelay: p.delay,
      }}
    />
  ))}

 <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-[1.25fr_.75fr] gap-10 lg:gap-20 items-center pt-24 pb-16 relative z-10">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="text-left"
    >
      <p className="text-xs tracking-[.35em] muted">
        {tr.heroEyebrow}
      </p>

      <h1 className="text-6xl md:text-8xl lg:text-[110px] font-semibold tracking-[-0.04em] mt-4 leading-[0.95]">
        {tr.heroName}
      </h1>

      <p className="text-xl md:text-3xl font-medium mt-8">
        {tr.heroRole}
      </p>

      <p className="muted mt-3 text-base md:text-lg">
        {tr.heroFocus}
      </p>

      <p className="mt-6 text-2xl md:text-4xl font-light leading-snug max-w-2xl">
        {tr.heroTagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => scrollTo("projects")}
          className="px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium"
        >
          {tr.viewProjects}
        </button>

        <a
          href="/cv/razcel-fernandes-cv.pdf"
          download
          className="px-5 py-3 rounded-xl card font-medium inline-flex items-center gap-2"
        >
          <Download size={17} />
          {tr.downloadCV}
        </a>
      </div>
    </motion.div>

    {/* RIGHT PHOTO */}
    <motion.div
      initial={{ opacity: 0, x: 35, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.15 }}
      className="flex justify-center md:justify-end"
    >
      <div className="relative">

        {/* FRAME LUAR */}
        <div
          className="absolute -inset-5 rounded-[2.5rem] border"
          style={{ borderColor: "var(--border)" }}
        />

        {/* FOTO */}
        <div className="relative w-[340px] h-[460px] md:w-[420px] md:h-[560px] lg:w-[500px] lg:h-[650px] rounded-[2rem] card shadow-soft overflow-hidden">
          <img
            src="/profile/profile.png"
            alt="Razcel Fernandes"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </motion.div>

  </div>
</section>

<Section id="about" title={tr.aboutTitle}>
  <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-stretch">

    {/* ABOUT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card rounded-3xl p-7 md:p-10"
    >
      <p className="text-sm tracking-[.25em] muted uppercase">
        {lang === "en" ? "Introduction" : "Perkenalan"}
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold mt-4">
        {lang === "en"
          ? "Transforming Data Into Meaningful Insights"
          : "Mengubah Data Menjadi Insight yang Bermakna"}
      </h3>

      <p className="text-base md:text-lg leading-8 muted mt-6">
        {lang === "en"
          ? "Information Systems graduate with a strong interest in transforming data into meaningful insights and practical solutions. Experienced in data analysis, machine learning, data visualization, and interactive dashboard development using Python and modern analytical tools. I enjoy learning new technologies, solving problems, and continuously improving my technical and analytical skills."
          : "Saya merupakan lulusan Sistem Informasi dengan minat dalam mengolah data menjadi insight yang bermakna dan solusi yang praktis. Saya memiliki pengalaman dalam analisis data, machine learning, visualisasi data, serta pengembangan dashboard interaktif menggunakan Python dan berbagai tools analitik. Saya juga memiliki ketertarikan untuk mempelajari teknologi baru, memecahkan masalah, serta terus mengembangkan kemampuan teknis dan analitis."}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="px-4 py-2 rounded-full border text-sm"
          style={{ borderColor: "var(--border)" }}>
          Python
        </span>

        <span className="px-4 py-2 rounded-full border text-sm"
          style={{ borderColor: "var(--border)" }}>
          Data Analytics
        </span>

        <span className="px-4 py-2 rounded-full border text-sm"
          style={{ borderColor: "var(--border)" }}>
          Machine Learning
        </span>

        <span className="px-4 py-2 rounded-full border text-sm"
          style={{ borderColor: "var(--border)" }}>
          Data Visualization
        </span>
      </div>
    </motion.div>

    {/* ABOUT HIGHLIGHTS */}
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-4"
    >

      <div className="card rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
        <div className="text-3xl">📊</div>
        <div>
          <h4 className="font-semibold text-lg">
            Data Analytics
          </h4>
          <p className="text-sm muted mt-2">
            {lang === "en"
              ? "Exploring and interpreting data to discover meaningful insights."
              : "Mengolah dan menginterpretasikan data untuk menemukan insight yang bermakna."}
          </p>
        </div>
      </div>

      <div className="card rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
        <div className="text-3xl">🧠</div>
        <div>
          <h4 className="font-semibold text-lg">
            Machine Learning
          </h4>
          <p className="text-sm muted mt-2">
            {lang === "en"
              ? "Developing predictive solutions using machine learning."
              : "Mengembangkan solusi prediktif menggunakan machine learning."}
          </p>
        </div>
      </div>

      <div className="card rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
        <div className="text-3xl">📈</div>
        <div>
          <h4 className="font-semibold text-lg">
            Data Visualization
          </h4>
          <p className="text-sm muted mt-2">
            {lang === "en"
              ? "Presenting complex information through clear visualizations."
              : "Menyajikan informasi kompleks melalui visualisasi yang mudah dipahami."}
          </p>
        </div>
      </div>

      <div className="card rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
        <div className="text-3xl">⚙️</div>
        <div>
          <h4 className="font-semibold text-lg">
            Problem Solving
          </h4>
          <p className="text-sm muted mt-2">
            {lang === "en"
              ? "Applying analytical thinking to solve practical problems."
              : "Menggunakan kemampuan analitis untuk menyelesaikan permasalahan secara praktis."}
          </p>
        </div>
      </div>

    </motion.div>

  </div>
</Section>

          <Section id="skills" title={tr.skillsTitle}>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {skillGroups.map(g => (
                <motion.div whileHover={{y:-4}} key={g.title} className="card rounded-3xl p-6">
                  <Layers3 size={22}/>
                  <h3 className="font-semibold text-xl mt-4">{g.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {g.items.map(i => <span key={i} className="px-3 py-1.5 rounded-full border text-sm" style={{borderColor:"var(--border)"}}>{i}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="projects" title={tr.projectsTitle}>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {projects.map((p) => (
                <motion.article
                  key={p.slug}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="card rounded-3xl overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-black/70 text-white text-xs backdrop-blur-md">
                        {p.category[lang]}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs tracking-wider muted">
                        {p.period}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold mt-3 leading-snug">
                      {p.title[lang]}
                    </h3>

                    <p className="muted text-sm mt-3 leading-6">
                      {p.subtitle[lang]}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border rounded-full px-3 py-1.5"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {p.live !== "#" && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium inline-flex items-center gap-2 hover:opacity-70"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}

                      {p.github !== "#" && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium inline-flex items-center gap-2 hover:opacity-70"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}

                      <button
                        onClick={() => setProjectOpen(p)}
                        className="text-sm font-medium hover:opacity-70"
                      >
                        {lang === "en" ? "View Details →" : "Lihat Detail →"}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Section>

            <Section id="certificates" title={tr.certTitle}>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="card rounded-3xl overflow-hidden group"
                  >

                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="text-xs tracking-[.2em] muted">
                        CERTIFICATE {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="font-semibold text-xl mt-3">
                        {cert.title}
                      </h3>

                      <p className="text-sm muted mt-3 leading-6">
                        {cert.description[lang]}
                      </p>

                      {cert.credential !== "#" && (
                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-5 text-sm font-medium hover:opacity-70"
                        >
                          View Credential
                          <ExternalLink size={15} />
                        </a>
                      )}

                    </div>
                  </motion.div>
                ))}

              </div>
            </Section>

            <Section id="experience" title={tr.expTitle}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card rounded-3xl p-7 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  <div>
                    <p className="text-xs tracking-[.25em] muted uppercase">
                      {lang === "en" ? "Work Experience" : "Pengalaman Kerja"}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                      Antum Laundry
                    </h3>

                    <p className="text-lg muted mt-2">
                      {lang === "en"
                        ? "Operational Staff"
                        : "Staf Operasional"}
                    </p>
                  </div>

                  <div>
                    <span
                      className="inline-block px-4 py-2 rounded-full border text-sm"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {lang === "en" ? "Work Experience" : "Pengalaman Kerja"}
                    </span>
                  </div>

                </div>

                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="leading-7 muted max-w-4xl">
                    {lang === "en"
                      ? "Responsible for overseeing daily operations, coordinating employee tasks, maintaining service quality, monitoring operational needs, and addressing workplace issues to ensure smooth, efficient, and well-organized operations."
                      : "Bertanggung jawab dalam mengawasi kegiatan operasional harian, mengoordinasikan tugas karyawan, menjaga kualitas pelayanan, memantau kebutuhan operasional, serta menangani kendala kerja untuk memastikan seluruh kegiatan berjalan lancar, efisien, dan terorganisir."}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">

                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Operations" : "Operasional"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Supporting day-to-day operational activities."
                        : "Mendukung kegiatan operasional sehari-hari."}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Team Coordination" : "Koordinasi Tim"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Coordinating employee tasks and workflow."
                        : "Mengoordinasikan tugas karyawan dan alur kerja."}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Service Quality" : "Kualitas Pelayanan"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Maintaining consistent service quality."
                        : "Menjaga kualitas pelayanan agar tetap konsisten."}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Problem Solving" : "Pemecahan Masalah"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Handling operational issues efficiently."
                        : "Menangani kendala operasional secara efektif."}
                    </p>
                  </div>

                </div>
              </motion.div>
            </Section>

            <Section id="education" title={tr.eduTitle}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card rounded-3xl p-7 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  <div>
                    <p className="text-xs tracking-[.25em] muted uppercase">
                      {lang === "en" ? "University" : "Universitas"}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                      Gunadarma University
                    </h3>

                    <p className="text-lg muted mt-2">
                      {lang === "en"
                        ? "Bachelor of Information Systems"
                        : "S1 Sistem Informasi"}
                    </p>

                    <p className="muted mt-4">
                      Jakarta
                    </p>
                  </div>

                  <div className="md:text-right">
                    <div className="inline-block px-4 py-2 rounded-full border"
                      style={{ borderColor: "var(--border)" }}>
                      2022 – 2026
                    </div>

                    <p className="mt-4 font-medium">
                      GPA 3.53 / 4.00
                    </p>
                  </div>

                </div>

                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="leading-7 muted max-w-3xl">
                    {lang === "en"
                      ? "Developed academic experience in information systems, data analytics, machine learning, data visualization, and technology-based application development."
                      : "Mengembangkan pengalaman akademik dalam sistem informasi, analisis data, machine learning, visualisasi data, dan pengembangan aplikasi berbasis teknologi."}
                  </p>
                </div>

              </motion.div>
            </Section>

            <Section id="organization" title={tr.orgTitle}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card rounded-3xl p-7 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  <div>
                    <p className="text-xs tracking-[.25em] muted uppercase">
                      {lang === "en" ? "Organization" : "Organisasi"}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                      BEM Universitas Gunadarma
                    </h3>

                    <p className="text-lg muted mt-2">
                      {lang === "en"
                        ? "Information Technology Division"
                        : "Bidang Teknologi Informasi"}
                    </p>
                  </div>

                  <div>
                    <span
                      className="inline-block px-4 py-2 rounded-full border text-sm"
                      style={{ borderColor: "var(--border)" }}
                    >
                      Member
                    </span>
                  </div>

                </div>

                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="leading-7 muted max-w-4xl">
                    {lang === "en"
                      ? "Participated in organizational activities and supported technology-related initiatives, collaboration, and team-based activities within the organization."
                      : "Berpartisipasi dalam kegiatan organisasi serta mendukung berbagai aktivitas yang berkaitan dengan teknologi, kolaborasi, dan kerja sama tim di lingkungan organisasi."}
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 mt-8">
                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Team Collaboration" : "Kolaborasi Tim"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Working together in organizational activities."
                        : "Bekerja sama dalam berbagai kegiatan organisasi."}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Technology Activities" : "Kegiatan Teknologi"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Supporting technology-related initiatives and activities."
                        : "Mendukung kegiatan dan inisiatif yang berkaitan dengan teknologi."}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4 className="font-medium">
                      {lang === "en" ? "Communication" : "Komunikasi"}
                    </h4>
                    <p className="text-sm muted mt-2">
                      {lang === "en"
                        ? "Developing communication through teamwork and coordination."
                        : "Mengembangkan kemampuan komunikasi melalui kerja sama dan koordinasi."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Section>

              <Section id="contact" title={tr.contactTitle}>
                <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-6">

                  {/* CONTACT INFO */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="card rounded-3xl p-7 md:p-10"
                  >
                    <p className="text-xs tracking-[.25em] muted uppercase">
                      {lang === "en" ? "Contact" : "Kontak"}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-semibold mt-4">
                      {lang === "en" ? "Let's Work Together" : "Mari Terhubung"}
                    </h3>

                    <p className="muted mt-4 leading-7">
                      {lang === "en"
                        ? "Open to opportunities, collaboration, and professional discussions. Feel free to contact me through the information below."
                        : "Terbuka untuk peluang kerja, kolaborasi, dan diskusi profesional. Silakan hubungi saya melalui informasi berikut."}
                    </p>

                    <div className="mt-8 space-y-5">

                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl card flex items-center justify-center">
                          <Mail size={18} />
                        </div>

                        <div>
                          <p className="text-xs muted">Email</p>
                          <a
                            href="mailto:razcelfernandes25@gmail.com"
                            className="font-medium hover:opacity-70"
                          >
                            razcelfernandes25@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl card flex items-center justify-center">
                          <Phone size={18} />
                        </div>

                        <div>
                          <p className="text-xs muted">
                            {lang === "en" ? "Phone" : "Telepon"}
                          </p>

                          <a
                            href="tel:+6285187870867"
                            className="font-medium hover:opacity-70"
                          >
                            +62 851-8787-0867
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl card flex items-center justify-center">
                          <Linkedin size={18} />
                        </div>

                        <div>
                          <p className="text-xs muted">LinkedIn</p>

                          <a
                            href="https://www.linkedin.com/in/razcel-fernandes-01b707431/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:opacity-70"
                          >
                            linkedin.com/in/razcel-fernandes
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl card flex items-center justify-center">
                          <Github size={18} />
                        </div>

                        <div>
                          <p className="text-xs muted">GitHub</p>

                          <a
                            href="https://github.com/RazcelFernandes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:opacity-70"
                          >
                            github.com/RazcelFernandes
                          </a>
                        </div>
                      </div>

                    </div>
                  </motion.div>

                  {/* CONTACT FORM */}
                  <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    onSubmit={(e) => e.preventDefault()}
                    className="card rounded-3xl p-7 md:p-10"
                  >
                    <div className="grid md:grid-cols-2 gap-4">

                      <div>
                        <label className="text-sm font-medium">
                          {lang === "en" ? "Name" : "Nama"}
                        </label>

                        <input
                          type="text"
                          placeholder={lang === "en" ? "Your name" : "Nama Anda"}
                          className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none"
                          style={{ borderColor: "var(--border)" }}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Email</label>

                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none"
                          style={{ borderColor: "var(--border)" }}
                        />
                      </div>

                    </div>

                    <div className="mt-4">
                      <label className="text-sm font-medium">
                        {lang === "en" ? "Subject" : "Subjek"}
                      </label>

                      <input
                        type="text"
                        placeholder={
                          lang === "en"
                            ? "What would you like to discuss?"
                            : "Apa yang ingin Anda diskusikan?"
                        }
                        className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none"
                        style={{ borderColor: "var(--border)" }}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="text-sm font-medium">
                        {lang === "en" ? "Message" : "Pesan"}
                      </label>

                      <textarea
                        placeholder={
                          lang === "en"
                            ? "Write your message..."
                            : "Tulis pesan Anda..."
                        }
                        className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none min-h-[160px] resize-none"
                        style={{ borderColor: "var(--border)" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-5 w-full md:w-auto px-7 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium"
                    >
                      {lang === "en" ? "Send Message" : "Kirim Pesan"}
                    </button>

                  </motion.form>

                </div>
              </Section>
            </main>

            <footer
              className="px-6 md:px-10 py-10 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                <div>
                  <p className="font-semibold">
                    Razcel Fernandes
                  </p>

                  <p className="text-sm muted mt-1">
                    Information Systems • Data Analytics • Machine Learning
                  </p>
                </div>

                <p className="text-sm muted">
                  © 2026 Razcel Fernandes. All rights reserved.
                </p>

              </div>
            </footer>

            </div>

      <AnimatePresence>
        {projectOpen && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] bg-black/75 p-4 flex items-center justify-center">
            <motion.div initial={{scale:.95,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.95,opacity:0}}
              className="card rounded-3xl max-w-2xl w-full p-7 relative">
              <button onClick={()=>setProjectOpen(null)} className="absolute right-5 top-5"><X/></button>
              <h3 className="text-2xl font-semibold pr-10">{projectOpen.title[lang]}</h3>
              <p className="muted mt-2">{projectOpen.subtitle[lang]}</p>
              <ul className="mt-6 space-y-3 list-disc pl-5">
                {projectOpen.details[lang].map((x:string)=><li key={x}>{x}</li>)}
              </ul>
              <div className="mt-6 flex gap-4">
                <a href={projectOpen.live} target="_blank" className="inline-flex items-center gap-2 font-medium"><ExternalLink size={16}/>Live Demo</a>
                <a href={`/projects/${projectOpen.slug}`} className="font-medium">Full Case Study →</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({id,title,children}:{id:string,title:string,children:React.ReactNode}) {
  return (
    <section id={id} className="px-6 md:px-10 py-20 md:py-28">
      <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.55}} className="max-w-6xl mx-auto">
        <h2 className="section-title">{title}</h2>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}

function Stat({n,label}:{n:string,label:string}) {
  return <div className="card rounded-3xl p-7"><div className="text-4xl font-semibold">{n}</div><div className="muted mt-2">{label}</div></div>
}

function Timeline({items}:{items:{title:string,subtitle:string,body:string}[]}) {
  return <div className="space-y-4">
    {items.map(x => <div key={x.title} className="card rounded-3xl p-7">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center"><BriefcaseBusiness size={18}/></div>
        <div>
          <h3 className="text-xl font-semibold">{x.title}</h3>
          <p className="text-sm muted mt-1">{x.subtitle}</p>
          <p className="muted mt-4 leading-7">{x.body}</p>
        </div>
      </div>
    </div>)}
  </div>
}

function ContactRow({icon,label,value}:{icon:React.ReactNode,label:string,value:string}) {
  const copy = () => navigator.clipboard?.writeText(value);
  return <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3">
      <span>{icon}</span>
      <div><div className="text-sm font-medium">{label}</div><div className="text-sm muted">{value}</div></div>
    </div>
    <button type="button" onClick={copy} title="Copy"><Copy size={16}/></button>
  </div>
}
