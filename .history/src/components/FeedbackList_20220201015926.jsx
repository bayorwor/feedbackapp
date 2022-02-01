import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbaackItem from "./FeedbaackItem";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return (
      <Card reverse={true}>
        <p>There are no feedbacks to display</p>
      </Card>
    );
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbaackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
