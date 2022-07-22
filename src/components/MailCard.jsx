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
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{companyName}</p>
          <p>{message}</p>
          <p>{date}</p>
          <button onClick={upd}> Done</button>
        </div>
      )}
    </>
  );
}

export default MailCard;
