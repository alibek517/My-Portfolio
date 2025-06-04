import React, { useState, useEffect, useRef } from 'react';
import './style/Home.css';

function Home() {
  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo4.jpg',
    '/images/photo6.jpg',
    '/images/photo7.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const introRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
  }, []);

  return (
    <div className="home">
      <div className="intro" ref={introRef}>
        <h1 className="devel">
          Hi, I'm Alibek, a passionate web developer. <br />
          Welcome to my professional portfolio.
        </h1>

        <div className="social-links">
          <a href="https://t.me/al11bek" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
              alt="Telegram logo"
              className="icon"
            />
            <h3>My Telegram</h3>
          </a>
          <a href="https://www.instagram.com/kom1lboyevv_/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram logo"
              className="icon"
            />
            <h3>My Instagram</h3>
          </a>
          <a href="https://github.com/alibek517" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub logo"
              className="icon"
            />
            <h3>My GitHub</h3>
          </a>
        </div>
      </div>

      <div className="photo-gallery" ref={galleryRef}>
        <img src={selectedImage} alt="Selected" className="main-photo" />
        <div className="thumbnail-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
