import React, { Component,PureComponent } from 'react';
import { connect } from "react-redux";
import './App.css';
import Navbar from "./navbar";
import News from './news';
class App extends PureComponent {
  state = {
    news: [],
    category:'technology',
    loading:true,
  }
  async componentDidMount() {
    const API_KEY = "60a49976bbd7461fabb075d1d4c35371";
    const category = this.state.category
    const country = "co"
    const q = "";
    const URI_BASE = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${q}&apiKey=${API_KEY}`;
    const response = await fetch(URI_BASE);
    const { articles, totalResults, status } = await response.json()
    this.setState({loading:false})

    this.props.LoadNews(articles)


  }

  Search = async (text) => {
    console.log(text)
    const {category}=this.state;
    this.setState({loading:true})
    const URI = `https://newsapi.org/v2/top-headlines?country=co&q=${text}&category=${category}&apiKey=60a49976bbd7461fabb075d1d4c35371`;
    
    const response = await fetch(URI);
    const { articles, totalResults, status } = await response.json()
    this.setState({loading:false})
    this.props.Search(articles)
    
  }
  dropdown=async (category="technology")=>{
    
    // const {category}=this.state;
    this.setState({category,loading:true})
    // console.log(text)
    const URI = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=60a49976bbd7461fabb075d1d4c35371`;

    const response = await fetch(URI);
    const { articles, totalResults, status } = await response.json()
    this.setState({loading:false})

    this.props.Search(articles)
  }
  render() {
   
    let news = [];
    if (this.props.ResultSearch.length > 0) {

      news = this.props.ResultSearch;
    }
    else {
      news = this.props.news;
    }




    return (
      <div>

        <Navbar search={this.Search} />
        <div className="dropdown m-3 ">
          <button className="btn btn-success dropdown-toggle btn-sm "
           type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.category.toUpperCase() ||'Categories'}
           </button>
           {this.state.loading&&<i className="m-3 fas fa-spinner fa-spin fa-lg"></i>}

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a onClick={()=>this.dropdown("general")} className="dropdown-item" href="#">General</a>
            <a onClick={()=>this.dropdown("technology")} className="dropdown-item" href="#">Technology</a>
            <a onClick={()=>this.dropdown("entertainment")} className="dropdown-item" href="#">Entertainment</a>
            <a onClick={()=>this.dropdown("sports")} className="dropdown-item" href="#">Sports</a>
            {/* <a class="dropdown-item" href="#">Something else here</a> */}
          </div>
        </div>
        {this.state.loading||
          
          
            <div className="container"
              style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              {news.map((item,key) => {
                return (
                  <div className="row"
                  key={key}
                  >
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
          
          }
      </div>
    );
  }
}
function MapStateToprops(state) {
  return {
    news: state.news,
    ResultSearch: state.searchResults
  }
}
function MapDispacthToProps(dispacth) {
  return {

    Search: (results) => dispacth({
      type: "SEARCH", payload: {
        searchResults: results
      }
    }),
    LoadNews: (news) => dispacth({ type: "LOAD_NEWS", payload: { news } })
  }
}
export default connect(MapStateToprops, MapDispacthToProps)(App);
