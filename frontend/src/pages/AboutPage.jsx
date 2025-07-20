import React, { useState, useEffect } from 'react';
import { mockRestaurantData } from '../mock';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to render text with bold formatting
  const renderFormattedText = (text) => {
    // Split text by paragraphs and process each paragraph
    return text.split('\n\n').map((paragraph, index) => {
      // Process bold text marked with **
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
      const formattedParts = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <p key={index} className="about-paragraph">
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="page-title">À Propos</h1>
            <p className="page-subtitle">
              L'histoire d'une passion pour la cuisine authentique et généreuse
            </p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className={`content-wrapper ${isVisible ? 'slide-up' : ''}`}>
            <div className="text-content">
              <h2 className="content-title">{mockRestaurantData.about.title}</h2>
              <div className="formatted-text">
                {renderFormattedText(mockRestaurantData.about.content)}
              </div>
            </div>

            <div className="values-section">
              <h3 className="values-title">Nos Valeurs</h3>
              <div className="values-grid">
                <div className="value-card">
                  <h4>Produits Locaux</h4>
                  <p>Nous privilégions les circuits courts et les producteurs engagés dans une démarche de qualité.</p>
                </div>
                <div className="value-card">
                  <h4>Cuisine de Saison</h4>
                  <p>Notre carte évolue au rythme des saisons pour vous offrir le meilleur de chaque moment.</p>
                </div>
                <div className="value-card">
                  <h4>Convivialité</h4>
                  <p>Une ambiance chaleureuse et généreuse où le plaisir de bien manger se partage en simplicité.</p>
                </div>
                <div className="value-card">
                  <h4>Authenticité</h4>
                  <p>Des recettes sincères qui racontent une histoire, celle de nos terroirs et de nos passions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-page {
          padding-top: 6rem;
        }

        .about-hero {
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          padding: 4rem 0;
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }

        .hero-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .page-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: #2d2d2d;
          font-weight: 700;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-content {
          padding: 5rem 0;
          background: white;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }

        .content-wrapper.slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        .text-content {
          margin-bottom: 4rem;
        }

        .content-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #2d2d2d;
          text-align: center;
          position: relative;
        }

        .content-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: #c9a96e;
        }

        .formatted-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        .about-paragraph {
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .about-paragraph:last-child {
          margin-bottom: 0;
        }

        .about-paragraph strong {
          color: #2d2d2d;
          font-weight: 600;
        }

        .values-section {
          background: #f8f8f8;
          padding: 3rem;
          border-radius: 8px;
        }

        .values-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #2d2d2d;
          position: relative;
        }

        .values-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 2px;
          background: #c9a96e;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 6px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        }

        .value-card h4 {
          color: #c9a96e;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .value-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-page {
            padding-top: 5rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .content-title {
            font-size: 2rem;
          }

          .formatted-text {
            font-size: 1rem;
          }

          .about-paragraph {
            text-align: left;
          }

          .values-section {
            padding: 2rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .about-content {
            padding: 3rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;