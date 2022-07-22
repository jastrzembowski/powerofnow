import React from "react";

function MailCard({ name, phone, email, companyName, message, date, setDone, done }) {
  return (
    <>
      {!done && (
        <div className="mails-box">
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{companyName}</p>
          <p>{message}</p>
          <p>{date}</p>
          <button onClick={() =>setDone(true)}> Done</button>
        </div>
      )}
    </>
  );
}

export default MailCard;
