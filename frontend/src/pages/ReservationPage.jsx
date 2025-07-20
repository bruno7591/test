import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        date: '',
        time: '',
        guests: '2',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  if (isSubmitted) {
    return (
      <div className="reservation-page">
        <div className="success-message">
          <div className="container">
            <div className="success-content">
              <CheckCircle size={64} className="success-icon" />
              <h2>Réservation confirmée !</h2>
              <p>Nous avons bien reçu votre demande de réservation. Nous vous confirmerons par email ou téléphone dans les plus brefs délais.</p>
              <p className="booking-details">
                <strong>Détails de votre réservation :</strong><br />
                Date : {formData.date}<br />
                Heure : {formData.time}<br />
                Nombre de personnes : {formData.guests}<br />
                Nom : {formData.name}
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .reservation-page {
            padding-top: 6rem;
            min-height: 100vh;
            background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
            display: flex;
            align-items: center;
          }

          .success-message {
            width: 100%;
            text-align: center;
          }

          .success-content {
            background: white;
            padding: 4rem 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
            animation: fadeInUp 0.8s ease-out;
          }

          .success-icon {
            color: #22c55e;
            margin-bottom: 2rem;
          }

          .success-content h2 {
            color: #2d2d2d;
            margin-bottom: 1.5rem;
            font-size: 2rem;
          }

          .success-content p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .booking-details {
            background: #f8f8f8;
            padding: 1.5rem;
            border-radius: 6px;
            margin-top: 2rem;
            text-align: left;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="reservation-page">
      <div className="reservation-hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="page-title">Réservations</h1>
            <p className="page-subtitle">
              Réservez votre table pour une expérience culinaire mémorable
            </p>
          </div>
        </div>
      </div>

      <div className="reservation-content">
        <div className="container">
          <div className="reservation-wrapper">
            <div className="form-section">
              <h2 className="form-title">Réserver une table</h2>
              <form onSubmit={handleSubmit} className="reservation-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <Calendar size={20} />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Clock size={20} />
                      Heure
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Choisir une heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Users size={20} />
                      Nombre de personnes
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      {guestOptions.map(num => (
                        <option key={num} value={num}>
                          {num} personne{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <User size={20} />
                    Nom et prénom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <Mail size={20} />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Phone size={20} />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="01 23 45 67 89"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <MessageSquare size={20} />
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input textarea"
                    placeholder="Allergies, occasion spéciale, demandes particulières..."
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className={`btn submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Envoi en cours...' : 'Confirmer la réservation'}
                </button>
              </form>
            </div>

            <div className="info-section">
              <h3 className="info-title">Informations pratiques</h3>
              <div className="info-content">
                <div className="info-item">
                  <Clock size={24} />
                  <div>
                    <h4>Horaires d'ouverture</h4>
                    <p>Lundi - Vendredi : 12h30/14h30 – 19h/23h</p>
                    <p>Samedi : 12h30/15h – 19h/23h</p>
                  </div>
                </div>

                <div className="info-item">
                  <Phone size={24} />
                  <div>
                    <h4>Réservation par téléphone</h4>
                    <p>01 83 91 64 76</p>
                    <p>Du lundi au samedi</p>
                  </div>
                </div>

                <div className="info-item">
                  <Users size={24} />
                  <div>
                    <h4>Groupes</h4>
                    <p>Pour les groupes de plus de 8 personnes, merci de nous contacter directement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reservation-page {
          padding-top: 6rem;
          min-height: 100vh;
          background: #fafafa;
        }

        .reservation-hero {
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          padding: 4rem 0;
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s ease-out forwards;
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

        .reservation-content {
          padding: 5rem 0;
        }

        .reservation-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .form-section {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .form-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #2d2d2d;
          text-align: center;
        }

        .reservation-form {
          max-width: none;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #2d2d2d;
        }

        .form-label svg {
          color: #c9a96e;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          background: white;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
          border-radius: 6px;
        }

        .form-input:focus {
          outline: none;
          border-color: #c9a96e;
          box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.1);
        }

        .textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
          padding: 1.2rem;
          font-size: 1.1rem;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }

        .submit-btn.loading {
          background: #b8985f;
          cursor: not-allowed;
        }

        .info-section {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          height: fit-content;
        }

        .info-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #2d2d2d;
          text-align: center;
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-item svg {
          color: #c9a96e;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #2d2d2d;
        }

        .info-item p {
          color: #666;
          line-height: 1.5;
          margin-bottom: 0.3rem;
        }

        @media (max-width: 968px) {
          .reservation-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .reservation-page {
            padding-top: 5rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .form-section,
          .info-section {
            padding: 2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .reservation-content {
            padding: 3rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ReservationPage;