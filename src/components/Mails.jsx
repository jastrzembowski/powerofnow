import React, { useState, useEffect, useRef } from "react";
import MailCard from "./MailCard";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const DATABASE_URL = "https://powerofnow-99c63-default-rtdb.firebaseio.com/";

function Mails() {
  const [mails, setMails] = useState([]);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/mails");
    } catch {}
  }

  async function handleLogout() {
    try {
      await logout();
    } catch {}
  }
  const loadData = async () => {
    const response = await fetch(`${DATABASE_URL}/emails.json`);
    const data = await response.json();
    const formattedData = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    setMails(formattedData);
  };
  return (
    <>
      {!currentUser ? (
        <div className="login-cont">
          <form onSubmit={handleSubmit} className="card-form">
            <label for="email">Email</label>
            <input
              required
              ref={emailRef}
              type="email"
              id="fmail"
              name="fmail"
            />
            <label for="password">Hasło</label>
            <input
              required
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
            />
            <button type="submit" className="login-but">
              Zaloguj
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="mails-cont">
            <button onClick={() => handleLogout()} className="login-but">
              Wyloguj się
            </button>
          <div className="mails-container">
            {mails.map((r, id) => (
              <MailCard
                key={id}
                name={r.name}
                phone={r.phone}
                email={r.email}
                companyName={r.companyName}
                message={r.message}
                date={r.date}
              />
            ))}
          </div>          </div>

        </>
      )}
    </>
  );
}

export default Mails;
