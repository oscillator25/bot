var canvas = document.getElementById("radarChart");

var data = {
  labels: [
    "Anger",
    "Anxiety",
    "Depression",
    "Self-consciousness",
    "Immoderation",
    "Vulnerability"
  ],
  datasets: [
    {
      backgroundColor: "rgba(0,0,200,0.2)",
      data: [54, 65, 60, 70, 70, 75]
    }
  ]
};

var radarChart = new Chart(canvas, {
  type: "radar",
  data: data,
  options: {
    legend: {
      display: false
    }
  }
});
