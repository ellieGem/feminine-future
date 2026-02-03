import React from "react";
import "./About.css";

function About() {
  const team = [
    {
      name: "Ms. Miriam Suttah",
      role: "Founder & Executive Director",
      // bio: "Passionate advocate for girls' education with 15+ years of experience in non-profit leadership.",
    },
    {
      name: "Ms. Nana Akua Bondziwaa Owusu",
      role: "Deputy Executive Director",
      // bio: "Educational strategist dedicated to creating impactful learning experiences for young women.",
    },
    {
      name: "MS. Nancy Phoebe Appiah",
      role: "Director of Programs",
      // bio: "Expert in building sustainable partnerships that drive meaningful social change.",
    },
    {
      name: "Ms. Natty Amoah",
      role: "Director of Finance & Administration",
      // bio: "Ensuring transparent and efficient use of resources to maximize impact for beneficiaries.",
    },
    {
      name: "Ms. Isabella Ofosuhene-Peasah",
      role: "Director of Communication & Media Relations",
      // bio: "Ensuring transparent and efficient use of resources to maximize impact for beneficiaries.",
    },
    {
      name: "Mr. Paa Kofi Koranteng Obeng",
      role: "Director of Policy & Advocacy",
      // bio: "Ensuring transparent and efficient use of resources to maximize impact for beneficiaries.",
    },
  ];

  const values = [
    {
      title: "Empowerment",
      description:
        "We believe in giving girls the tools, knowledge, and confidence to shape their own futures.",
    },
    {
      title: "Equality",
      description:
        "Every girl deserves equal access to opportunities regardless of their background or circumstances.",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from education to mentorship.",
    },
    {
      title: "Community",
      description:
        "Building strong, supportive networks that uplift and empower girls and their communities.",
    },
  ];

  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Feminine Future</h1>
          <p>Empowering Girls, Changing Lives</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                The Feminine Future Foundation was founded in 2024 with a simple
                yet powerful vision: to create a Ghana where every girl has the
                opportunity to reach her full potential. 
              </p>
              <p>
                Our founder, Miriam Suttah, witnessed firsthand the barriers that prevented talented
                young women from pursuing their dreams. What began as a small
                mentorship program for <b>56</b> girls in Accra has grown into a
                nationwide movement reaching over 2000 girls across over 10
                communities in Ghana.
              </p>
              <p>
                 We've expanded our offerings to include
                scholarships, skills training, and economic empowerment
                initiatives that address the multifaceted challenges girls face.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/img16.jpg" alt="Empowering Girls" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box card">
              <div className="box-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower girls and young women in Ghana through access to
                quality education, mentorship programs, and economic
                opportunities that enable them to become confident, skilled, and
                independent leaders who drive positive change in their
                communities.
              </p>
            </div>
            <div className="vision-box card">
              <div className="box-icon">✨</div>
              <h3>Our Vision</h3>
              <p>
                A Ghana where every girl has equal access to opportunities and
                resources needed to achieve her dreams, where gender equality is
                the norm, and where women lead at every level of society,
                contributing to a more prosperous and equitable nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These principles guide everything we do and shape how we serve our
            community
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals committed to transforming lives and building
            a brighter future
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-avatar">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="var(--pale-maroon)" />
                    <circle
                      cx="50"
                      cy="35"
                      r="15"
                      fill="var(--primary-maroon)"
                    />
                    <path
                      d="M25 75 Q50 60 75 75 L75 100 L25 100 Z"
                      fill="var(--primary-maroon)"
                    />
                  </svg>
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Want to Learn More?</h2>
            <p>
              Explore our programs and discover how you can be part of our
              mission
            </p>
            <div className="cta-buttons">
              <a href="/programs" className="btn btn-primary">
                View Our Programs
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
