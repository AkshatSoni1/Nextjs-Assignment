import React from 'react'
import DiscussCard from './DiscussCard'
import { cardData } from '@/content/discussForumCard'

const DiscussionForum = () => {
  return (
    <div className=' sm:w-2/3 px-8 sm:px-4 sm:overflow-y-auto'>
      <div className="max-sm:hidden bg-gray-200 w-fit text-3xl text-red-400 px-2">
        {/* yaha se karna hai */}
        <h1>Discussion Forum</h1>
      </div>
      <div className="">
        {cardData.map((data, index)=>(
            <DiscussCard 
                key={index}
                profile={data.profilePic}
                name = {data.name}
                description = {data.description}
                sector = {data.sector}
                time = {data.time}
                likes={data.likes}
                views={data.views}
                comments={data.comments}
            />

        ))}
      </div>
    </div>
  )
}

export default DiscussionForum
