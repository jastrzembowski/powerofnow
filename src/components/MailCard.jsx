import React from "react"

const MailCard = ({name, phone, email, companyName, message, date}) => {

    return(
        <div className="mails-box">
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{companyName}</p>
            <p>{message}</p>
            <p>{date}</p>
        </div>
    )
}

export default MailCard