import React from "react";
import "./collection.styles.scss";

// Component imports
import DuckFeedingItem from "../duck-feeding-item/duck-feeding-item.component";
import DuckFeedingForm from "../duck-feeding-form/duck-feeding-form.component";

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
      <DuckFeedingForm />
      {duckData ? (
        duckData.map(({ _id, ...otherProps }) => (
          <DuckFeedingItem key={_id} _id={_id} {...otherProps} />
        ))
      ) : (
        <p>The database is empty, please add some entries.</p>
      )}
    </div>
  );
};

export default Collection;
