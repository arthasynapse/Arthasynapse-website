// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import "../styles/Blog.css";

const client = createClient({
  space: "sojqtfj32cnh",
  environment: "master",
  accessToken: "TQQdsXMIrR6cTlfbeY6vpA1oRrTu4PWAnxTj-ki5l0s",
});

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogs" })
      .then((res) => setPosts(res.items))
      .catch(console.error);
  }, []);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">
            Dive into our latest thoughts, updates, and inspiring stories from innovators, leaders, and changemakers.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="blog-list-section">
        <div className="container">
          <div className="blog-list">
            {posts.map((post) => (
              <div key={post.sys.id} className="blog-card">
                {post.fields.thumbnail && (
                  <img
                    className="blog-thumbnail"
                    src={post.fields.thumbnail.fields.file.url}
                    alt={post.fields.title}
                  />
                )}
                <h2 className="blog-title">{post.fields.title}</h2>
                <p className="blog-description">
                  {post.fields.context?.content?.[0]?.content?.[0]?.value?.split(" ").slice(0, 30).join(" ")}...
                </p>
                <Link to={`/blog/${post.fields.slug}`} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
