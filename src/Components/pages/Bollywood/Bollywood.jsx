import React from 'react'
import GenericPages from '../../GenericComponent/GenericPages'
import GenericAdds from '../../GenericComponent/GenericAdds'

const Bollywood = () => {
  const adds = require('../../Api-Data/bollywood/adds-data.json');
  const videos = require('../../Api-Data/bollywood/video.json');
  const posts = require('../../Api-Data/bollywood/topposts-data.json')
  const bollywood = require('../../Api-Data/bollywood-posts.json')
  return (
    <div className='dinu'>
      <GenericPages articles={bollywood} />
      <GenericAdds adds={ adds} video={ videos} topposts={posts } />
    </div>
  )
}

export default Bollywood
