import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler une connexion et rediriger vers la page de mise à jour
    navigate('/update-info');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="orange-logo">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <rect width="120" height="40" rx="8" fill="#FF6600"/>
            <text x="60" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
              Orange
            </text>
          </svg>
        </div>
        <div className="language-selector">
          <select>
            <option value="pl">Polski</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div className="login-content">
        <div className="login-form-container">
          <div className="login-form-header">
            <h1>Zaloguj się</h1>
            <p>Wprowadź swoje dane, aby uzyskać dostęp do konta</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Adres e-mail lub numer telefonu</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Wprowadź adres e-mail lub numer telefonu"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Hasło</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Wprowadź hasło"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Zapamiętaj mnie</span>
              </label>
              <a href="#" className="forgot-password">Zapomniałeś hasła?</a>
            </div>

            <button type="submit" className="login-button">
              Zaloguj się
            </button>
          </form>

          <div className="login-alternatives">
            <div className="divider">
              <span>lub</span>
            </div>
            
            <button className="social-login facebook">
              <span>🔵</span>
              Zaloguj się przez Facebook
            </button>
            
            <button className="social-login google">
              <span>🔴</span>
              Zaloguj się przez Google
            </button>
          </div>

          <div className="signup-link">
            <p>Nie masz konta? <a href="#">Zarejestruj się</a></p>
          </div>
        </div>

        <div className="login-sidebar">
          <div className="promo-content">
            <h2>Twój świat w Orange</h2>
            <ul>
              <li>✓ Zarządzaj swoim kontem</li>
              <li>✓ Sprawdzaj rachunki online</li>
              <li>✓ Korzystaj z ekskluzywnych ofert</li>
              <li>✓ Kontroluj swoje wydatki</li>
            </ul>
            <div className="promo-image">
              <div className="phone-mockup">
                📱
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="login-footer">
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

export default LoginPage;