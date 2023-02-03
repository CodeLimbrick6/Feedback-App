import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const title = "Get Feedback!";
  const [feedback, setFeedback] = useState(FeedbackData);

  // delete feedback

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Header />

      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
          <h1>{title}</h1>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>

    </div>
  );
}

export default App;
