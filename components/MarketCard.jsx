import React from 'react'

const MarketCard = (props) => {
    const {imageSrc, heading, description} = props;
  return (
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageSrc} alt="Sunset in the mountains"/>
        <div className="px-4 py-3">
            <div className="font-bold text-lg mb-2">{heading}</div>
            <p className="text-gray-700 text-sm">
                {description}
            </p>
        </div>
    </div>
</div>
  )
}

export default MarketCard
