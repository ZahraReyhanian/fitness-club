import "./styles.css";
import Pie from "./Pie";

export default function PieProgress() {
  return (
    <div>
      <Pie percentage={85} colour="#037fff" />
    </div>
  );
}
