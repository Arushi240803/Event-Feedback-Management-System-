import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="hero container">
        <p className="badge">Trusted by 2,500+ event organizers worldwide</p>

        <h1>
          Collect feedback that
          <br />
          actually <span className="gradient-text">improves your events</span>
        </h1>

        <p className="hero-text">
          EventFeedback makes it effortless to gather, analyze,
          and act on attendee feedback.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/feedback")}
          >
            Submit Feedback
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/events")}
          >
            Browse Events
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;