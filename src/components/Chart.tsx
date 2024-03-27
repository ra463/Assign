import { LineChart } from "@mui/x-charts";
const uData = [198, 194, 300, 400, 210, 350, 210];
const pData = [185, 250, 280, 170, 210, 180, 260];
const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Chart = () => {
  return (
    <>
      {" "}
      <LineChart
        width={900}
        height={300}
        series={[
          { data: pData, label: "Instagram" },
          { data: uData, label: "Facebook" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </>
  );
};

export default Chart;
