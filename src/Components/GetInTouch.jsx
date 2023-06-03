import React from "react";

const GetInTouch = () => {
  return (
    <section className="padding" id="get-in-touch">
      <h2 style={{ textAlign: "center" }}>Get in touch</h2>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} action="https://formsubmit.co/ba41da6c67d91268a736dff7695f290a" method="POST">
        <label htmlFor="name" style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
          Name:
        </label>
        <input type="text" id="name" name="name" style={{ marginBottom: "10px" }} />
        <label htmlFor="email" style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
          Email:
        </label>
        <input type="email" id="email" name="email" style={{ marginBottom: "10px" }} />
        <label htmlFor="message" style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
          Message:
        </label>
        <textarea id="message" name="message" rows="5" style={{ marginBottom: "10px" }}></textarea>
        <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
