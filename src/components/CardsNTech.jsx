import React from 'react';
import './CardsTech.css';

const CardNTech = () => {
  return (
    <>
      <h2 className="section-header">Non-Technical Events</h2>

      <section className="hero-section">
        <div className="card-grid">
          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://wallpaperaccess.com/full/6163537.jpg)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">BGMI</p>
              <h3 className="card__category">Battle Grounds Mobile India</h3>
              <div className="card__details">
                <p>Compete in the ultimate battle royale with BGMI. Show your strategy and skills to be the last one standing!</p>
              </div>
            </div>
          </div>
          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://i.pinimg.com/originals/f5/5e/55/f55e550a376e2ed114ea29964bfeda47.jpg)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">FREEFIRE</p>
              <h3 className="card__category">Exciting Mobile Game</h3>
              <div className="card__details">
                <p>Join the exciting world of Freefire, where you can team up and fight to be the last team standing!</p>
              </div>
            </div>
          </div>
          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://th.bing.com/th/id/OIP.ujGp9iHWMzvMiMmNUMTp3wHaNK?rs=1&pid=ImgDetMain)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">Box Cricket</p>
              <h3 className="card__category">Fun Cricket in a Box</h3>
              <div className="card__details">
                <p>Play cricket in a smaller, fun-filled environment with Box Cricket. Perfect for any cricket lover!</p>
              </div>
            </div>
          </div>
          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://www.teahub.io/photos/full/9-96690_ball-football-wallpapers-hd-football-lovers.jpg)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">Box Football</p>
              <h3 className="card__category">Football in a Box</h3>
              <div className="card__details">
                <p>Experience football in a fun, compact form with Box Football. Get ready to play and score goals in a confined space!</p>
              </div>
            </div>
          </div>
          <div className="card" onClick={(e) => e.preventDefault()}>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_HarmonyTheFallOfReverie_image1600w.jpg)',
              }}
            ></div>
            <div className="card__content">
              <p className="card__heading">Harmony Hub</p>
              <h3 className="card__category">Music & Dance Fun</h3>
              <div className="card__details">
                <p>Join the Harmony Hub for music, dance, and creativity. It's time to groove and make some noise!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardNTech;
