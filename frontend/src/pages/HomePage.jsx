import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Award, Users, Heart } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <ChefHat className="feature-icon" size={48} />,
      title: "Cuisine de Saison",
      description: "Des produits frais et locaux sélectionnés avec soin pour sublimer chaque plat."
    },
    {
      icon: <Award className="feature-icon" size={48} />,
      title: "Excellence Culinaire",
      description: "Une carte qui évolue au rythme des saisons et des inspirations de notre chef."
    },
    {
      icon: <Users className="feature-icon" size={48} />,
      title: "Ambiance Conviviale",
      description: "Un cadre chaleureux et élégant pour partager des moments uniques."
    },
    {
      icon: <Heart className="feature-icon" size={48} />,
      title: "Passion & Savoir-faire",
      description: "L'amour du métier et la recherche constante de la perfection gustative."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
              <h1 className="hero-title">La Mi Fa</h1>
              <p className="hero-subtitle">
                Bistronomie de quartier
              </p>
              <p className="hero-description">
                Une cuisine de saison qui raconte l'histoire de nos producteurs 
                et célèbre les saveurs authentiques dans un cadre raffiné.
              </p>
              <div className="hero-actions">
                <Link to="/menu" className="btn">
                  Découvrir notre carte
                </Link>
                <Link to="/reservations" className="btn btn-outline">
                  Réserver une table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">L'Art de Bien Recevoir</h2>
            <p className="section-description">
              Chez La Mi Fa, chaque détail compte pour vous offrir une expérience gastronomique mémorable.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card slide-up`} style={{animationDelay: `${index * 0.1}s`}}>
                {feature.icon}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Réservez votre table</h2>
            <p className="cta-description">
              Vivez une expérience culinaire unique dans notre restaurant. 
              Contactez-nous pour réserver votre table.
            </p>
            <div className="cta-actions">
              <Link to="/reservations" className="btn">
                Réserver maintenant
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding-top: 0;
        }

        .hero {
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f5f5f5" width="1200" height="800"/><path fill="%23c9a96e" opacity="0.1" d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"/></svg>');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-overlay {
          width: 100%;
        }

        .hero-content {
          text-align: center;
          color: white;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-content.fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          color: #c9a96e;
          font-family: 'Playfair Display', serif;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          margin-bottom: 1rem;
          color: #2d2d2d;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .feature-card {
          text-align: center;
          padding: 2.5rem 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .feature-card.slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          color: #c9a96e;
          margin-bottom: 1.5rem;
        }

        .feature-title {
          margin-bottom: 1rem;
          color: #2d2d2d;
        }

        .feature-description {
          color: #666;
          line-height: 1.6;
        }

        .cta-section {
          background: #f8f8f8;
          padding: 5rem 0;
          text-align: center;
        }

        .cta-title {
          margin-bottom: 1.5rem;
          color: #2d2d2d;
        }

        .cta-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .cta-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;