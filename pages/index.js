import Head from 'next/head';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import projects from '../data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reyhan Al-katiri | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Reyhan Al-katiri — full stack developer with experience in JavaScript, SQL, Unity, and web applications."
        />
      </Head>

      <div className="page-shell">
        <NavBar activePage="home" />

        <main className="main-content">
          <section className="hero-section">
            <div>
              <p className="eyebrow">Hi, I’m Reyhan</p>
              <h1>Simple. Modern. Interactive.</h1>
              <p className="hero-copy">
                I build polished portfolio websites, modern web applications, and clean UI experiences. Explore my work and learn how I combine design, performance, and practical development.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">View Projects</a>
                <a className="button secondary" href="/story">My Story</a>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card__inner">
                <p className="hero-card__label">Interactive Stats</p>
                <div className="stats-grid">
                  <div>
                    <strong>4</strong>
                    <span>Featured Projects</span>
                  </div>
                  <div>
                    <strong>3+</strong>
                    <span>Years Coding</span>
                  </div>
                  <div>
                    <strong>2</strong>
                    <span>Frameworks</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="projects-section">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>My recent work</h2>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section className="contact-section">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2>Looking for a thoughtful developer?</h2>
              <p>
                I enjoy building clean interfaces and backend-powered solutions. Reach out if you want a polished portfolio, a new web app, or a performant digital experience.
              </p>
            </div>
            <div className="contact-card">
              <p>Email</p>
              <a href="mailto:reyhan2498@gmail.com">reyhan2498@gmail.com</a>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/reyhan-al-katiri" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.github.com/reyhan2498" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
