import React from 'react'

const Card = ({info}) => {
  console.log(info)
   const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails,publishedAt} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
       <img src={thumbnails.medium.url} className='rounded-lg' alt="thumbnail"/>
       <ul>
         <li className='font-bold py-2'>{title}</li>
        <li className='text-gray-500 text-md'>{channelTitle}</li>
         <li>{statistics.viewCount} views</li>
         <li>{publishedAt}</li>
       </ul>

     </div>
  )
}

export default Card