import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-page">
      <div className="feedback-banner">
        Feedback
      </div>

      <div className="feedback-container">
        <form className="feedback-form">

          <div className="form-row">
            <label>Your Name</label>
            <input type="text" />
          </div>

          <div className="form-row">
            <label>Your Email</label>
            <input type="email" />
          </div>

          <div className="form-row">
            <label>Contact Number</label>
            <input type="text" />
          </div>

          <div className="form-row">
            <label>Select Type of Comment</label>
            <select>
              <option>Please Select</option>
              <option>Suggestion</option>
              <option>Complaint</option>
              <option>Feedback</option>
            </select>
          </div>

          <div className="form-row">
            <label>Comments</label>
            <textarea rows={4}></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Feedback;