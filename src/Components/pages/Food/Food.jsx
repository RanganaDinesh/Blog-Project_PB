import React from 'react'
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Food = () => {
  const adds = require('../../Api-Data/food-page/adds-data.json');
  const videos = require('../../Api-Data/food-page/videos-data.json');
  const posts = require('../../Api-Data/food-page/posts-data.json')
  const Food = require('../../Api-Data/Food-data.json')
  return (
    <div className='dinu'>
      <GenericPages articles={Food} />
      <GenericAdds adds={ adds} video={videos } topposts={posts } />
    </div>
  )
}

export default Food
