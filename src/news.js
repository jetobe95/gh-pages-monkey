import React,{Component} from 'react'
import ScrollReveal from 'scrollreveal'

 class News extends Component {
  componentDidMount(){
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '100px',
      scale: 1,
      easing: 'ease',
    }
    
     
     ScrollReveal().reveal(this.ref, config)
  }
  render() {
    const {src,source,title,link,description}=this.props;
    return (
      <div className="col-12" ref={ref=>this.ref=ref}>
      <div className="card m-4" style={{width:"18rem"}}>
        <img className="card-img-top" src={src} height={150} width={50} alt={"Foto"}/>
       
          <div className="card-body">
              <h5 className="card-title" style={{fontWeight:"bold"}}>{title}</h5>
              <span className="badge badge-info">{source}</span>
              <p  className="card-text">{description}</p>
              <a href={link}>Ver mas...</a>
          </div>
      </div>
  
      </div>
    )
  }
}



export default News
