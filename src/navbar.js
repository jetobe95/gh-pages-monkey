import React, { Component } from 'react';
import { connect } from "react-redux";
const countries = [
  { id: "ar", name: "Argentina" },
  { id: "co", name: "Colombia" },
  { id: "jp", name: "Japon" },
  { id: "us", name: "Estados Unidos" },
]
class Navbar extends Component {
  state = {
    search: "",
  }

  renderListCountries = (countries) => {
    const { country, changeCountry } = this.props
    return countries.map(item => {
      return (
        <li key={item.id}
          className={`nav-item ${item.id === country ? 'active' : ''}`}
        >
          <a className="nav-link"
            onClick={() => { changeCountry(item.id) }}
          >{item.name}
          </a>
        </li>
      )
    })
  }
  render() {

    const { search, country } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" style={{ color: "white", fontFamily: "'Noto Serif KR', sans-serif", fontWeight: "bold" }} >
            News   <span style={{ textAlign: "center", paddingTop: 0, paddingBottom: 3 }} className="badge badge-pill badge-light">{country.toLowerCase()}</span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {this.renderListCountries(countries)}
              <li className="nav-link" >
                <a style={{ color: "white" }} href="https://github.com/jetobe95/gh-pages-monkey">

                  <i className="nav-item  fab fa-github fa-lg"></i>
                </a>

              </li>
              <li className="nav-link" >
                <a style={{ color: "white" }} href="https://reactjs.org/">

                  <i className="fab fa-react fa-lg"></i>
                </a>

              </li>
              
            </ul>

            <form className="form-inline my-2 my-lg-0" onSubmit={
              (event) => {
                event.preventDefault()
                search(this.state.search)
              }}>



              <input className="form-control mr-sm-2"
                type="search" placeholder="Search"
                onChange={({ target }) => this.setState({ search: target.value })}
                value={this.state.search}
                aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

    )
  }
}
const mapStateToProps = (state) => (
  {
    country: state.country
  }
)
const mapDispatchToProps = (dispatch) => (
  {
    changeCountry: (code) => dispatch({ type: 'CHANGE_COUNTRY', payload: code })
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);