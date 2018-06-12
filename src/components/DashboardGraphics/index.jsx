import React, { Component } from "react";
import css from "./DashboardGraphics.css";

import Chart from "chart.js";

class DashboardGraphics extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("DidMount");
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.1)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false,
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className={css.container}>
        <div className={`${css.g2} ${css.g}`}>
          <div className={`chart-container`}>
            <canvas id="myChart" />
          </div>
        </div>
        <div className={`${css.g1} ${css.g}`}>Grafico</div>
        <div className={`${css.g1} ${css.g}`}>Grafico</div>

        <div className={`${css.g2} ${css.g}`}>Grafico</div>
        <div className={`${css.g1} ${css.g}`}>Grafico</div>
        <div className={`${css.g1} ${css.g}`}>Grafico</div>

        <div className={`${css.g2} ${css.g}`}>Grafico</div>
        <div className={`${css.g2} ${css.g}`}>Grafico</div>
      </div>
    );
  }
}

export default DashboardGraphics;
