import { Link } from "react-router-dom"
import MagazineCard from "../components/MagazineCard"
import "../styles/home.css"

const Home = () => {
  const recentMagazines = [
    {
      id: 1,
      title: "Leaders of Tomorrow",
      description:
        "Featuring inspiring stories of young entrepreneurs who are changing the world with their innovative ideas and determination.",
      coverImage: "/placeholder.svg?height=250&width=300",
      date: "December 2024",
      category: "Leadership",
      link: "#",
    },
    {
      id: 2,
      title: "Innovation Chronicles",
      description:
        "Exploring breakthrough technologies and the visionaries behind them, shaping the future of various industries.",
      coverImage: "/placeholder.svg?height=250&width=300",
      date: "November 2024",
      category: "Innovation",
      link: "#",
    },
    {
      id: 3,
      title: "Social Impact Stories",
      description:
        "Highlighting changemakers who are making a difference in their communities and creating positive social impact.",
      coverImage: "/placeholder.svg?height=250&width=300",
      date: "October 2024",
      category: "Social Impact",
      link: "#",
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Connecting Stories. <span className="highlight">Sparking Minds.</span>
            </h1>
            <p className="hero-subtitle">
              We are driven by curiosity, innovation, and a passion for storytelling, connecting audiences with
              inspiring individuals, empowering ideas, and transformative narratives that shape society.
            </p>
            <div className="hero-buttons">
              <Link to="/magazines" className="btn">
                Explore Magazines
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
          {/* <div className="hero-image">
            <img src="/placeholder.svg?height=400&width=500" alt="Arthasynapse Vision" />
          </div> */}
        </div>
      </section>

      {/* Core Values Section
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Integrity</h3>
              <p>
                We maintain the highest standards of honesty and transparency in all our storytelling and business
                practices.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Creativity</h3>
              <p>
                We embrace innovative approaches to content creation and storytelling that captivate and inspire our
                audience.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Inclusiveness</h3>
              <p>
                We celebrate diversity and ensure that voices from all backgrounds and communities are heard and
                represented.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we do, from content creation to customer service.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Recent Magazines Section */}
      <section className="section magazines-section">
        <div className="container">
          <h2 className="section-title">Recent Magazines</h2>
          <p className="section-subtitle">
            Discover our latest publications featuring remarkable stories of success, innovation, and impact across
            various industries.
          </p>
          <div className="magazines-grid">
            {recentMagazines.map((magazine) => (
              <MagazineCard key={magazine.id} magazine={magazine} />
            ))}
          </div>
          <div className="magazines-cta-">
            <Link to="/magazines" >
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
                We go beyond surface-level reporting to uncover the authentic stories behind success, focusing on the
                human element that drives change.
              </p>
            </div>
            <div className="feature-card">
              <h3>Wide Reach Through Traditional and Digital Media</h3>
              <p>
                Our multi-platform approach ensures your story reaches the right audience through both print and digital
                channels.
              </p>
            </div>
            <div className="feature-card">
              <h3>Commitment to Authenticity and Impact</h3>
              <p>
                Every story we tell is carefully crafted to maintain authenticity while creating meaningful impact for
                our readers and featured subjects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
