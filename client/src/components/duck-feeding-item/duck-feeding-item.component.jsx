// Asset imiports
import "./duck-feeding-item.styles.scss";

// MaterialUI imports
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const DuckFeedingItem = ({
  _id,
  foodType,
  duckCount,
  foodAmountKg,
  feedingLocation,
  feedingTime,
  align,
}) => {
  const timeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  };
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
      <TableCell align={align}>{duckCount}</TableCell>
      <TableCell align={align}>{foodType}</TableCell>
      <TableCell align={align}>{foodAmountKg.toFixed(2)}KG</TableCell>
      <TableCell align={align}>{feedingLocation}</TableCell>
      <TableCell align={align}>
        {new Date(feedingTime).toLocaleString("en-US", timeFormatOptions)}
      </TableCell>
    </TableRow>
  );
};

export default DuckFeedingItem;
