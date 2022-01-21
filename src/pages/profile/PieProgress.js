import "./styles.css";
import Pie from "./Pie";

export default function PieProgress({ value }) {
  return (
    <div>
      <Pie percentage={value} colour="#037fff" />
    </div>
  );
}
