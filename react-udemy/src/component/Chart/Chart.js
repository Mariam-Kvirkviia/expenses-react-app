import "./Chart.css";
import ChartBar from "./ChartBar.js";
let Chart = (props) => {
  return (
    <div className="chart">
      {props.Points.map((point) => (
        <ChartBar />
      ))}
    </div>
  );
};
export default Chart;
