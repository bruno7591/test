import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { mockRestaurantData } from '../mock';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">
              Nous sommes là pour vous accueillir et répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="section-title">Nos Coordonnées</h2>
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="card-header">
                    <MapPin className="card-icon" size={32} />
                    <h3>Adresse</h3>
                  </div>
                  <div className="card-content">
                    <p>{mockRestaurantData.contact.address}</p>
                    <p className="additional-info">Métro : République, Oberkampf</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="card-header">
                    <Phone className="card-icon" size={32} />
                    <h3>Téléphone</h3>
                  </div>
                  <div className="card-content">
                    <p>{mockRestaurantData.contact.phone}</p>
                    <p className="additional-info">Réservations recommandées</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="card-header">
                    <Clock className="card-icon" size={32} />
                    <h3>Horaires</h3>
                  </div>
                  <div className="card-content">
                    <p>{mockRestaurantData.contact.hours.weekdays}</p>
                    <p>{mockRestaurantData.contact.hours.saturday}</p>
                    <p className="additional-info">Fermé le dimanche</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="card-header">
                    <Mail className="card-icon" size={32} />
                    <h3>Email</h3>
                  </div>
                  <div className="card-content">
                    <p>contact@lamifa.fr</p>
                    <p className="additional-info">Réponse sous 24h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-section">
              <h2 className="section-title">Nous Trouver</h2>
              <div className="map-container">
                <div className="map-placeholder">
                  <MapPin size={48} />
                  <p>Carte interactive</p>
                  <p className="map-address">{mockRestaurantData.contact.address}</p>
                  <button className="map-btn">
                    Ouvrir dans Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="additional-info-section">
            <div className="info-grid">
              <div className="info-block">
                <h3>Accès & Transport</h3>
                <p>
                  Le restaurant La Mi Fa est facilement accessible en métro (lignes 3, 5, 8, 9, 11) 
                  depuis les stations République et Oberkampf. Plusieurs lignes de bus desservent également le quartier.
                </p>
                <p>
                  <strong>Parking :</strong> Plusieurs parkings publics sont disponibles à proximité.
                </p>
              </div>

              <div className="info-block">
                <h3>Accessibilité</h3>
                <p>
                  Notre restaurant est accessible aux personnes à mobilité réduite. 
                  N'hésitez pas à nous contacter pour toute question spécifique concernant l'accessibilité.
                </p>
                <p>
                  <strong>Animaux :</strong> Les animaux de compagnie sont les bienvenus sur notre terrasse.
                </p>
              </div>

              <div className="info-block">
                <h3>Événements Privés</h3>
                <p>
                  La Mi Fa peut privatiser une partie ou la totalité du restaurant pour vos événements privés. 
                  Contactez-nous pour discuter de vos besoins spécifiques.
                </p>
                <p>
                  <strong>Capacité :</strong> Jusqu'à 50 personnes en privatisation complète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding-top: 6rem;
        }

        .contact-hero {
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

        .contact-content {
          padding: 5rem 0;
          background: white;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #2d2d2d;
          text-align: center;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 2px;
          background: #c9a96e;
        }

        .info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .info-card {
          background: #f8f8f8;
          padding: 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .card-icon {
          color: #c9a96e;
        }

        .card-header h3 {
          color: #2d2d2d;
          font-size: 1.3rem;
          margin: 0;
        }

        .card-content p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .card-content p:last-child {
          margin-bottom: 0;
        }

        .additional-info {
          color: #888 !important;
          font-size: 0.9rem;
          font-style: italic;
        }

        .map-container {
          background: #f8f8f8;
          border-radius: 8px;
          overflow: hidden;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-placeholder {
          text-align: center;
          color: #666;
        }

        .map-placeholder svg {
          color: #c9a96e;
          margin-bottom: 1rem;
        }

        .map-placeholder p {
          margin-bottom: 0.5rem;
        }

        .map-address {
          font-weight: 600;
          color: #2d2d2d;
          margin-bottom: 1.5rem !important;
        }

        .map-btn {
          background: #c9a96e;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .map-btn:hover {
          background: #b8985f;
          transform: translateY(-2px);
        }

        .additional-info-section {
          background: #f8f8f8;
          padding: 3rem;
          border-radius: 12px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .info-block h3 {
          color: #c9a96e;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .info-block p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .info-block p:last-child {
          margin-bottom: 0;
        }

        .info-block strong {
          color: #2d2d2d;
        }

        @media (max-width: 968px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .info-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding-top: 5rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .contact-content {
            padding: 3rem 0;
          }

          .additional-info-section {
            padding: 2rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .map-container {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;