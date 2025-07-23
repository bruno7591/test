import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UpdateInfoPage.css';

const UpdateInfoPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="update-info-container">
      <div className="update-header">
        <div className="orange-logo">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <rect width="120" height="40" rx="8" fill="#FF6600"/>
            <text x="60" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
              Orange
            </text>
          </svg>
        </div>
        <div className="user-menu">
          <span className="user-name">Witaj, Użytkowniku</span>
          <button onClick={handleLogout} className="logout-btn">Wyloguj</button>
        </div>
      </div>

      <div className="update-content">
        <div className="main-message">
          <div className="warning-icon">
            ⚠️
          </div>
          <h1>Aktualizacja wymagana</h1>
          <p className="subtitle">Twoje dane wymagają aktualizacji</p>
        </div>

        <div className="info-card">
          <div className="card-header">
            <h2>Dlaczego muszę zaktualizować swoje dane?</h2>
          </div>
          <div className="card-content">
            <p>
              Zgodnie z obowiązującymi przepisami prawa oraz w celu zapewnienia najwyższego poziomu 
              bezpieczeństwa Twojego konta, prosimy o aktualizację Twoich danych osobowych.
            </p>
            <ul className="requirements-list">
              <li>✓ Aktualne dane kontaktowe</li>
              <li>✓ Weryfikacja tożsamości</li>
              <li>✓ Zgodność z RODO</li>
              <li>✓ Bezpieczeństwo konta</li>
            </ul>
          </div>
        </div>

        <div className="action-section">
          <h3>Co musisz zrobić?</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Przygotuj dokumenty</h4>
                <p>Dowód osobisty lub paszport w wersji elektronicznej</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Wypełnij formularz</h4>
                <p>Zaktualizuj swoje dane osobowe i kontaktowe</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Potwierdź zmiany</h4>
                <p>Zweryfikuj wprowadzone informacje</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <button className="update-button primary">
            Zaktualizuj dane teraz
          </button>
          <button className="update-button secondary">
            Przypomnij mi później
          </button>
        </div>

        <div className="info-banner">
          <div className="banner-icon">ℹ️</div>
          <div className="banner-content">
            <h4>Ważne informacje</h4>
            <p>
              Aktualizacja danych jest wymagana do <strong>31 marca 2024</strong>. 
              Po tym terminie dostęp do niektórych usług może być ograniczony.
            </p>
          </div>
        </div>

        <div className="help-section">
          <h3>Potrzebujesz pomocy?</h3>
          <div className="help-options">
            <div className="help-option">
              <div className="help-icon">📞</div>
              <div className="help-content">
                <h4>Zadzwoń do nas</h4>
                <p>601 102 601 (bezpłatnie z Orange)</p>
                <p>Codziennie 7:00 - 22:00</p>
              </div>
            </div>
            <div className="help-option">
              <div className="help-icon">💬</div>
              <div className="help-content">
                <h4>Chat online</h4>
                <p>Porozmawiaj z naszym konsultantem</p>
                <p>Dostępny 24/7</p>
              </div>
            </div>
            <div className="help-option">
              <div className="help-icon">🏪</div>
              <div className="help-content">
                <h4>Salon Orange</h4>
                <p>Znajdź najbliższy salon</p>
                <p>Pomoc specjalisty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="update-footer">
        <div className="footer-links">
          <a href="#">Regulamin</a>
          <a href="#">Polityka prywatności</a>
          <a href="#">Pomoc</a>
          <a href="#">Kontakt</a>
        </div>
        <p>&copy; 2024 Orange Polska. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default UpdateInfoPage;