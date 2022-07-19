import React, { useState, useEffect } from "react";
import MailCard from "./MailCard";
const DATABASE_URL = "https://powerofnow-99c63-default-rtdb.firebaseio.com/";

function Mails() {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(`${DATABASE_URL}/emails.json`);
    const data = await response.json();
    const formattedData = Object.keys(data).map((key) => ({
        id:key,
        ...data[key]
    }))
    setMails(formattedData);
  };
console.log(mails)
  return (
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
    </div>
  );
}

export default Mails;
