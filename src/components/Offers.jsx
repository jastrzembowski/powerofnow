import { uuidv4 } from "@firebase/util";
import React from "react";

const DATABASE_URL = "https://powerofnow-99c63-default-rtdb.firebaseio.com/";

export default class Offers extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    this.state = {
      name: "",
      id: uuidv4(),
      phone: "",
      email: "",
      companyName: "",
      message: "",
      checked: false,
      sent: false,
      date: date,
      done: false
    };
    this.initialState = {
      name: "",
      id: uuidv4(),
      phone: "",
      email: "",
      companyName: "",
      message: "",
      checked: false,
      sent: false,
      date: date,
      done: false
    };
  }

  checkChange = () => {
    console.log(this.state.checked);
    console.log(this.state.today)

    if (this.state.checked === false) {
      this.setState(() => ({
        checked: true,
      }));
    } else {
      this.setState(() => ({
        checked: false,
      }));
    }
  };
  handleOnChange = (e) => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFormReset = () => {
    this.setState(this.initialState);
    console.log(this.state);
  };

  setSend = () => {
    this.setState(() => ({
      sent: true,
    }));
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    var date = new Date();
    this.setState({ date });
    fetch(`${DATABASE_URL}/emails.json`, {
      method: "POST",
      body: JSON.stringify(this.state),
    })
      .then(this.handleFormReset)
      .then(this.setSend);
  };

  render() {
    const { email, name, phone, checked } = this.state;

    const enabled =
      email.length > 5 && name.length > 1 && phone.length > 8 && checked;
  

    return (
      <>
        {!this.state.sent && (
          <div className="contact-container" id="contact">
            <h1>Let's talk!</h1>
            <h3>Drop us an email today to see how we can help you.</h3>
            <form onSubmit={this.handleOnSubmit} className="contact-box">
              <div className="form-box">
                <p>Full name</p>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleOnChange}
                  value={this.state.name}
                  required
                />
              </div>
              <div className="form-box">
                <p>Email address</p>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleOnChange}
                  value={this.state.email}
                  required
                />
              </div>
              <div className="form-box">
                <p>Phone number</p>
                <input
                  type="number"
                  name="phone"
                  onChange={this.handleOnChange}
                  value={this.state.phone}
                  required
                />
              </div>
              <div className="form-box">
                <p>Company name</p>
                <input
                  type="text"
                  name="companyName"
                  onChange={this.handleOnChange}
                  value={this.state.companyName}
                />
              </div>
              <div className="form-box-msg">
                <p>Additional info</p>
                <textarea
                  type="text"
                  name="message"
                  rows="4"
                  cols="50"
                  onChange={this.handleOnChange}
                  value={this.state.message}
                  required
                ></textarea>
              </div>

              <div className="policy-input-box">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={this.checkChange}
                ></input>
                <span className="policy-text">
                  By clicking "SEND" you agree to data processing by Power of
                  Now in accordance with the Privacy Policy to process your
                  request, and to present you Power of Now's offer.
                </span>
              </div>
              <button
                disabled={!enabled}
                type="submit"
                onClick={this.handleOnSubmit}
                className="form-button"
              >
                SEND
              </button>
            </form>

            <h3 className="contact-bot-text">
              Fill out the form and discover the possibilities of Power of Now!
            </h3>
          </div>
        )}
        {this.state.sent && (
          <div className="contact-container sent-box">
            <h1>
              Thank you for contact!! <br />
              We will respond as soon as it is possible!
            </h1>
            <p>Power of Now Team</p>
          </div>
        )}
      </>
    );
  }
}
