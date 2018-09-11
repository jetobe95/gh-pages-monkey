import React, { Component } from 'react';
import {connect} from "react-redux";
class Navbar  extends Component {
  state={
    search:""  }
   render(){
    const {search,country}= this.props;
    return(
      <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand"style={{color:"white"}} >News  {country.toLowerCase()}</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" >Colombia(Technology) <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" >Estados Unidos <span className="sr-only">(current)</span></a>
      </li>

      
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={
     (event)=>{
      event.preventDefault()
      search(this.state.search)
     }}>
     
      

    <input className="form-control mr-sm-2" 
    type="search" placeholder="Search" 
    onChange={({target})=>this.setState({search:target.value})}
    value={this.state.search}
    aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>
</div>

  )
   } 
}
const mapStateToProps=(state)=>(
  {
    country:state.country
  }
)
export default connect(mapStateToProps)(Navbar);