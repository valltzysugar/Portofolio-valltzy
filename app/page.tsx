export default function Home() {
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
          <a className="button primary" href="#projects">
            View Projects →
          </a>
          <a className="button secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>
        <h2>Who am I?</h2>
        <p className="section-text">
          Saya VallTzy, seorang developer dan digital creator yang
          tertarik dengan web development, teknologi, dan project
          kreatif. Portfolio ini menjadi tempat untuk menampilkan
          karya dan project yang sedang saya kerjakan.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="section-label">02 — PROJECTS</p>
        <h2>Selected work.</h2>

        <div className="projects">
          <article className="project">
            <span>01</span>
            <h3>Portfolio Website</h3>
            <p>Personal portfolio dengan desain modern dan responsive.</p>
            <div className="tags">
              <b>Next.js</b>
              <b>React</b>
              <b>Vercel</b>
            </div>
          </article>

          <article className="project">
            <span>02</span>
            <h3>Web Experiments</h3>
            <p>Kumpulan eksperimen dan project teknologi yang saya buat.</p>
            <div className="tags">
              <b>JavaScript</b>
              <b>Web</b>
              <b>API</b>
            </div>
          </article>

          <article className="project">
            <span>03</span>
            <h3>Creative Projects</h3>
            <p>Project digital dan karya kreatif lainnya.</p>
            <div className="tags">
              <b>Design</b>
              <b>Creative</b>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">03 — CONTACT</p>
        <h2>Let&apos;s work together.</h2>
        <p className="section-text">
          Punya project atau sekadar ingin ngobrol? Hubungi saya
          melalui platform berikut.
        </p>

        <a className="email" href="mailto:vallberak@gmail.com">
          vallberak@gmail.com →
        </a>
      </section>

      <footer>
        <p>© 2026 VallTzy. Built with Next.js.</p>
      </footer>
    </main>
  );
}
