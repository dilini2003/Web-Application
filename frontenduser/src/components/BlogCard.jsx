import React, { useState } from "react";
import "./BlogCard.css";

const BlogCard = ({ title, snippet, fullText, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="blog-card">
      <img src={image} alt="Blog" className="blog-img" />
      <h4 className="blog-heading">{title}</h4>
      <p className="blog-snippet">
        {snippet} {!expanded && <span className="dots">...</span>}
      </p>

      {expanded && <p className="blog-full">{fullText}</p>}

      <button className="blog-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default BlogCard;
