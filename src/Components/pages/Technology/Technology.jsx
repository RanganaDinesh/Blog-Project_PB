import React from 'react'
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Technology = () => {
  const Technology = require('../../../Components/Api-Data/technology-data.json')
  const adds = require('../../Api-Data/technology/adds-data.json');
  const videos = require('../../Api-Data/technology/videos-data.json');
  const posts = require('../../Api-Data/technology/posts-data.json')
  return (
    <div className='dinu'>
      <GenericPages articles={Technology} />
      <GenericAdds adds={adds } video={videos } topposts={ posts} />
    </div>
  )
}

export default Technology
