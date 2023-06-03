import React, { useState } from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    const form = event.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log("Error submitting form:", xhr.response);
      }
    };
    xhr.send(formData);
  };

  return (
    <section className="padding" id="get-in-touch">
      <h2 style={{ textAlign: "center" }}>Get in touch</h2>
      {formSubmitted ? (
        <p style={{ textAlign: "center", color: "green" }}>The form was sent successfully.</p>
      ) : (
        <div className="form-group">
          <form className="form-container" action="https://formsubmit.co/ba41da6c67d91268a736dff7695f290a" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                Name <span className="form-required">*</span>
              </label>
            </div>
            <div className="form-row-input">
              <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} className="form-input" />
            </div>
            <div className="form-row">
              <label htmlFor="email" className="form-label">
                Email Address <span className="form-required">*</span>
              </label>
            </div>
            <div className="form-row-input">
              <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-input" />
            </div>
            <div className="form-row">
              <label htmlFor="message" className="form-label">
                Message <span className="form-required">*</span>
              </label>
            </div>
            <div className="form-row-input">
              <textarea id="message" name="message" rows="5" value={message} onChange={(event) => setMessage(event.target.value)} className="form-textarea"></textarea>
            </div>
            <button type="submit" className="form-submit">
              SEND
            </button>
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      )}
    </section>
  );
};

export default GetInTouch;