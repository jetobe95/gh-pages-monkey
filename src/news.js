import React,{Component} from 'react'
import ScrollReveal from 'scrollreveal'
import TimeAgo from 'react-timeago';
import spanishStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(spanishStrings)
 class News extends Component {
  componentDidMount(){
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '100px',
      scale: 1,
      easing: 'ease',
    }
    
     
     ScrollReveal().reveal(this.ref, config)
  }
  render() {
    const {src,source,title,link,description,publishedAt}=this.props;
    return (
      <div className="col-12" ref={ref=>this.ref=ref}>
      <div className="card m-4" style={{width:"18rem"}}>
        <img className="card-img-top" src={src} height={150} width={50} alt={"Foto"}/>
       
          <div className="card-body">
              <h5 className="card-title" style={{fontWeight:"bold"}}>{title}</h5>
              <span className="badge badge-info">{source}</span>
              <TimeAgo className="ml-2" style={{color:"grey",fontSize:11}} date={publishedAt} formatter={formatter}/>
              <p  className="card-text">{description}</p>
              <a href={link}>Ver mas...</a>
              
          </div>
      </div>
  
      </div>
      
    )
  }
}



export default News
