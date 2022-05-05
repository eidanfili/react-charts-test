import React from "react";
import ReactApexChart from "react-apexcharts";

export default class RadialChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [100],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 270,
            hollow: {
              margin: 0,
              size: "80%",
              background: "#47464a",
              image: undefined,
              imageClipped: true,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 10,
                left: 0,
                blur: 2,
                opacity: 0.24,
              },
            },
            track: {
              background: "#222124",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                formatter: function (val: string) {
                  return parseInt(val);
                },
                color: "#111",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        colors: ["#4bc48c"],
        fill: {
          type: "gradient",
          gradient: {
            color: "#574899",
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#574899"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "",
        },
        labels: ["Percent"],
      },
    };
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
      </div>
    );
  }
}
