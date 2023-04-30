export type GetHistoryChart = {
  params: {
    interval:
      | '1m'
      | '2m'
      | '5m'
      | '15m'
      | '30m'
      | '60m'
      | ' 1d'
      | '1wk'
      | '1mo';
    range:
      | '1d'
      | '5d'
      | '1mo'
      | '3mo'
      | '6mo'
      | ' 1y'
      | ' 2y'
      | ' 5y'
      | ' 10y'
      | ' ytd'
      | 'max';
  };
};
