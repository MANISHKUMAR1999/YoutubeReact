import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import CommentContainer from "./CommentContainer";
import VideoDescription from "./VideoDescription";
import Sidebar from "./Sidebar";

const WatchPage = () => {
  //const params = useParams()
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
  <>
 

    {/* <div className="grid grid-flow-col px-12">
      <iframe className="col-span-9 rounded-md"
      allowtransparency = "true"
        width="1200"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="col-span-3">
      <ButtonList/>
        <VideoContainer/>
       
      </div>
    </div>  */}
    <div className="flex flex-row ">
    <Sidebar/>
    <div >
    <iframe className="col-span-9 rounded-md"
      allowtransparency = "true"
        width="1200"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
       <CommentContainer/>
      
    </div>
    <div>
    <ButtonList/>
      <VideoContainer/>
    </div>
    </div>
    
   
   
    

    </>

   
    


  
    
  );
};

export default WatchPage;
