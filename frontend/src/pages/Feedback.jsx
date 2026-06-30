import { useState } from "react";
import axios from "axios";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventName: "",
    rating: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill all fields");
      return;
    }

    await axios.post(
      "http://127.0.0.1:5000/api/feedback",
      form
    );

    alert("Feedback submitted");
  };

  return (
    <div className="page container">
      <div className="feedback-box card">
        <h1>Submit Feedback</h1>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="eventName" placeholder="Event Name" onChange={handleChange} />
          <input name="rating" placeholder="Rating" onChange={handleChange} />
          <textarea name="comment" placeholder="Comment" onChange={handleChange} />

          <button className="primary-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;