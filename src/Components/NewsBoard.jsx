import NewsItem from "./NewsItem";
import { useEffect } from "react";
import { useState } from "react";

const NewsBoard = () => {
    const[articles, setArticles]= useState([]);

    useEffect( ()=>{
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=56401777f2bb420a8200de7102dce7ee";
        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
    },[])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return<NewsItem key={index} title = {news.title} description ={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
