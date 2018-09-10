import React, { Component } from 'react';
class Navbar  extends Component {
  state={
    search:""  }
   render(){
    const {search}= this.props;
    return(
      <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Colombia(Technology) <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Estados Unidos <span className="sr-only">(current)</span></a>
      </li>

      
    </ul>
    <form class="form-inline my-2 my-lg-0" onSubmit={
     (event)=>{
      event.preventDefault()
      search(this.state.search)
     
      // console.log("State",this.state.search,"target",event.target)

     }}>
    <input class="form-control mr-sm-2" 
    type="search" placeholder="Search" 
    onChange={({target})=>this.setState({search:target.value})}
    value={this.state.search}
    aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>
</div>

  )
   } 
}
export default Navbar;