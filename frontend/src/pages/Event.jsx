function Events() {
  return (
    <div className="container page">
      <h1 style={{ margin: "40px 0" }}>Upcoming Events</h1>

      <div className="events-grid">
        <div className="card">
          <h2>Tech Conference 2026</h2>
          <p>Engineering and product conference.</p>
        </div>

        <div className="card">
          <h2>AI Workshop</h2>
          <p>Hands-on AI training.</p>
        </div>

        <div className="card">
          <h2>Hackathon</h2>
          <p>Build innovative products.</p>
        </div>

        <div className="card">
          <h2>Design Summit</h2>
          <p>Product design event.</p>
        </div>
      </div>
    </div>
  );
}

export default Events;