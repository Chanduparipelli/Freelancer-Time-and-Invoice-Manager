import React from 'react';
import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <section className="hero-section">
        <h1>Welcome, Freelancer!</h1>
        <p>Explore a world of freelance opportunities in the IT sector.</p>
      </section>

      <section className="freelancer-pitch">
        <h2>Your Path to Independence</h2>
        <p>
          FreelanceForge is your gateway to a world of flexible work. Connect with clients, manage projects, and get paid for your expertise. Take control of your career, work on your terms, and build a portfolio that truly reflects your skills. The future of work is here, and it's on your terms.
        </p>
      </section>

      <section className="sectors-grid">
        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/007bff/FFFFFF?text=Web+Development" alt="Web Development" />
          <div className="card-content">
            <h3>Web Development</h3>
            <p>
              Build and maintain dynamic websites and web applications. Frontend, backend, and full-stack opportunities are always in demand.
            </p>
          </div>
        </div>

        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/20c997/FFFFFF?text=Mobile+Development" alt="Mobile Development" />
          <div className="card-content">
            <h3>Mobile Development</h3>
            <p>
              Create compelling applications for iOS and Android. Specialize in native or cross-platform development for a global market.
            </p>
          </div>
        </div>
        
        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/fd7e14/FFFFFF?text=Data+Science+%26+AI" alt="Data Science & AI" />
          <div className="card-content">
            <h3>Data Science & AI</h3>
            <p>
              Help businesses make smarter decisions. Analyze data, build machine learning models, and develop intelligent systems for clients worldwide.
            </p>
          </div>
        </div>
        
        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/dc3545/FFFFFF?text=Cybersecurity" alt="Cybersecurity" />
          <div className="card-content">
            <h3>Cybersecurity</h3>
            <p>
              Protect digital assets from threats. Offer services in penetration testing, security audits, and threat analysis for organizations of all sizes.
            </p>
          </div>
        </div>

        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/6f42c1/FFFFFF?text=Cloud+Computing" alt="Cloud Computing" />
          <div className="card-content">
            <h3>Cloud Computing</h3>
            <p>
              Architect and manage cloud infrastructure on platforms like AWS, Azure, and Google Cloud. Freelancers are needed for migrations, optimization, and serverless architecture.
            </p>
          </div>
        </div>

        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/0dcaf0/FFFFFF?text=UI/UX+Design" alt="UI/UX Design" />
          <div className="card-content">
            <h3>UI/UX Design</h3>
            <p>
              Design user-friendly and aesthetically pleasing interfaces. Craft digital experiences that delight users and drive business results.
            </p>
          </div>
        </div>

        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/000000/FFFFFF?text=Game+Development" alt="Game Development" />
          <div className="card-content">
            <h3>Game Development</h3>
            <p>
              Turn your passion into a profession. Work as a freelance game developer, artist, or designer on independent and small-scale projects.
            </p>
          </div>
        </div>

        <div className="sector-card">
          <img className="card-image" src="https://placehold.co/600x400/495057/FFFFFF?text=Software+Engineering" alt="Software Engineering" />
          <div className="card-content">
            <h3>Software Engineering</h3>
            <p>
              Develop custom software solutions. From enterprise tools to small utility applications, software engineers are the backbone of the tech world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
