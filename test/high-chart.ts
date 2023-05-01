import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "react-highcharts/HighchartsReact";

interface MultiPlotLinesChartProps {
  data: number[][];
}

const MultiPlotLinesChart: React.FC<MultiPlotLinesChartProps> = ({ data }) => {
  const plotLines = data.map((dataset) => {
    const highPoint = Math.max(...dataset);
    const lowPoint = Math.min(...dataset);
    return [
      {
        color: "red",
        width: 2,
        value: highPoint,
        label: {
          text: "High Point",
          align: "left",
          y: -2,
          x: 2,
          style: {
            color: "red",
          },
        },
      },
      {
        color: "blue",
        width: 2,
        value: lowPoint,
        label: {
          text: "Low Point",
          align: "left",
          y: 12,
          x: 2,
          style: {
            color: "blue",
          },
        },
      },
    ];
  }).flat();

  const chartOptions: Highcharts.Options = {
    title: {
      text: "Multi-Plot High-Low Plot Lines Example",
    },
    xAxis: {
      categories: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "Category 6",
        "Category 7",
        "Category 8",
        "Category 9",
        "Category 10",
      ],
    },
    yAxis: {
      title: {
        text: "Values",
      },
      plotLines: plotLines,
    },
    series: data.map((dataset, index) => ({
      type: "line",
      name: `Series ${index + 1}`,
      data: dataset,
    })),
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default MultiPlotLinesChart;



import React from "react";
import MultiPlotLinesChart from "./MultiPlotLinesChart";

const App: React.FC = () => {
  const data = [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [30, 45, 60, 75, 90, 105, 120, 135, 150, 165],
  ];

  return (
    <div>
      <MultiPlotLinesChart data={data} />
    </div>
  );
};

export default App;
