import React  from 'react'
import '../GenericComponent/Genericstyle.css'
import { useState, useEffect } from 'react';
// import imgdown from '../../../src/Assets/arro'




const GenericPages = ({articles}) => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    setArticlesData(articles);
  }, [articles]);
  return (
    <>
      <div className='view-gen'>
    
      {articlesData.map((articles, index) => {
        return (
          <>          <div>  <h2 className='generic-head'><span className='Article-line'>{articles.content}</span> </h2></div>
          <div className='generic-container' key={index}  id='generic-box'>
              
            <div className='Article-img' >
              <img src={articles.url} alt={articles.alt} className='Article-img' />
            </div>
            <div>
              <a href={articles.link} className='Article-a'> <h2 className='Article-header'>{articles.caption}</h2></a>
              <p className='Article-pre'>{ articles.about}</p>
              <span className='Article-span'>{articles.category}<span className='Article-span1'>{articles.date}</span></span>
            </div> 
            </div>
           
          </>
)
      })} 
         <span className='arrow' style={{ color: '#908D8D', marginTop: '200px', fontSize: "15px", marginLeft: '260px' }}><span style={{color:'red'}}>&#8595;</span>  Load More</span>
        </div>
      
    
      
      </>
  )
}

export default GenericPages

