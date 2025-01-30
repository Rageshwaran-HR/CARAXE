import React from 'react';
import './CardsTech.css';

const CardTech = () => {
  return (
    <>
      <h2 className="section-header">Technical Events</h2>

      <section className="hero-section">
        <div className="card-grid">
          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://www.enderuncolleges.com/wp-content/uploads/2023/02/The-Art-of-Pitching-Your-Business-Idea-Tips-and-Techniques-for-Entrepreneurship-Students.jpg)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">Idea/Business Pitching</p>
              <h3 className="card__category">Pitch Your Ideas to Innovators</h3>
              <div className="card__details">
                <p>Present your business ideas to a panel of innovators and investors. Show your creativity and entrepreneurial spirit!</p>
              </div>
            </div>
          </div>

          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-megaphone-banner-quiz-png-image_4738050.png)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">AutoQuiz</p>
              <h3 className="card__category">Test Your Tech Knowledge</h3>
              <div className="card__details">
                <p>Put your tech knowledge to the test in a fast-paced quiz. Answer questions from various fields in technology!</p>
              </div>
            </div>
          </div>

          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://th.bing.com/th/id/OIP.YwrPGkTN1ASdTBb4_jXNAwHaEK?rs=1&pid=ImgDetMain)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">48hrs Hackathon</p>
              <h3 className="card__category">Build in 48 Hours</h3>
              <div className="card__details">
                <p>Join the 48-hour hackathon and develop a product, app, or solution. Collaborate, innovate, and bring your ideas to life!</p>
              </div>
            </div>
          </div>

          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://fablabbkk.com/wp-content/uploads/2021/08/minkus-aCniNTiIFd8-unsplash-scaled.jpg)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">3D Printing Workshop</p>
              <h3 className="card__category">Learn & Create in 3D</h3>
              <div className="card__details">
                <p>Explore the world of 3D printing in this hands-on workshop. Learn how to design and print your own 3D models!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardTech;
