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
    series: [
      {
        name: "high",
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
