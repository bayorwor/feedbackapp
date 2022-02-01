import Card from "./shared/Card";

function FeedbaackItem({ feedback }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbaackItem;
