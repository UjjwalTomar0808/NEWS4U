import React, { useEffect, useState } from 'react';
import Items from './Items';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import './news.css';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    try {
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News4U`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  return (
    <>
      <div className="heading">
        <h1 style={{ margin: '0px 0px' }}>News4U </h1>
        <h2>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      </div>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="con">
            {articles &&
              articles.map((element) => (
                <div className="items" key={element.url}>
                  <Items
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
