import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Medilab</h1>
            <p>Your trusted medical care provider.</p>
          </div>

          {/* Cards Section */}
          <div className="cards-section">
              <div className="card">
                <h2>Why Choose Medilab</h2>
                <p>We have a team of highly experienced medical professionals.</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
