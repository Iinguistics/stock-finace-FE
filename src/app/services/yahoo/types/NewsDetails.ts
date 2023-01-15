interface NewsDetails {
  canonicalUrl: {
    url: string;
  };
  authors: [
    {
      author: {
        displayName: string;
      };
    }
  ];
  provider: {
    displayName: string;
  };
  pubDate: string;
  summary: string;
  title: string;
  body: {
    data: {
      partnerData: {
        cover: {
          image: {
            originalUrl: string;
          };
        };
      };
    };
  };
}

export default NewsDetails;
