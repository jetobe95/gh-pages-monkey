import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './news';
import Navbar from "./navbar";
import {connect} from "react-redux";
class App extends Component {
  state={
   news:[],
  }
 async componentDidMount(){
   const API_KEY="60a49976bbd7461fabb075d1d4c35371";
   const category="technology"
   const country="co"
   const q="";
    const URI_BASE=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${q}&apiKey=${API_KEY}`;
    const response= await fetch(URI_BASE);
    const {articles,totalResults,status}=await response.json()
    this.props.LoadNews(articles)
    
    
  }
  
  Search=async (text)=>{
    console.log(text)
      const URI=`https://newsapi.org/v2/top-headlines?country=co&q=${text}&category=technology&apiKey=60a49976bbd7461fabb075d1d4c35371`;
      
      const response =await fetch(URI);
    const {articles,totalResults,status}=await response.json()
    this.props.Search(articles)

  }
  render() {
    let news=[];
    if (this.props.ResultSearch.length>0) {
     
      news=this.props.ResultSearch;
    }
    else{
      
     

       news=this.props.news;
    }

    return (
      <div>

      <Navbar search={this.Search}/>
      <h3 className="m-3">Tecnologia</h3>
      <div className="container" 
      style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      {news.map((item)=>{
        return(
        <div className="row">
          <News 
           source={item.source.name}
            title={item.title}
            link={item.url}
            src={item.urlToImage}
              description={item.description}
          />
        </div>

        )
      })}
      </div>
      </div>
    );
  }
}
function MapStateToprops(state) {
  return{
    news:state.news,
    ResultSearch:state.searchResults
  }
}
    function MapDispacthToProps(dispacth) {
      return{
        
        Search:(results)=>dispacth({type:"SEARCH",payload:{
          searchResults:results
        }}),
        LoadNews:(news)=>dispacth({type:"LOAD_NEWS",payload:{news}})
      }
    }
export default connect(MapStateToprops,MapDispacthToProps)(App);
