import React, { useState, useEffect } from 'react';
import { mockRestaurantData } from '../mock';

const MenuPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderMenuSection = (sectionName, items) => {
    return (
      <div className="menu-section">
        <h2 className="section-title">{sectionName}</h2>
        <div className="menu-items">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className={`menu-item slide-up ${isVisible ? 'visible' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="item-header">
                <h3 className="item-name">{item.name}</h3>
                <div className="price-line"></div>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="page-title">Notre Menu</h1>
            <p className="page-subtitle">
              Une cuisine de saison qui évolue au rythme de nos inspirations 
              et des produits de nos producteurs locaux
            </p>
          </div>
        </div>
      </div>

      <div className="menu-content">
        <div className="container">
          {renderMenuSection('Entrées', mockRestaurantData.menu.entrées)}
          {renderMenuSection('Plats', mockRestaurantData.menu.plats)}
          {renderMenuSection('Desserts', mockRestaurantData.menu.desserts)}
        </div>
      </div>

      <style jsx>{`
        .menu-page {
          padding-top: 6rem;
        }

        .menu-hero {
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
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .menu-content {
          padding: 5rem 0;
          background: white;
        }

        .menu-section {
          margin-bottom: 5rem;
        }

        .menu-section:last-child {
          margin-bottom: 0;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #2d2d2d;
          position: relative;
          font-weight: 600;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: #c9a96e;
        }

        .menu-items {
          max-width: 800px;
          margin: 0 auto;
        }

        .menu-item {
          padding: 2rem 0;
          border-bottom: 1px solid #f0f0f0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.3s ease;
        }

        .menu-item.slide-up.visible {
          animation: slideUpFade 0.8s ease-out forwards;
        }

        .menu-item:last-child {
          border-bottom: none;
        }

        .menu-item:hover {
          padding-left: 1rem;
          background: rgba(201, 169, 110, 0.02);
          border-radius: 4px;
        }

        @keyframes slideUpFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .item-header {
          display: flex;
          align-items: flex-end;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .item-name {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2d2d2d;
          margin: 0;
          white-space: nowrap;
        }

        .price-line {
          flex: 1;
          height: 1px;
          background: repeating-linear-gradient(
            to right,
            #c9a96e,
            #c9a96e 4px,
            transparent 4px,
            transparent 8px
          );
          margin-bottom: 4px;
        }

        .item-price {
          font-size: 1.3rem;
          font-weight: 600;
          color: #c9a96e;
          white-space: nowrap;
        }

        .item-description {
          color: #666;
          line-height: 1.7;
          font-size: 1rem;
          margin: 0;
          padding-left: 0;
        }

        @media (max-width: 768px) {
          .menu-page {
            padding-top: 5rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .item-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .price-line {
            display: none;
          }

          .item-name {
            font-size: 1.2rem;
          }

          .item-price {
            font-size: 1.1rem;
            align-self: flex-end;
          }

          .menu-item:hover {
            padding-left: 0;
            background: none;
          }

          .menu-content {
            padding: 3rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;