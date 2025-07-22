"use client"
import React from "react"
import "../styles/magazines.css"
import MagazineCard from "../components/MagazineCard"
import leader from '../assets/magazine/leaders.jpg'
import innovation from '../assets/magazine/innovation.jpg'
import social from '../assets/magazine/social.jpg'
import women from '../assets/magazine/women.jpg'
import tech from '../assets/magazine/tech.jpg'
import doctor from "../assets/magazine/doctor.jpg"
import planet from "../assets/magazine/planet.jpg"
import education from "../assets/magazine/education.jpg"
import cat from "../assets/magazine/cat.jpg"
import { Link } from "react-router-dom"

const Magazines = () => {
  const magazines = [
    {
      id: 1,
      title: "Leaders of Tomorrow",
      description:
        "Featuring inspiring stories of young entrepreneurs who are changing the world with their innovative ideas and determination. This issue highlights the next generation of business leaders.",
      coverImage: leader,
      date: "December 2024",
      category: "Leadership",
      link: "#",
    },
    {
      id: 2,
      title: "Innovation Chronicles",
      description:
        "Exploring breakthrough technologies and the visionaries behind them, shaping the future of various industries. From AI to sustainable energy solutions.",
      coverImage: innovation,
      date: "November 2024",
      category: "Innovation",
      link: "#",
    },
    {
      id: 3,
      title: "Social Impact Stories",
      description:
        "Highlighting changemakers who are making a difference in their communities and creating positive social impact through their dedicated work and initiatives.",
      coverImage: social,
      date: "October 2024",
      category: "Social Impact",
      link: "#",
    },
    {
      id: 4,
      title: "Women in Business",
      description:
        "Celebrating the achievements of women entrepreneurs and executives who are breaking barriers and creating new opportunities in the business world.",
      coverImage: women,
      date: "September 2024",
      category: "Business",
      link: "#",
    },
    {
      id: 5,
      title: "Tech Pioneers",
      description:
        "Meet the technology pioneers who are revolutionizing industries with their groundbreaking innovations and forward-thinking approaches to problem-solving.",
      coverImage: tech,
      date: "August 2024",
      category: "Technology",
      link: "#",
    },
    {
      id: 6,
      title: "Sustainable Future",
      description:
        "Exploring sustainable business practices and environmental initiatives that are creating a better future for our planet and future generations.",
      coverImage: planet,
      date: "July 2024",
      category: "Sustainability",
      link: "#",
    },
    {
      id: 7,
      title: "Creative Minds",
      description:
        "Showcasing artists, designers, and creative professionals who are pushing boundaries and redefining what's possible in their respective fields.",
      coverImage: cat,
      date: "June 2024",
      category: "Creative",
      link: "#",
    },
    {
      id: 8,
      title: "Healthcare Heroes",
      description:
        "Honoring healthcare professionals and medical innovators who are advancing patient care and medical research to improve lives worldwide.",
      coverImage: doctor,
      date: "May 2024",
      category: "Healthcare",
      link: "#",
    },
    {
      id: 9,
      title: "Education Revolution",
      description:
        "Featuring educators and edtech innovators who are transforming the way we learn and making education more accessible and effective for all.",
      coverImage: education,
      date: "April 2024",
      category: "Education",
      link: "#",
    },
  ]

  const categories = [
    "All",
    "Leadership",
    "Innovation",
    "Social Impact",
    "Business",
    "Technology",
    "Sustainability",
    "Creative",
    "Healthcare",
    "Education",
  ]

  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredMagazines =
    selectedCategory === "All"
      ? magazines
      : magazines.filter((magazine) => magazine.category === selectedCategory)

  const handleScrollAndNavigate = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="magazines">
      {/* Hero Section */}
      <section className="magazines-hero">
        <div className="container">
          <h1 className="page-title">Our Magazines</h1>
          <p className="page-subtitle">
            Discover inspiring stories of success, innovation, and impact across various industries. Each magazine
            features in-depth interviews and insights from changemakers who are shaping the future.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="magazines-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Magazines Grid */}
      <section className="section magazines-grid-section">
        <div className="container">
          <div className="magazines-grid">
            {filteredMagazines.map((magazine) => (
              <MagazineCard key={magazine.id} magazine={magazine} />
            ))}
          </div>

          {filteredMagazines.length === 0 && (
            <div className="no-magazines">
              <p>No magazines found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section magazines-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to be Featured?</h2>
            <p>
              Do you have an inspiring story to share? We're always looking for remarkable individuals and organizations
              making a positive impact.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn" onClick={handleScrollAndNavigate}>
                Submit Your Story
              </Link>
              <a href="mailto:Arthasynapse@gmail.com" className="btn btn-outline">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Magazines
