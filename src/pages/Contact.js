import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      const response = await fetch('http://localhost:5000/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          interest: '',
          message: ''
        });
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Feminine Future Foundation', 'East Legon, Accra', 'Ghana']
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: ['info@femininefuture.org', 'partnerships@femininefuture.org', 'support@femininefuture.org']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+233 XX XXX XXXX', '+233 XX XXX XXXX', 'Mon-Fri: 9AM - 5PM']
    },
    {
      icon: '🌐',
      title: 'Follow Us',
      details: ['@FeminineFutureGH', 'Facebook | Instagram', 'Twitter | LinkedIn']
    }
  ];

  const joinOptions = [
    {
      title: 'Become a Beneficiary',
      description: 'Are you a girl or young woman seeking support? Apply to join our programs.',
      action: 'Apply Now'
    },
    {
      title: 'Volunteer With Us',
      description: 'Share your time and skills to mentor and support our beneficiaries.',
      action: 'Volunteer'
    },
    {
      title: 'Become a Mentor',
      description: 'Guide and inspire the next generation of female leaders.',
      action: 'Join as Mentor'
    },
    {
      title: 'Partner With Us',
      description: 'Organizations and institutions interested in collaboration.',
      action: 'Partner'
    },
    {
      title: 'Donate',
      description: 'Support our mission financially and help us empower more girls.',
      action: 'Donate Now'
    },
    {
      title: 'Hire Our Graduates',
      description: 'Connect with talented young women completing our programs.',
      action: 'Recruit'
    }
  ];

  return (
    <div className="contact">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Join Our Mission</h1>
          <p>Connect with us and be part of the change</p>
        </div>
      </section>

      {/* Join Options */}
      <section className="section join-options-section">
        <div className="container">
          <h2 className="section-title">Ways to Get Involved</h2>
          <p className="section-subtitle">
            Choose how you'd like to contribute to empowering girls across Ghana
          </p>
          <div className="join-options-grid">
            {joinOptions.map((option, index) => (
              <div key={index} className="join-option-card card">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    window.scrollTo({ 
                      top: document.querySelector('.contact-form-section').offsetTop - 100, 
                      behavior: 'smooth' 
                    });
                    setFormData({ ...formData, subject: option.title });
                  }}
                >
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section contact-info-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card card">
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-intro-box">
              <h2>Send Us a Message</h2>
              <p>
                Have questions or want to learn more? Fill out the form and our team 
                will respond within 24-48 hours.
              </p>
              <div className="form-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Quick Response Time</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Personalized Support</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Confidential & Secure</span>
                </div>
              </div>
            </div>

            <div className="form-container card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">I'm interested in: *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select an option --</option>
                    <option value="beneficiary">Becoming a Beneficiary</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="mentor">Becoming a Mentor</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="donation">Making a Donation</option>
                    <option value="employment">Hiring Our Graduates</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <div className="map-placeholder">
            <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="400" fill="var(--pale-maroon)"/>
              <circle cx="400" cy="200" r="80" fill="var(--primary-maroon)" opacity="0.3"/>
              <circle cx="400" cy="200" r="50" fill="var(--primary-maroon)" opacity="0.5"/>
              <circle cx="400" cy="200" r="20" fill="var(--primary-maroon)"/>
              <path d="M400 180 L400 200 L410 200" stroke="white" strokeWidth="3"/>
              <text x="400" y="280" textAnchor="middle" fill="var(--primary-maroon)" 
                    fontSize="24" fontWeight="600">Feminine Future Foundation</text>
              <text x="400" y="310" textAnchor="middle" fill="var(--gray-text)" 
                    fontSize="18">East Legon, Accra, Ghana</text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
