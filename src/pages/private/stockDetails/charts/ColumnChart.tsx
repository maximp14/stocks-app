import React, { useRef } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type ColumnChartProps = {
  dataVolume: any[];
};

const ColumnChart: React.FC<ColumnChartProps> = ({ dataVolume }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    title: {
      text: "Volume",
    },
    subtitle: {
      text: "Bar column chart for the volume",
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
        borderColor: "#BD4733",
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#A24B4A"], // start
            [0.5, "#864E60"], // middle
            [1, "#6B5277"], // end
          ],
        },
      },
    },
    series: [
      {
        name: "volume",
        type: "column",
        data: dataVolume,
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

export default ColumnChart;
