import React, { useState } from "react";

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
        <p style={{ textAlign: "center", color: "green" }}>Thank you for submitting the form!</p>
      ) : (
        <form
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          action="https://formsubmit.co/ba41da6c67d91268a736dff7695f290a"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <label htmlFor="email" style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <label htmlFor="message" style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            style={{ marginBottom: "10px" }}
          ></textarea>
          <button
            type="submit"
            style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Submit
          </button>
          <input type="hidden" name="_captcha" value="false" />
        </form>
      )}
    </section>
  );
};

export default GetInTouch;