import "../styles/about.css"

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Arthasynapse</h1>
          <p className="page-subtitle">
            A next-generation publication and media company dedicated to highlighting the achievements, journeys, and
            insights of changemakers across diverse fields.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon">🎯</div>
              <h2>Our Vision</h2>
              <p>
                To be the most influential platform for highlighting impactful journeys and fostering a culture of
                excellence across all industries and communities.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-icon">🚀</div>
              <h2>Our Mission</h2>
              <p>
                To recognize, document, and celebrate success stories across industries, and to create content that
                educates, engages, and empowers our audience to pursue their own paths to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-detailed">
            <div className="value-detailed">
              <div className="value-header">
                <span className="value-icon">🎯</span>
                <h3>Integrity</h3>
              </div>
              <p>
                We maintain the highest standards of honesty, transparency, and ethical conduct in all our storytelling
                and business practices. Our commitment to truth and authenticity guides every story we tell.
              </p>
            </div>
            <div className="value-detailed">
              <div className="value-header">
                <span className="value-icon">💡</span>
                <h3>Creativity</h3>
              </div>
              <p>
                We embrace innovative approaches to content creation and storytelling that captivate and inspire our
                audience. Our creative vision drives us to find unique angles and compelling narratives.
              </p>
            </div>
            <div className="value-detailed">
              <div className="value-header">
                <span className="value-icon">🤝</span>
                <h3>Inclusiveness</h3>
              </div>
              <p>
                We celebrate diversity and ensure that voices from all backgrounds, communities, and perspectives are
                heard and represented in our content. Everyone has a story worth telling.
              </p>
            </div>
            <div className="value-detailed">
              <div className="value-header">
                <span className="value-icon">⭐</span>
                <h3>Excellence</h3>
              </div>
              <p>
                We strive for the highest quality in everything we do, from content creation and design to customer
                service and community engagement. Excellence is not just our goal—it's our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📖</div>
              <h3>Print and Digital Magazine Publishing</h3>
              <p>
                High-quality magazine production featuring compelling stories, professional photography, and exceptional
                design that captures the essence of success stories.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Feature Interviews with Industry Leaders</h3>
              <p>
                In-depth conversations with visionaries, entrepreneurs, and changemakers who are shaping the future of
                their respective industries and communities.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Brand Storytelling and Campaign Design</h3>
              <p>
                Strategic content creation and visual design that helps brands communicate their values, mission, and
                impact through compelling narratives and stunning visuals.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Content Strategy and Development</h3>
              <p>
                Comprehensive content planning and creation services that help organizations effectively communicate
                their message and engage with their target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section approach-section">
        <div className="container">
          <h2 className="section-title">Our Unique Approach</h2>
          <div className="approach-content">
            <div className="approach-text">
              <h3>Storytelling with Purpose</h3>
              <p>
                At Arthasynapse, we believe that every success story has the power to inspire and educate. Our approach
                goes beyond traditional journalism to create narratives that resonate with readers and drive positive
                change.
              </p>
              <h3>Innovation in Media</h3>
              <p>
                We leverage cutting-edge technology and creative techniques to deliver content across multiple
                platforms, ensuring maximum reach and engagement for the stories that matter most.
              </p>
              <h3>Impact-Driven Content</h3>
              <p>
                Every piece of content we create is designed to make a meaningful impact, whether it's inspiring the
                next generation of leaders or highlighting solutions to pressing social challenges.
              </p>
            </div>
            <div className="approach-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Our Approach" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
