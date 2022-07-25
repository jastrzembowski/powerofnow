import React from "react";

import { doc, getFirestore, updateDoc } from "@firebase/firestore";
import { useState } from "react";

function MailCard({
  id,
  name,
  phone,
  email,
  companyName,
  message,
  date,
  done,
}) {
  const [display, setDisplay] = useState(true);
  const db = getFirestore();
  const docRef = doc(db, "emails", id);
  const upd = async () => {
    await updateDoc(docRef, { done: true });
    setDisplay(false);
  };

  return (
    <>
      {!done && (
        <div className={display ? "mails-box" : "hidden"}>
          <p><p className="mail-small"> Imię i nazwisko: </p>{name}</p>
          <p><p className="mail-small">Numer telefonu: </p>{phone}</p>
          <p><p className="mail-small">Adres email: </p>{email}</p>
          <p><p className="mail-small">Nazwa firmy:</p> {companyName}</p>
          <p><p className="mail-small">Wiadomość: </p>{message}</p>
          <p><p className="mail-small">Data dodania: </p>{date}</p>
          <button onClick={upd} className="mail-button"> Done</button>
        </div>
      )}
    </>
  );
}

export default MailCard;
