import "./Chart.css";
import ChartBar from "./ChartBar.js";
let Chart = (props) => {
  let dataPointsValue = props.Points.map((el) => el.value);
  let maxValues = Math.max(...dataPointsValue);
  return (
    <div className="container">
      <div className="chart">
        {props.Points.map((point) => (
          <ChartBar
            label={point.label}
            value={point.value}
            key={point.label}
            maxValue={maxValues}
          />
        ))}
      </div>
    </div>
  );
};
export default Chart;
