import React, { useState, useEffect } from "react";
import "./blog.css";
import LoadingSpinner from "../components/UIelements/LoadingSpinner";

const BlogPage = () => {
  const [isLoading, setIsloading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    setIsloading(true);
    await fetch("https://dev.to/api/articles?username=eskiimo")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((e) => {
        console.log(e.message);
        setIsloading(false);
      });
    setIsloading(false);
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section id="blog">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {blogs.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                SEE MORE <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BlogPage;
