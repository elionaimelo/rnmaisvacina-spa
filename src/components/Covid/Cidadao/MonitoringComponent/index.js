import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Monitoring } from "src/components/Covid/Cidadao";

ChartJS.register(ArcElement, Tooltip, Legend);

export function MonitoringComponent() {
  var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
      originalDoughnutDraw.apply(this, arguments);

      var chart = this.chart.chart;
      var ctx = chart.ctx;
      var width = chart.width;
      var height = chart.height;

      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em Verdana";
      ctx.textBaseline = "middle";

      var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
    },
  });

  const data = {
    labels: ["Red", "Blue"],
    text: "45",
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["rgb(0, 207, 159)", "rgb(0, 179, 243)"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Monitoring id="#monitoring" bg={"rgb(0, 179, 243)"}>
      <Box w={300} h={300}>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            cutout: 100,
            plugins: {
              legend: {
                display: false,
              },
            },
            centerText: {
              display: true,
              text: `90%`,
            },
          }}
        />
      </Box>
    </Monitoring>
  );
}
