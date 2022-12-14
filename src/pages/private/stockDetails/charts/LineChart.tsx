import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type LineChartProps = {
  dataHigh: any[];
  dataLow: any[];
};

const LineChart: React.FC<LineChartProps> = ({ dataHigh, dataLow }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    title: {
      text: "High's & Low's",
    },
    subtitle: {
      text: "Line chart for high and low values",
    },
    yAxis: {
      title: {
        text: "Stock value",
      },
    },
    xAxis: {
      title: {
        text: "Stock quantity",
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    plotOptions: {
      series: {
        lineWidth: 5,
      },
    },
    series: [
      {
        name: "high",
        type: "line",
        data: dataHigh,
      },
      {
        name: "low",
        type: "line",
        data: dataLow,
      },
    ],
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </>
  );
};

export default LineChart;
