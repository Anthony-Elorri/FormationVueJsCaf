export const planetChartData = {
    //type: "line",
    type:"bar",
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
                label: "Nombre de lunes",
                type: "bar",
                data: [0, 0, 1, 2, 67, 62, 27, 14],
                backgroundcolor: [
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)",
                    "rgba(54,73,93,.5)"
                ],
                border: [
                    "#36495d",
                    "#36495d",
                    "#36495d",
                    "#36495d",
                    "#36495d",
                    "#36495d",
                    "#36495d",
                    "#36495d",
                ],
                borderWidth: 3
            },
            {
                label: "Diamètre d ela planète (x1.000km)",
                type: "bar",
                data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
                backgroundcolor: [
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
                    "rgba(71, 183,132,.5)",
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