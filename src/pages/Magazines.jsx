"use client"

import React from "react"
import MagazineCard from "../components/MagazineCard"
import "../styles/magazines.css"

const Magazines = () => {
  const magazines = [
    {
      id: 1,
      title: "Leaders of Tomorrow",
      description:
        "Featuring inspiring stories of young entrepreneurs who are changing the world with their innovative ideas and determination. This issue highlights the next generation of business leaders.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "December 2024",
      category: "Leadership",
      link: "#",
    },
    {
      id: 2,
      title: "Innovation Chronicles",
      description:
        "Exploring breakthrough technologies and the visionaries behind them, shaping the future of various industries. From AI to sustainable energy solutions.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "November 2024",
      category: "Innovation",
      link: "#",
    },
    {
      id: 3,
      title: "Social Impact Stories",
      description:
        "Highlighting changemakers who are making a difference in their communities and creating positive social impact through their dedicated work and initiatives.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "October 2024",
      category: "Social Impact",
      link: "#",
    },
    {
      id: 4,
      title: "Women in Business",
      description:
        "Celebrating the achievements of women entrepreneurs and executives who are breaking barriers and creating new opportunities in the business world.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "September 2024",
      category: "Business",
      link: "#",
    },
    {
      id: 5,
      title: "Tech Pioneers",
      description:
        "Meet the technology pioneers who are revolutionizing industries with their groundbreaking innovations and forward-thinking approaches to problem-solving.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "August 2024",
      category: "Technology",
      link: "#",
    },
    {
      id: 6,
      title: "Sustainable Future",
      description:
        "Exploring sustainable business practices and environmental initiatives that are creating a better future for our planet and future generations.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "July 2024",
      category: "Sustainability",
      link: "#",
    },
    {
      id: 7,
      title: "Creative Minds",
      description:
        "Showcasing artists, designers, and creative professionals who are pushing boundaries and redefining what's possible in their respective fields.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "June 2024",
      category: "Creative",
      link: "#",
    },
    {
      id: 8,
      title: "Healthcare Heroes",
      description:
        "Honoring healthcare professionals and medical innovators who are advancing patient care and medical research to improve lives worldwide.",
      coverImage: "/placeholder.svg?height=300&width=250",
      date: "May 2024",
      category: "Healthcare",
      link: "#",
    },
    {
      id: 9,
      title: "Education Revolution",
      description:
        "Featuring educators and edtech innovators who are transforming the way we learn and making education more accessible and effective for all.",
      coverImage: "/placeholder.svg?height=300&width=250",
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
    selectedCategory === "All" ? magazines : magazines.filter((magazine) => magazine.category === selectedCategory)

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
              <a href="/contact" className="btn">
                Submit Your Story
              </a>
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
