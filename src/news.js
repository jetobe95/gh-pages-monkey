import React from 'react'

const News = ({src,title,description,link,author,source}) => {
  return (
    <div className="col-12">
    <div className="card m-4" style={{width:"18rem"}}>
      <img className="card-img-top" src={src} height={150} width={50} alt="Photo"/>
     
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

export default News
