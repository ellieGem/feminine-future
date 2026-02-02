import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [hasAnimated, setHasAnimated] = useState(false);
  const eventStatsRef = useRef(null);

  // Gallery images from 2024 educational mentorship session
  const images = [
    {
      id: 1,
      category: 'mentorship',
      title: '',
      description: 'First meeting between mentors and mentees.',
      // date: 'January 2024',
      imageUrl: '/images/img1jpg.jpg'
    },
    {
      id: 2,
      category: 'mentorship',
      title: '',
      description: 'Girls learning and growing in our mentorship program',
      // date: 'February 2024',
      imageUrl: '/images/img2.jpg'
    },
    {
      id: 3,
      category: 'mentorship',
      title: '',
      description: 'Mentorship in action - building connections and skills',
      // date: 'March 2024',
      imageUrl: '/images/img3.jpg'
    },
    {
      id: 4,
      category: 'mentorship',
      title: '',
      description: 'Participants engaging in meaningful mentorship experiences',
      // date: 'April 2024',
      imageUrl: '/images/img4.jpg'
    },
    {
      id: 5,
      category: 'mentorship',
      title: '',
      description: 'Collaborative learning and mentorship sessions',
      // date: 'May 2024',
      imageUrl: '/images/img5.jpg'
    },
    {
      id: 6,
      category: 'mentorship',
      title: '',
      description: 'Empowering young women through mentorship',
      // date: 'June 2024',
      imageUrl: '/images/img6.jpg'
    },
    {
      id: 7,
      category: 'mentorship',
      title: '',
      description: 'Mentors sharing insights and guidance with mentees',
      // date: 'July 2024',
      imageUrl: '/images/img7.jpg'
    },
    {
      id: 8,
      category: 'mentorship',
      title: '',
      description: 'Building confidence through mentorship and support',
      // date: 'August 2024',
      imageUrl: '/images/img8.jpg'
    },
    {
      id: 9,
      category: 'mentorship',
      title: '',
      description: 'Mentorship moments of growth and inspiration',
      // date: 'September 2024',
      imageUrl: '/images/img9.jpg'
    },
    {
      id: 10,
      category: 'mentorship',
      title: '',
      description: 'Girls developing skills through mentorship programs',
      // date: 'October 2024',
      imageUrl: '/images/img10.jpg'
    },
    {
      id: 11,
      category: 'mentorship',
      title: '',
      description: 'Celebrating mentorship achievements and progress',
      // date: 'November 2024',
      imageUrl: '/images/img11.jpg'
    },
    {
      id: 12,
      category: 'mentorship',
      title: '',
      description: 'Mentorship sessions fostering education and growth',
      // date: 'December 2023',
      imageUrl: '/images/img12.jpg'
    },
    {
      id: 13,
      category: 'mentorship',
      title: '',
      description: 'Mentors and mentees connecting for a brighter future',
      // date: 'January 2024',
      imageUrl: '/images/img13.jpg'
    },
    {
      id: 14,
      category: 'mentorship',
      title: '',
      description: 'Building lasting mentorship relationships',
      // date: 'February 2024',
      imageUrl: '/images/img14.jpg'
    },
    {
      id: 15,
      category: 'mentorship',
      title: '',
      description: 'Mentorship creating opportunities for success',
      // date: 'March 2024',
      imageUrl: '/images/img15.jpg'
    },
    {
      id: 16,
      category: 'mentorship',
      title: '',
      description: 'Transformative mentorship experiences',
      // date: 'April 2024',
      imageUrl: '/images/img16.jpg'
    },
    {
      id: 17,
      category: 'mentorship',
      title: 'Mentorship Retreat 2024',
      description: 'Intensive retreat bringing mentors and mentees together for deeper connections',
      // date: 'May 2024',
      imageUrl: '/images/img17.jpg'
    }
    // {
    //   id: 18,
    //   category: 'skills',
    //   title: '',
    //   description: 'Skills training and development programs',
    //   date: 'June 2024',
    //   imageUrl: '/images/img18.jpg'
    // }
    // {
    //   id: 19,
    //   category: 'education',
    //   title: '',
    //   description: 'Educational opportunities and resources',
    //   date: 'July 2024',
    //   imageUrl: '/images/img19.jpg'
    // }
    // {
    //   id: 20,
    //   category: 'leadership',
    //   title: '',
    //   description: 'Leadership development and training',
    //   date: 'August 2024',
    //   imageUrl: '/images/img20.jpg'
    // }
    // {
    //   id: 21,
    //   category: 'community',
    //   title: '',
    //   description: 'Community engagement and impact',
    //   date: 'September 2024',
    //   imageUrl: '/images/img21.jpg'
    // }
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
                      {/* <h3>{image.title}</h3>
                      <p className="overlay-date">{image.date}</p> */}
                    </div>
                  </div>
                </div>
                <div className="gallery-info">
                  {/* <h4>{image.title}</h4> */}
                  <p>{image.description}</p>
                  {/* <span className="gallery-date">{image.date}</span> */}
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
      {/* <section className="section event-stats" ref={eventStatsRef}>
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
      </section> */}

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
