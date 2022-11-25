import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {};

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

const StockChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </>
  );
};

export default StockChart;
