import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
//import { Context } from "../context/contextApi";
//import LeftNav from "./LeftNav";
//import SearchResultVideoCard from "./SearchResultVideoCard";
import Sidebar from "./Sidebar";
//import Button from "./Button";
import ButtonList from "./ButtonList";
import SearchResultVideoCard from "./SearchResultVideoCard";
import Data from "../utils/list.json"

const SearchResult = () => {
    console.log(Data);
    const [result, setResult] = useState([]);
    const { searchQuery } = useParams();
    console.log(searchQuery)
    //const { setLoading } = useContext(Context);

    useEffect(() => {
        //document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = async () => {

      const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+searchQuery+"&type=video&key=AIzaSyCWZ-sf2E30eojGYgeIBqicP4i7kBtkBMA")
      const json = await data.json();
      console.log(json.items)
      setResult(json?.items);
      // setResult(Data.items);
      // console.log(result[0])
        // setLoading(true);

           //const data = await fetch(Data)
         //  console.log(Data.items,"hiiiiiiiii")
      //const json = await data;
     //console.log(json.items,"hiiiiiiii")
     

        
    //     fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
    //         console.log(res);
    //         setResult(res?.contents);
    //         // setLoading(false);
    //     });
    // };
    }

    return (
       <>
       <div className="flex">
       <Sidebar/>
       <div className="flex">
        <div className="">
        {/* {result.map((video)=><SearchResultVideoCard info={video}/>)} */}

        {result.map((video)=><Link to={"/watch?v="+video.id.videoId}><SearchResultVideoCard info={video}/></Link>)}
        </div>
        
        </div>
       <div>
       
     
       </div>
      
       {/* <SearchResultVideoCard /> */}
       {/* <div>
       <SearchResultVideoCard info={result[0]} />
       </div> */}
      

       </div>
       
      
       </>
    );
};


export default SearchResult;