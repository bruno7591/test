import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">La Mi Fa</h3>
            <p className="footer-description">
              Restaurant gastronomique parisien proposant une cuisine de saison 
              avec des produits frais et locaux.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-info">
              <div className="info-item">
                <MapPin size={18} />
                <span>33 rue Pétion 75011 Paris</span>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <span>01 83 91 64 76</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Horaires</h4>
            <div className="footer-info">
              <div className="info-item">
                <Clock size={18} />
                <div>
                  <div>Lun - Ven : 12h30/14h30 – 19h/23h</div>
                  <div>Samedi : 12h30/15h – 19h/23h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 La Mi Fa. Tous droits réservés.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #2d2d2d;
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #c9a96e;
        }

        .footer-subtitle {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #c9a96e;
        }

        .footer-description {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #cccccc;
        }

        .info-item svg {
          color: #c9a96e;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid #444;
          padding-top: 1rem;
          text-align: center;
          color: #999;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;