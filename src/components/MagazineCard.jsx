"use client"
import "../styles/magazine-card.css"

const MagazineCard = ({ magazine }) => {
  const handleReadMore = () => {
    if (magazine.link) {
      window.open(magazine.link, "_blank")
    }
  }

  return (
    <div className="magazine-card">
      <div className="magazine-image">
        <img src={magazine.coverImage || "/placeholder.svg"} alt={magazine.title} />
        <div className="magazine-overlay">
          <button className="btn read-more-btn" onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
      <div className="magazine-content">
        <h3 className="magazine-title">{magazine.title}</h3>
        <p className="magazine-description">{magazine.description}</p>
        <div className="magazine-meta">
          <span className="magazine-date">{magazine.date}</span>
          <span className="magazine-category">{magazine.category}</span>
        </div>
      </div>
    </div>
  )
}

export default MagazineCard
