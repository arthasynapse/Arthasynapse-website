import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import "../styles/BlogDetail.css";

const client = createClient({
  space: "sojqtfj32cnh",
  environment: "master",
  accessToken: "TQQdsXMIrR6cTlfbeY6vpA1oRrTu4PWAnxTj-ki5l0s",
});

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogs",
        "fields.slug": slug,
      })
      .then((res) => {
        if (res.items.length > 0) {
          setPost(res.items[0]);
        }
      })
      .catch(console.error);
  }, [slug]);

  if (!post) return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading...</p>;

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{post.fields.title}</h1>
      <p className="blog-detail-meta">Slug: {post.fields.slug}</p>

      {post.fields.thumbnail && (
        <img
          src={post.fields.thumbnail.fields.file.url}
          alt={post.fields.title}
          className="blog-detail-image"
        />
      )}

      <div className="blog-detail-content">
        {post.fields.context?.content?.map((block, i) => (
          <p key={i}>{block.content?.[0]?.value}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
