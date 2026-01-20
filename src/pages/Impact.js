import React, { useState, useEffect, useRef } from 'react';
import './Impact.css';

function Impact() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const impactStatsRef = useRef(null);

  const impactStats = [
    {
      number: 5000,
      label: 'Girls Empowered',
      description: 'Young women supported through our programs since 2015',
      suffix: '+'
    },
    {
      number: 500,
      label: 'Scholarships Awarded',
      description: 'Full and partial scholarships for education',
      suffix: '+'
    },
    {
      number: 200,
      label: 'Active Mentors',
      description: 'Professionals guiding our beneficiaries',
      suffix: '+'
    },
    {
      number: 150,
      label: 'Partner Schools',
      description: 'Educational institutions collaborating with us',
      suffix: '+'
    },
    {
      number: 1200,
      label: 'Skills Trained',
      description: 'Girls equipped with vocational and tech skills',
      suffix: '+'
    },
    {
      number: 85,
      label: 'Employment Rate',
      description: 'Program graduates employed or in higher education',
      suffix: '%'
    },
    {
      number: 300,
      label: 'Businesses Started',
      description: 'Young women entrepreneurs we\'ve supported',
      suffix: '+'
    },
    {
      number: 15,
      label: 'Regions Covered',
      description: 'Across Ghana, from urban to rural communities',
      suffix: ''
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateImpactCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = impactStatsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateImpactCounters]);

  const animateImpactCounters = () => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    impactStats.forEach((stat, index) => {
      const element = document.getElementById(`impact-stat-${index}`);
      if (!element) return;

      let frame = 0;

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
  };

  const testimonials = [
    {
      id: 1,
      name: 'Akosua Mensah',
      role: 'Medical Student, University of Ghana',
      location: 'Accra',
      quote: 'Feminine Future didn\'t just give me a scholarship - they gave me hope, mentorship, and a community that believed in me. Today, I\'m in my third year of medical school, and I dream of becoming a gynecologist to serve women in rural Ghana.',
      year: '2020 Cohort'
    },
    {
      id: 2,
      name: 'Ama Kofi',
      role: 'Entrepreneur & Fashion Designer',
      location: 'Kumasi',
      quote: 'The skills training and microloan program transformed my life. I started with just a sewing machine and a dream. Now, I employ three young women and we supply school uniforms to five schools in our region.',
      year: '2019 Cohort'
    },
    {
      id: 3,
      name: 'Efua Asante',
      role: 'Software Developer',
      location: 'Takoradi',
      quote: 'I never imagined a girl from a fishing village could become a software developer. The tech training program opened doors I didn\'t know existed. Now I work remotely for an international company and support my entire family.',
      year: '2021 Cohort'
    },
    {
      id: 4,
      name: 'Abena Osei',
      role: 'Teacher & Community Leader',
      location: 'Tamale',
      quote: 'My mentor taught me that education is not just about learning - it\'s about giving back. After completing my degree, I returned to my community to teach and now coordinate a girls\' club inspiring the next generation.',
      year: '2018 Cohort'
    },
    {
      id: 5,
      name: 'Yaa Boakye',
      role: 'Accountant',
      location: 'Accra',
      quote: 'Coming from a home where I was told girls don\'t need higher education, Feminine Future changed my family\'s mindset. I graduated top of my class, and now my three younger sisters are all in school too.',
      year: '2019 Cohort'
    },
    {
      id: 6,
      name: 'Adjoa Mensah',
      role: 'Nurse & Health Educator',
      location: 'Cape Coast',
      quote: 'The health and wellness program saved my life when I was struggling with mental health. They connected me with counseling and supported my nursing education. Now I\'m paying it forward by educating girls about health and wellness.',
      year: '2020 Cohort'
    }
  ];

  const achievements = [
    {
      year: '2015',
      title: 'Foundation Established',
      description: 'Started with 20 girls in Accra'
    },
    {
      year: '2017',
      title: 'Regional Expansion',
      description: 'Expanded to 5 regions across Ghana'
    },
    {
      year: '2019',
      title: '1,000 Girls Milestone',
      description: 'Reached 1,000 girls empowered'
    },
    {
      year: '2021',
      title: 'Tech Hub Launch',
      description: 'Opened our first technology training center'
    },
    {
      year: '2023',
      title: 'National Recognition',
      description: 'Awarded National Excellence in Education'
    },
    {
      year: '2024',
      title: '5,000 Girls Impact',
      description: 'Celebrating 5,000+ lives transformed'
    }
  ];

  return (
    <div className="impact">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Impact</h1>
          <p>Measuring success through transformed lives and empowered communities</p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section impact-stats-section" ref={impactStatsRef}>
        <div className="container">
          <h2 className="section-title">Impact by the Numbers</h2>
          <p className="section-subtitle">
            Real results from our commitment to empowering girls across Ghana
          </p>
          <div className="impact-stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="impact-stat-card card">
                <div className="impact-stat-number" id={`impact-stat-${index}`}>0</div>
                <h3 className="impact-stat-label">{stat.label}</h3>
                <p className="impact-stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            Key milestones in our mission to empower girls
          </p>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content card">
                  <div className="timeline-year">{achievement.year}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Stories of Transformation</h2>
          <p className="section-subtitle">
            Hear from the young women whose lives have been transformed by our programs
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-avatar">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="var(--pale-maroon)"/>
                    <circle cx="50" cy="35" r="18" fill="var(--primary-maroon)"/>
                    <path d="M20 75 Q50 58 80 75 L80 100 L20 100 Z" fill="var(--primary-maroon)"/>
                  </svg>
                </div>
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-role">{testimonial.role}</span>
                  <span className="testimonial-location">📍 {testimonial.location}</span>
                  <span className="testimonial-year">{testimonial.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section impact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Be Part of Our Story</h2>
            <p>Your support can transform the life of a girl and her entire community</p>
            <div className="cta-buttons">
              <a href="/programs" className="btn btn-primary">Support Our Programs</a>
              <a href="/contact" className="btn btn-light">Get Involved</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;
