import React from 'react'
import MarketCard from './cards/MarketCard'
import { stories } from '@/content/marketStories'

const MarketStories = () => {
  return (
    <div className=' sm:w-1/3 px-4 py-2 sm:overflow-y-scroll'>
            <div className="max-sm:hidden bg-gray-200 w-fit text-xl text-red-400 px-2">
        <h1>Market Stories</h1>
      </div>
      <div className="">
        {
            stories.map((story, index)=> (
                <MarketCard 
                    key={index}
                    imageSrc = {story.image}
                    heading = {story.heading}
                    description = {story.description}
                />
            ))
        }
      </div>
    </div>
  )
}

export default MarketStories
