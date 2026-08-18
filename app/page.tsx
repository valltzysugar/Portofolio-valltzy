"use client";

import { useEffect } from "react";

const socials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6283176338935",
    label: "6283176338935",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/vallgallagh3r",
    label: "@vallgallagh3r",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@vall_acumalaka",
    label: "@vall_acumalaka",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/search/top?q=Vall%20Gallagher",
    label: "Vall Gallagher",
  },
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">VallTzy<span>.</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>
            Hi, I&apos;m <span>VallTzy</span>.
            <br />
            I build things
            <br />
            for the web.
          </h1>
          <p className="intro">
            Developer & digital creator yang suka membuat website,
            project teknologi, dan berbagai eksperimen digital.
          </p>
          <div className="buttons">
            <a className="button primary" href="#projects">View Projects →</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="profile-wrap reveal">
          <div className="profile-glow" />
          <img className="profile" src="/profile.jpg" alt="VallTzy profile" />
        </div>
      </section>

      <section id="about" className="section reveal">
        <p className="section-label">01 — ABOUT</p>
        <h2>Who am I?</h2>
        <p className="section-text">
          Saya VallTzy, seorang developer dan digital creator yang tertarik
          dengan web development, teknologi, dan project kreatif.
          Portfolio ini menjadi tempat untuk menampilkan karya dan project
          yang sedang saya kerjakan.
        </p>
      </section>

      <section id="projects" className="section">
        <div className="reveal">
          <p className="section-label">02 — PROJECTS</p>
          <h2>Selected work.</h2>
        </div>

        <div className="projects">
          {[
            ["01", "Portfolio Website", "Personal portfolio dengan desain modern dan responsive.", ["Next.js", "React", "Vercel"]],
            ["02", "Web Experiments", "Kumpulan eksperimen dan project teknologi yang saya buat.", ["JavaScript", "Web", "API"]],
            ["03", "Creative Projects", "Project digital dan karya kreatif lainnya.", ["Design", "Creative"]],
          ].map(([num, title, desc, tags]) => (
            <article className="project reveal" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tags">
                {(tags as string[]).map((tag) => <b key={tag}>{tag}</b>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="reveal">
          <p className="section-label">03 — CONTACT</p>
          <h2>Let&apos;s connect.</h2>
          <p className="section-text">
            Mau ngobrol, punya project, atau sekadar mampir? Temukan saya
            di platform berikut.
          </p>
        </div>

        <div className="socials">
          {socials.map((social, index) => (
            <a
              className="social reveal"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              key={social.name}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span>{social.name}</span>
              <small>{social.label}</small>
              <strong>↗</strong>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 VallTzy. Built with Next.js.</p>
      </footer>
    </main>
  );
}
