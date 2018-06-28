import React, { Component } from "react";
import css from "./DashboardGraphics.css";

import Chart from "chart.js";

class DashboardGraphics extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("DidMount");
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "",
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
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    });
    var ctx = document.getElementById("myChart2").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["rgba(255, 99, 132, 0.1)"],
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    });
    var ctx = document.getElementById("myChart3").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
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
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 40
      }
    });
    var ctx = document.getElementById("myChart4").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6"],
        datasets: [
          {
            label: "Valor obtenido",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["rgba(255, 99, 132, 0.1)"],
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1
          },
          {
            label: "Valor proyectado",
            fill: false,
            data: [10, 8, 3, 20, 18, 2],
            backgroundColor: ["rgba(75, 192, 192, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)"],
            borderWidth: 2,
            borderDash: [5,5]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
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
          Grafico 1
          <div className={css.graphcontainer}>
            <canvas id="myChart" />
          </div>
        </div>
        <div className={`${css.g1} ${css.g}`}>
          Grafico 2
          <div className={css.graphcontainer}>
            <canvas id="myChart2" />
          </div>
        </div>
        <div className={`${css.g1} ${css.g}`}>
          Grafico 3
          <div className={css.graphcontainer}>
            <canvas id="myChart3" />
          </div>
        </div>

        <div className={`${css.g2} ${css.g}`}>
          Grafico 4
          <div className={css.graphcontainer}>
            <canvas id="myChart4" />
          </div>
        </div>
        <div className={`${css.g1} ${css.g}`}>Grafico</div>
        <div className={`${css.g1} ${css.g}`}>Grafico</div>

        <div className={`${css.g2} ${css.g}`}>Grafico</div>
        <div className={`${css.g2} ${css.g}`}>Grafico</div>
      </div>
    );
  }
}

export default DashboardGraphics;
