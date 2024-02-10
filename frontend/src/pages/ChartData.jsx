import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Chart from "react-apexcharts";
function ChartData({ array }) {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: array,
      },
    ],
  });
  return (
    <Box maxW={"100%"} m={"auto"} mt={{base:'0%',lg:"2%"}} ml={'3%'}>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width={"98%"}
        height={"450px"}
      />
    </Box>
  );
}

export default ChartData;
