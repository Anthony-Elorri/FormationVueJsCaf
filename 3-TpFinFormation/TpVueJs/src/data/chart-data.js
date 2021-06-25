export const planetChartData = {
  // Décommenter le type de graphique
  type: "line",
  //type: "bar",
  data: {
    labels: [
      "Mercure",
      "Venus",
      "Terre",
      "Mars",
      "Jupiter",
      "Saturne",
      "Uranus",
      "Neptune"
    ],
    datasets: [
      {
        // Graphique en ligne
        label: "Nombre de lunes",
        // Pour modifier en bar décommenter au choix
        //type: "line",
        //type:"bar",
        data: [0, 0, 1, 2, 67, 62, 27, 14],
        backgroundColor: [
          "rgba(54,73,93,.5)", // bleu
          "rgba(54,73,93,.5)",
          "rgba(54,73,93,.5)",
          "rgba(54,73,93,.5)",
          "rgba(54,73,93,.5)",
          "rgba(54,73,93,.5)",
          "rgba(54,73,93,.5)",
          "rgba(54,73,93,.5)"
        ],
        borderColor: [
          "#36495d",
          "#36495d",
          "#36495d",
          "#36495d",
          "#36495d",
          "#36495d",
          "#36495d",
          "#36495d"
        ],
        borderWidth: 3
      },
      {
        // Un autre graphique en ligne
        label: "Diamètre de la planète (x1,000 km)",
        // Pour modifier en bar décommenter au choix
        //type: "bar",
        //type:"line",
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          "rgba(71, 183,132,.5)", // vert
          "rgba(71, 183,132,.5)",
          "rgba(71, 183,132,.5)",
          "rgba(71, 183,132,.5)",
          "rgba(71, 183,132,.5)",
          "rgba(71, 183,132,.5)",
          "rgba(71, 183,132,.5)",
          "rgba(71, 183,132,.5)"
        ],
        borderColor: ["#47b784"],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 20
          }
        }
      ]
    }
  }
};

export default planetChartData;
