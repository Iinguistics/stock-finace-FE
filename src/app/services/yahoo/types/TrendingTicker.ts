interface TrendingTicker {
  trendingScore: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketPrice: number;
  regularMarketPreviousClose: number;
  shortName: string;
  tradeable: boolean;
  symbol: string;
};

export default TrendingTicker;
