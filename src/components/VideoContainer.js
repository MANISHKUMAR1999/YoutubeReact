import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";

import Card from "./Card";
import { Link } from "react-router-dom";
import Data_Youtube from "../utils/list2.json"

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // const data = await fetch(YOUTUBE_VIDEOS_API);
    // const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  // const getVideos = ()=>{
  //   // const data = await fetch(YOUTUBE_VIDEOS_API);
  //   // const json = await data.json();
  //   // const data = await fetch(YOUTUBE_VIDEOS_API);
  //   // const json = await data.json();
  //   //console.log(json.items);
  //   setVideos(Data_Youtube.items);
  // };
  return (
    <div className="flex flex-wrap" >
      {videos.map(video=> <Link to={"/watch?v="+video.id} key={video.id}><Card info={video}  /> </Link>)}
   
    </div>
  );
};

export default VideoContainer;
