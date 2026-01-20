import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [hasAnimated, setHasAnimated] = useState(false);
  const eventStatsRef = useRef(null);

  // Gallery images with real photos
  const images = [
    {
      id: 1,
      category: 'education',
      title: 'Scholarship Award Ceremony',
      description: 'Celebrating 50 girls receiving full scholarships for secondary education',
      date: 'December 2023',
      imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80'
    },
    {
      id: 2,
      category: 'mentorship',
      title: 'Mentorship Kickoff Event',
      description: 'First meeting between mentors and mentees in our 2024 cohort',
      date: 'January 2024',
      imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80'
    },
    {
      id: 3,
      category: 'skills',
      title: 'Tech Skills Workshop',
      description: 'Girls learning coding and digital skills at our Accra center',
      date: 'February 2024',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
    },
    {
      id: 4,
      category: 'leadership',
      title: 'Young Leaders Summit',
      description: 'Annual leadership conference bringing together 200 girls from across Ghana',
      date: 'March 2024',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
    },
    {
      id: 5,
      category: 'community',
      title: 'Community Outreach',
      description: 'Our team visiting rural communities to identify and support talented girls',
      date: 'April 2024',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80'
    },
    {
      id: 6,
      category: 'education',
      title: 'Library Opening',
      description: 'Inauguration of our new learning resource center in Kumasi',
      date: 'May 2024',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
    },
    {
      id: 7,
      category: 'skills',
      title: 'Entrepreneurship Training',
      description: 'Young women developing business plans for their startups',
      date: 'June 2024',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
    {
      id: 8,
      category: 'mentorship',
      title: 'Career Day Event',
      description: 'Professionals sharing career insights with aspiring young women',
      date: 'July 2024',
      imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80'
    },
    {
      id: 9,
      category: 'community',
      title: 'Graduation Celebration',
      description: '100 girls celebrating their graduation from our programs',
      date: 'August 2024',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
    },
    {
      id: 10,
      category: 'leadership',
      title: 'Public Speaking Workshop',
      description: 'Building confidence through communication skills training',
      date: 'September 2024',
      imageUrl: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80'
    },
    {
      id: 11,
      category: 'skills',
      title: 'Vocational Training',
      description: 'Girls learning tailoring and fashion design skills',
      date: 'October 2024',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
    },
    {
      id: 12,
      category: 'community',
      title: 'Fundraising Gala',
      description: 'Annual gala raising funds to support more girls in 2025',
      date: 'November 2024',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'education', label: 'Education' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'skills', label: 'Skills Training' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'community', label: 'Community' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const eventStats = useMemo(() => [
    { number: 50, label: 'Events Held', suffix: '+' },
    { number: 10000, label: 'Attendees', suffix: '+' },
    { number: 25, label: 'Partner Organizations', suffix: '+' },
    { number: 15, label: 'Regions Covered', suffix: '' }
  ], []);

  const animateEventCounters = useCallback(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    eventStats.forEach((stat, index) => {
      const element = document.getElementById(`event-stat-${index}`);
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
  }, [eventStats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateEventCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = eventStatsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateEventCounters]);

  // Function to generate color variations for placeholder images
  // const getImagePlaceholder = (id) => {
  //   const colors = [
  //     'linear-gradient(135deg, #8B4756 0%, #A86F7B 100%)',
  //     'linear-gradient(135deg, #A86F7B 0%, #E8D5D9 100%)',
  //     'linear-gradient(135deg, #8B4756 0%, #E8D5D9 100%)',
  //     'linear-gradient(135deg, #A86F7B 0%, #8B4756 100%)'
  //   ];
  //   return colors[id % colors.length];
  // };

  return (
    <div className="gallery">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Event Gallery</h1>
          <p>Capturing moments of transformation, celebration, and empowerment</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <div 
                  className="gallery-image"
                  style={{ 
                    backgroundImage: `url(${image.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{image.title}</h3>
                      <p className="overlay-date">{image.date}</p>
                    </div>
                  </div>
                </div>
                <div className="gallery-info">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                  <span className="gallery-date">{image.date}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <p>No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Stats */}
      <section className="section event-stats" ref={eventStatsRef}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Events in Numbers</h2>
          <div className="stats-grid">
            {eventStats.map((stat, index) => (
              <div key={index} className="stat-box">
                <div className="stat-number" id={`event-stat-${index}`}>0</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <div 
              className="lightbox-image"
              style={{ 
                backgroundImage: `url(${selectedImage.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-description">{selectedImage.description}</p>
              <p className="lightbox-date">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
