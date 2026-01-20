import React, { useState } from 'react';
import './Programs.css';

function Programs() {
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    type: '',
    message: '',
    program: ''
  });

  const programs = [
    {
      id: 1,
      title: 'Scholarship Program',
      icon: '🎓',
      description: 'Providing full and partial scholarships to deserving girls for primary, secondary, and tertiary education.',
      benefits: [
        'Full tuition coverage',
        'Learning materials and supplies',
        'Mentorship support',
        'Career guidance'
      ]
    },
    {
      id: 2,
      title: 'Mentorship Initiative',
      icon: '🤝',
      description: 'Connecting young women with successful female professionals who guide and inspire them.',
      benefits: [
        'One-on-one mentoring sessions',
        'Career development workshops',
        'Networking opportunities',
        'Personal development coaching'
      ]
    },
    {
      id: 3,
      title: 'Skills Training',
      icon: '💻',
      description: 'Equipping girls with practical skills in technology, entrepreneurship, and vocational trades.',
      benefits: [
        'Tech and digital literacy',
        'Business development training',
        'Vocational skills',
        'Certificate programs'
      ]
    },
    {
      id: 4,
      title: 'Leadership Academy',
      icon: '👑',
      description: 'Developing the next generation of female leaders through comprehensive leadership training.',
      benefits: [
        'Leadership workshops',
        'Public speaking training',
        'Project management',
        'Community service projects'
      ]
    },
    {
      id: 5,
      title: 'Economic Empowerment',
      icon: '💼',
      description: 'Supporting young women entrepreneurs with microloans, business training, and market access.',
      benefits: [
        'Seed funding and microloans',
        'Business plan development',
        'Marketing support',
        'Financial literacy training'
      ]
    },
    {
      id: 6,
      title: 'Health & Wellness',
      icon: '❤️',
      description: 'Promoting physical and mental health through education, counseling, and healthcare access.',
      benefits: [
        'Health education workshops',
        'Mental health counseling',
        'Healthcare access support',
        'Wellness programs'
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    
    // Set loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
      const endpoint = formType === 'RSVP' 
        ? 'http://localhost:5000/api/forms/rsvp'
        : 'http://localhost:5000/api/forms/partnership';

      const response = await fetch(endpoint, {
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
          organization: '',
          type: '',
          message: '',
          program: ''
        });
        setActiveForm(null);
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form. Please check your connection and try again.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  };

  return (
    <div className="programs">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive initiatives designed to empower girls at every stage of their journey</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section programs-section">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {program.benefits.map((benefit, index) => (
                      <li key={index}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setActiveForm('rsvp');
                    setFormData({ ...formData, program: program.title });
                    window.scrollTo({ top: document.querySelector('.forms-section').offsetTop - 100, behavior: 'smooth' });
                  }}
                >
                  RSVP for Event
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="section forms-section" id="forms">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <p className="section-subtitle">
            Join us in empowering girls and building a brighter future for Ghana
          </p>

          <div className="form-tabs">
            <button 
              className={`form-tab ${activeForm === 'rsvp' ? 'active' : ''}`}
              onClick={() => setActiveForm('rsvp')}
            >
              RSVP for Program Events
            </button>
            <button 
              className={`form-tab ${activeForm === 'partnership' ? 'active' : ''}`}
              onClick={() => setActiveForm('partnership')}
            >
              Partnership Inquiry
            </button>
          </div>

          {activeForm === 'rsvp' && (
            <div className="form-container card fade-in">
              <h3>RSVP for Program Event</h3>
              <p className="form-intro">
                Register your interest to attend or participate in our program events
              </p>
              <form onSubmit={(e) => handleSubmit(e, 'RSVP')}>
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
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="program">Select Program *</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Choose a program --</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.title}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="type">I am interested as a: *</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select option --</option>
                    <option value="participant">Participant/Beneficiary</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="mentor">Mentor</option>
                    <option value="observer">Observer/Guest</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your interest or any specific questions..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit RSVP
                </button>
              </form>
            </div>
          )}

          {activeForm === 'partnership' && (
            <div className="form-container card fade-in">
              <h3>Partnership Inquiry</h3>
              <p className="form-intro">
                Partner with us to amplify our impact and empower more girls across Ghana
              </p>
              <form onSubmit={(e) => handleSubmit(e, 'partnership inquiry')}>
                <div className="form-group">
                  <label htmlFor="name">Contact Person *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization Name *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    placeholder="Your organization or company name"
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
                    placeholder="organization@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Partnership Type *</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select partnership type --</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="ngo">NGO/Non-Profit Collaboration</option>
                    <option value="educational">Educational Institution</option>
                    <option value="government">Government Agency</option>
                    <option value="donor">Individual Donor/Sponsor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Partnership Proposal *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please describe your partnership proposal, areas of interest, and how you envision collaborating with us..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          )}

          {!activeForm && (
            <div className="form-placeholder">
              <p>Select a form above to get started</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Programs;
