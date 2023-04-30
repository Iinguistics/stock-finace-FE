type HistoryChart = {
  timestamp: number[];
  indicators: {
    quote: [
      {
        close: number[];
        high: number[];
        volume: number[];
        open: number[];
        low: number[];
      }
    ];
  };
};


export default HistoryChart;
