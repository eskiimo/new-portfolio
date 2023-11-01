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
    console.log(blogs);
  };
  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="blog">
      <h1 className="dang"> Blogs</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {blogs.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <h5>{article.description}</h5>
              <p>{article.reading_time_minutes} mins reading</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BlogPage;
