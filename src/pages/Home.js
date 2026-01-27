import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const features = [
    {
      icon: '📚',
      title: 'Education',
      description: 'Providing quality educational resources and scholarships to deserving girls across Ghana.'
    },
    {
      icon: '🤝',
      title: 'Mentorship',
      description: 'Connecting young women with inspiring mentors who guide them towards success.'
    },
    {
      icon: '💼',
      title: 'Economic Empowerment',
      description: 'Equipping girls with skills and resources to become financially independent leaders.'
    }
  ];

  const stats = useMemo(() => [
    { number: 1500, label: 'Girls Empowered', suffix: '+' },
    { number: 13, label: 'Partner Schools', suffix: '+' },
    { number: 20, label: 'Mentors', suffix: '+' },
    { number: 10, label: 'Communities Covered', suffix: '+' }
  ], []);

  const animateCounters = useCallback(() => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    stats.forEach((stat, index) => {
      const element = document.getElementById(`stat-${index}`);
      if (!element) return;

      let frame = 0;
      // const increment = stat.number / totalFrames;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentNumber = Math.min(Math.floor(stat.number * progress), stat.number);
        
        if (currentNumber >= 1000) {
          element.textContent = currentNumber.toLocaleString() + stat.suffix;
        } else {
          element.textContent = currentNumber + stat.suffix;
        }

        if (frame === totalFrames) {
          clearInterval(counter);
          if (stat.number >= 1000) {
            element.textContent = stat.number.toLocaleString() + stat.suffix;
          } else {
            element.textContent = stat.number + stat.suffix;
          }
        }
      }, frameRate);
    });
  }, [stats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateCounters]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title fade-in">
            Empowering Girls for a <span className="highlight">Brighter Future</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Building tomorrow's leaders through education, mentorship, and economic empowerment across Ghana
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/contact" className="btn btn-primary">Join Our Mission</Link>
            <Link to="/programs" className="btn btn-light">Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              The Feminine Future Foundation is dedicated to transforming the lives of girls and young women across Ghana 
              by providing access to quality education, meaningful mentorship, and economic opportunities. 
              We believe that when you empower a girl, you empower an entire community.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">How We Make a Difference</h2>
          <p className="section-subtitle">
            Our three-pillar approach ensures comprehensive support for every girl we serve
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Our Impact in Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number" id={`stat-${index}`}>0</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in our mission to empower girls and build a brighter future for Ghana</p>
            <div className="cta-buttons">
              <Link to="/programs" className="btn btn-primary">Partner With Us</Link>
              <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section testimonials-preview">
        <div className="container">
          <h2 className="section-title">Stories of Transformation</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card card">
              <p className="testimonial-text">
                "Feminine Future gave me the scholarship and mentorship I needed to pursue my dreams. 
                Today, I'm studying medicine and giving back to my community."
              </p>
              <div className="testimonial-author">
                <strong>Akosua M.</strong>
                <span>Medical Student, University of Ghana</span>
              </div>
            </div>
            <div className="testimonial-card card">
              <p className="testimonial-text">
                "The skills training program transformed my life. I now run my own business and 
                employ three other young women from my community."
              </p>
              <div className="testimonial-author">
                <strong>Ama K.</strong>
                <span>Entrepreneur, Kumasi</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/impact" className="btn btn-secondary">Read More Stories</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
