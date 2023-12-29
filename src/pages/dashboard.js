import React, { useState, useRef } from "react";
import "./blog.css";
import LoadingSpinner from "../components/UIelements/LoadingSpinner";

const DashBoard = () => {
  const [isLoading, setIsloading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [verified, setVerified] = useState(false);
  const verifyRef = useRef();

  const handle = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SUPERPASSWORD);
    if (verifyRef.current.value === process.env.REACT_APP_SUPERPASSWORD) {
      setVerified(true);
      getMessages();
    }
  };

  const getMessages = async () => {
    setIsloading(true);
    await fetch(process.env.REACT_APP_BACKENDURL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages);
      })
      .catch((e) => {
        console.log("err:", e.message);
        setIsloading(false);
      });
    setIsloading(false);
  };

  return (
    <section id="dashboard">
      {verified ? (
        <>
          <h1 className="header"> messages</h1>
          <ul>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              messages.map((article) => (
                <li key={article._id}>
                  <h2>{article.name}</h2>
                  <p style={{ marginTop: "0", color: "#b1bbce" }}>
                    {article.email}
                  </p>
                  <p className="message">{article.message}</p>
                </li>
              ))
            )}
          </ul>
        </>
      ) : (
        <form onSubmit={handle}>
          <input
            autoComplete="false"
            type="password"
            placeholder="Password!"
            ref={verifyRef}
          />
          <button className="buton" type="submit">
            VERIFY
          </button>
        </form>
      )}
    </section>
  );
};

export default DashBoard;
