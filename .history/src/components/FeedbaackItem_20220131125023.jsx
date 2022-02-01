import { FaEdit, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbaackItem({ feedback }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbaackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbaackItem;
