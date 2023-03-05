import React from 'react'
import imgdinu from '../../../src/Assets/dinu2.jpeg'
import Navbar from '../../../src/Components/HeaderComponents/Navbar'
import like from '../../../src/Assets/rythm.png'
import share from '../../../src/Assets/share.png'
// import TheLatest from '../../Components/pages/Home/TheLatest/TheLatest'
// import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react'

const GenericInfo = ({ articles }) => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    setArticlesData(articles);
  }, [articles]);
  
  
  // const posts = require('../../Components/Api-Data/Home-The-Latest.json')
  return (
    <div>
      <Navbar />
      <div className='info-like'>
        <span className='like-size'><img src={like} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;8.3 k</span>
        <br />
        <span className='like-size'><img src={share} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;  Share this article</span>

      </div>
      <div className='info-container'>
          <div>
              <div>
                    <h2 className='info-head'></h2>
                    <div>
                      <img src={imgdinu} alt="" className='info-img' />
                      <span className='info-span'>Dinesh Karthik </span> <br /> 
                      <span className='info-span1'>  feb 02 2023 Read Last Time</span>
                      
                      
                  </div>
                  <div>
                      <img src=""alt=""  className='info-image'/>
                  </div>
                  <div>
              <p className='info-pre'>
   
                          
                      </p>
            </div>
            <div>
                      <img src="" alt=""  className='info-image'/>
                  </div>
                  <div>
                      <img src={imgdinu} alt="" className='info-img' />
                      <span className='info-span'>Dinesh Karthik </span> <br /> 
                      <span className='info-span1'>  feb 02 2023 Read Last Time</span>
                      
                      
                  </div>
              
              </div>
              


          </div>
      
      </div>
      {/* <div className='footer-info'>
        <TheLatest articles={posts}/>

      </div> */}
    </div>
  )
}

export default GenericInfo
