import React from "react";
import "./collection.styles.scss";

const Collection = () => {
  const [duckData, setDuckData] = React.useState(null);

  React.useEffect(() => {
    getDuckData();
  }, []);

  const getDuckData = async () => {
    const res = await fetch("/api/duckfeedings");

    try {
      const data = await res.json();
      console.log(data);
      setDuckData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {duckData ? (
        duckData.map(
          ({
            _id,
            feedingTime,
            foodType,
            feedingLocation,
            duckCount,
            foodAmountKg,
          }) => {
            return (
              <div key={_id}>
                <p>{_id}</p>
                <p>{feedingTime}</p>
                <p>{foodType}</p>
                <p>{feedingLocation}</p>
                <p>{duckCount}</p>
                <p>{foodAmountKg}</p>
              </div>
            );
          }
        )
      ) : (
        <p>The database is empty, please add some entries</p>
      )}
    </div>
  );
};

export default Collection;
