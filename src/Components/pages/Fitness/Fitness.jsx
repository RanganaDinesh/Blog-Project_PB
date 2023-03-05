import React from 'react'
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Fitness = () => {
  const adds = require('../../Api-Data/fitness/adds-data.json');
  const videos = require('../../Api-Data/fitness/videos.json');
  const posts = require('../../Api-Data/fitness/topposts.json')
  const Fitness = require('../../Api-Data/fitness-data.json')
  return (
    <div className='dinu'>
      <GenericPages articles={Fitness} />
      <GenericAdds adds={ adds} video={ videos} topposts={posts } />
    </div>
  )
}

export default Fitness
