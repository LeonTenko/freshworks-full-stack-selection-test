import "./duck-feeding-item.styles.scss";

const DuckFeedingItem = ({
  _id,
  feedingTime,
  foodType,
  feedingLocation,
  duckCount,
  foodAmountKg,
}) => {
  return (
    <div>
      <p>{feedingTime}</p>
      <p>{foodType}</p>
      <p>{feedingLocation}</p>
      <p>{duckCount}</p>
      <p>{foodAmountKg}</p>
    </div>
  );
};

export default DuckFeedingItem;
