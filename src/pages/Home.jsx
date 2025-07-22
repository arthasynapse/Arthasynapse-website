import { Link } from "react-router-dom";
import MagazineCard from "../components/MagazineCard";
import "../styles/home.css";
import leaders from "../assets/magazine/leaders.jpg";
import innovation from "../assets/magazine/innovation.jpg";
import social from "../assets/magazine/social.jpg";

const Home = () => {
  const recentMagazines = [
    {
      id: 1,
      title: "Leaders of Tomorrow",
      description:
        "Featuring inspiring stories of young entrepreneurs who are changing the world with their innovative ideas and determination.",
      coverImage: leaders,
      date: "December 2024",
      category: "Leadership",
      link: "#",
    },
    {
      id: 2,
      title: "Innovation Chronicles",
      description:
        "Exploring breakthrough technologies and the visionaries behind them, shaping the future of various industries.",
      coverImage: innovation,
      date: "November 2024",
      category: "Innovation",
      link: "#",
    },
    {
      id: 3,
      title: "Social Impact Stories",
      description:
        "Highlighting changemakers who are making a difference in their communities and creating positive social impact.",
      coverImage: social,
      date: "October 2024",
      category: "Social Impact",
      link: "#",
    },
  ];

  const handleScrollAndNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Connecting Stories.{" "}
              <span className="highlight">Sparking Minds.</span>
            </h1>
            <p className="hero-subtitle">
              We are driven by curiosity, innovation, and a passion for
              storytelling, connecting audiences with inspiring individuals,
              empowering ideas, and transformative narratives that shape
              society.
            </p>
            <div className="hero-buttons">
              <Link
                to="/magazines"
                className="btn"
                onClick={handleScrollAndNavigate}
                >
                Explore Magazines
              </Link>
              <Link
                to="/about"
                className="btn btn-outline"
                onClick={handleScrollAndNavigate}
                >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Magazines Section */}
      <section className="section magazines-section">
        <div className="container">
          <h2 className="section-title">Recent Magazines</h2>
          <p className="section-subtitle">
            Discover our latest publications featuring remarkable stories of
            success, innovation, and impact across various industries.
          </p>
          <div className="magazines-grid">
            {recentMagazines.map((magazine) => (
              <MagazineCard key={magazine.id} magazine={magazine} />
            ))}
          </div>
          <div className="magazines-cta-">
            <Link to="/magazines" onClick={handleScrollAndNavigate}>
              <button className="home-allmag-btn">View All Magazines</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Arthasynapse</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Deep Focus on Human-Driven Narratives</h3>
              <p>
                We go beyond surface-level reporting to uncover the authentic
                stories behind success, focusing on the human element that
                drives change.
              </p>
            </div>
            <div className="feature-card">
              <h3>Wide Reach Through Traditional and Digital Media</h3>
              <p>
                Our multi-platform approach ensures your story reaches the right
                audience through both print and digital channels.
              </p>
            </div>
            <div className="feature-card">
              <h3>Commitment to Authenticity and Impact</h3>
              <p>
                Every story we tell is carefully crafted to maintain
                authenticity while creating meaningful impact for our readers
                and featured subjects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
