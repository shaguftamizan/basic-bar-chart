import BarChart from "./BarChart.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="page">
      <h1>D3-❤️-React Student Distribution by Country</h1>
      <p className="sub">
        Number of students in <b>Cohort 2</b> from each of the top 20 countries, ordered from most to fewest.
      </p>
      <BarChart />
    </div>
  );
}
