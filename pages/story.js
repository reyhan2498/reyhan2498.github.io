import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Story() {
  return (
    <>
      <Head>
        <title>MegaBliss Story | Reyhan Al-katiri</title>
        <meta
          name="description"
          content="The story behind the MegaBliss internship project and full stack website experience."
        />
      </Head>

      <div className="page-shell">
        <NavBar activePage="story" />

        <main className="story-page">
          <section className="story-hero">
            <p className="eyebrow">Internship Project</p>
            <h1>My Journey at MegaBliss Worldwide</h1>
            <p className="story-lead">
              I helped build a booking platform that connects travelers to service providers, hotels, and packages. The work involved tight front-end and back-end integration, responsive UI, and performance-focused development.
            </p>
          </section>

          <section className="story-content">
            <div>
              <h2>The Project</h2>
              <p>
                The platform needed to be intuitive for travelers and powerful for hosts. I contributed to the website’s interface, booking workflows, and overall usability while supporting real-time updates and backend data flows.
              </p>
            </div>

            <div>
              <h2>Challenges & Learning</h2>
              <p>
                The biggest challenge was aligning the front-end experience with backend logic for bookings, notifications, and scalability. I improved database efficiency, optimized queries, and helped create a UI that can scale with growing user demand.
              </p>
            </div>

            <div>
              <h2>What I Delivered</h2>
              <ul>
                <li>Responsive layouts and component-driven design</li>
                <li>Improved booking workflows for clearer user actions</li>
                <li>Better integration between modern React front-end and backend services</li>
              </ul>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
