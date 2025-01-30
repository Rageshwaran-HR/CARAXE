import React, { useState, useEffect } from "react";
import "./HeroPage.css";

const HeroPage = () => {
  const items = [
    {
      title: "Welcome to the Automotive Symposium",
      description:
        "Join us for an exciting journey through the latest innovations in the world of automobiles! Whether you're passionate about cutting-edge automotive engineering or just curious about future mobility, this is the event for you.",
      imageUrl: "https://wallpapercave.com/wp/wp8000469.jpg",
    },
    {
      title: "What’s in Store?",
      description:
        "Get ready for a unique blend of technical and non-technical events designed to engage all kinds of participants. From business pitching and hackathons to fun sports and e-sports, there's something for everyone.",
      imageUrl: "https://wallpaperaccess.com/full/2101579.jpg",
    },
    {
      title: "About the Symposium",
      description:
        "This event, hosted by the Automobile Department, brings together industry experts, students, and enthusiasts. Explore future automotive trends, participate in engaging challenges, and enjoy a vibrant atmosphere.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.FK55eE7-nH_5IwPP0D_JRwHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Technical & Non-Technical Events",
      description:
        "Whether you’re looking to pitch a groundbreaking idea or enjoy some e-sports action, our event schedule has it all. Participate in hackathons, workshops, quizzes, and more!",
      imageUrl:
        "https://th.bing.com/th/id/OIP.iBe6HvPLi7mxEiVknW_KAAHaE8?rs=1&pid=ImgDetMain",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const showNextItem = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPreviousItem = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 37) {
      showPreviousItem();
    } else if (e.keyCode === 39) {
      showNextItem();
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // scroll position + viewport height
    if (scrollPosition >= window.innerHeight * 1.1) {
      // Trigger animation when scrolling to 110vh
      setAnimate(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <main className={`intro1-section ${animate ? "animate" : ""}`}>
        <div className="container">
          <div className="grid">
            <div className="column-xs-12">
              <ul className="slider">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={`slider-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <div className="grid vertical">
                      <div className="column-xs-12 column-md-2 hide-mobile">
                        <div className="intro1">
                          <a href="#">
                            <h1 className="title">
                              <span className="underline">{item.title}</span>
                            </h1>
                          </a>
                        </div>
                      </div>
                      <div className="column-xs-12 column-md-10">
                        <div className="image-holder">
                          <img src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className="grid">
                          <div className="column-xs-12 column-md-9">
                            <div className="intro1 show-mobile">
                              <a href="#">
                                <h1 className="title">
                                  <span className="underline">
                                    {item.title}
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <p className="description">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="grid">
                <div className="column-xs-12">
                  <div className="controls">
                    <button className="previous" onClick={showPreviousItem}>
                      <span className="visually-hidden">Previous</span>
                      <span
                        className="icon arrow-left"
                        aria-hidden="true"
                      ></span>
                    </button>
                    <button className="next" onClick={showNextItem}>
                      <span className="visually-hidden">Next</span>
                      <span
                        className="icon arrow-right"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroPage;
