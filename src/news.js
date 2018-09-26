import React,{Component} from 'react'
import ScrollReveal from 'scrollreveal'
import TimeAgo from 'react-timeago';
import spanishStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import './news.css'
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
      <div className="col-12 col-sm-3 col-md-3 mb-4" ref={ref=>this.ref=ref}>
      <div className="card" style={{width:"18rem"}}>
      {src==null?
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:10}}>
        <i className="fas fa-exclamation-circle fa-3x"></i> 
        <p style={{fontFamily:'Frank Ruhl Libre'}}>Imagen no disponible</p>
        </div>
       :
       
        <img 

        className="card-img-top img-thumbnail "  
        src={src} 
        height={150} width={50} 
        alt={"Foto"}/>
       }
        
       
          <div className="card-body">
      
              <h5 className="card-title" style={{fontFamily:'Frank Ruhl Libre',
              fontWeight:700}}>{title}</h5>
              <span className="badge badge-info" style={{fontFamily:'Frank Ruhl Libre'}}>{source}</span>
              <TimeAgo className="ml-2" style={{color:"grey",fontSize:11,fontFamily:'Frank Ruhl Libre'}} date={publishedAt} formatter={formatter}/>
              <p  className="card-text" style={{fontFamily:'Frank Ruhl Libre'}}>{description}</p>
          </div>
          <div className="card-footer">
          <a style={{color:'#212529',fontFamily:'Frank Ruhl Libre'}} 
          href={link}>Ver mas...</a></div>
              
              
      </div>
  
      </div>
      
    )
  }
}



export default News
