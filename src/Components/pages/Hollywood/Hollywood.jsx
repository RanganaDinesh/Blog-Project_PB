import React from 'react'
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Hollywood = () => {
  const Hollywood = require('../../Api-Data/Hollywood-data.json')
  const adds = require('../../Api-Data/hollywood/adds-data.json');
  const videos = require('../../Api-Data/hollywood/videos-data.json');
  const posts = require('../../Api-Data/hollywood/posts-data.json')
  return (
      <div className='dinu'>
      <GenericPages articles={Hollywood} />
      <GenericAdds adds={ adds} video={ videos} topposts={ posts} />
      
    </div>
  )
}

export default Hollywood
