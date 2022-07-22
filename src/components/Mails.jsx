import React, { useState, useEffect, useRef } from "react";
import MailCard from "./MailCard";

import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore, query } from "@firebase/firestore";

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
    const dbRef = getFirestore();
    let arr = [];
    const response = query(collection(dbRef, "emails"));
    const querySnapshot = await getDocs(response);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setMails(arr);
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
              {mails.map((r, index) => (
                <MailCard
                  key={r.name + index}
                  id={r.id}
                  name={r.name}
                  phone={r.phone}
                  email={r.email}
                  companyName={r.companyName}
                  message={r.message}
                  date={r.date}
                  done={r.done}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Mails;
