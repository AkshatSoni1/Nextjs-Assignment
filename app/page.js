"use client"
import DiscussionForum from '@/components/DiscussionForum'
import MarketStories from '@/components/MarketStories'
import Sidebar from '@/components/Sidebar'
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [togglePages, setTogglePages] = useState("home")

  useEffect(() => {
    setTogglePages("home")
  }, [])
  

  const handleClick = () => {
    setToggleSidebar((toggle) => !toggle);
  }
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="flex max-md:fixed">
          <Sidebar
            width={toggleSidebar ? 96 : 0}
            toggle = {toggleSidebar}
          />
          <div className="w-4 bg-gray-200 flex items-center">
            {toggleSidebar ? <GoTriangleLeft
              onClick={handleClick}
              className='bg-blue-950 h-20 text-white text-lg cursor-pointer'
            />
            :
            <GoTriangleRight
              onClick={handleClick}
              className='bg-blue-950 h-20 text-white text-lg cursor-pointer'
            />}
          </div>
        </div>
        <div className="flex sm:flex-row flex-col w-full">
          <div className={`sm:hidden ${togglePages==="home" && "p-4 justify-evenly"} flex bg-blue-900 items-center justify-center text-white w-screen`}>
            <span onClick={()=>setTogglePages("discuss")} className={`${togglePages==="discuss"&&"bg-blue-950 p-4  border-r-2"} px-5`}>Discussion Forum</span>
            <span onClick={()=>setTogglePages("market")} className={`${togglePages==="market"&&"bg-blue-950 p-4   border-l-2"} px-5`}>Market Stories</span>
          </div>
          {togglePages === "home"?
          <>
          <DiscussionForum />
          <MarketStories />
          </>
          :
          togglePages === "discuss" ?
          <DiscussionForum /> :
          <MarketStories />
          }
        </div>
      </div>
    </div>
  )
}

export default Home
