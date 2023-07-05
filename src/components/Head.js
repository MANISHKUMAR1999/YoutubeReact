import React, { useEffect, useState } from 'react'

import logo from "../assets/images/logo.png"
import userlogo from "../assets/images/user-3296.png"
//import {AiOutlineMenu, AiOutlineSearch } from  "react-icons/ai";
import { useDispatch,useSelector} from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API_URL } from '../utils/config';
import Search from "../assets/images/search.png"
import { cacheResults } from '../utils/searchSlice';
import {  useNavigate,useLocation, useNavigation, Navigate,redirect } from 'react-router-dom';

const Head = () => {

  const[searchQuery,setSearchQuery] = useState("")
  const [suggestion,setSuggestion] = useState([])
  const [showSuggestion,setShowSuggestion] = useState(false)
  const[text,setText] = useState('')
  const navigate = useNavigate()

  const searchCache = useSelector((store)=>store.search)
  //const dispatch = useDispatch()

  useEffect(()=>{
 //API CALL
 //console.log(searchQuery)
  const timer = setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestion(searchCache[searchQuery])

    }else{
      getSearchSuggestions()
    }
   
  },200);

  return ()=>{
    clearTimeout(timer);
  }

 //Make an api call after evry key press

 // key -i
 // render the component
 // useEffect();
 //start the timer = >make api call after 200ms

 //key ip
 // destroy the component(useEffect return method)
 // re-render the component
 // useEffect()
 // start timer = > make api call after 200 ms

 //call this function setTimeout(200)

 // but if the diff b/w 2 api call is <200ms
 //decline the api call

  },[searchQuery])

  const getSearchSuggestions = async ()=>{
    console.log("search query -" + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API_URL+searchQuery)
    const json = await data.json();
    setSuggestion(json[1])
    //console.log(json[1])

    //update cache
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  }

  const searchQueryHandler = (e)=>{
    console.log("ny")
    if(e?.key ==='Enter' || e === 'searchButton' && searchQuery?.length >0){
      navigate(`/searchResult/${searchQuery}`);
    // Navigate(`/searchResult/${searchQuery}`)
    }
  }

  const suggestionHandler = (text)=>{
    console.log("text")
    console.log("text",text)
   // setText(text)
   
      //navigate(`/searchResult/${text}`);
    // Navigate(`/searchResult/${searchQuery}`)
   
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
  //  console.log("helooooooooooo")
   dispatch(toggleMenu());
  // console.log("byyyyyyyyyyyyyyy")
  };
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow sticky top-0'> 
      <div className='flex col-span-1' >
       

        <img className="h-8 cursor-pointer"src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="menu" onClick={()=> toggleMenuHandler()}
        />
        <img  className="h-8 mx-2"
            alt="youtube-logo"
            src={logo}
        /> 
      </div>

      <div className='col-span-10 px-10'>
        <div>
        <input type="text" className='w-1/2 h-[36px] border border-gray-200 py-2 px-5 rounded-l-full' placeholder='search'
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        onFocus={()=>setShowSuggestion(true)}
        onBlur={()=>setShowSuggestion(false)}
       
        />
        <button className='border border-gray-200 py-2 px-5 h-[36px] rounded-r-full bg-gray-100' onClick={() => searchQueryHandler("searchButton")}>Search</button>
        </div>
        {showSuggestion &&(
        <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 '>
          <div>
           {
            suggestion.map((s)=>
            <div key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100 flex gap-2' onClick={()=>console.log("hi")}><img src={Search} className='w-6 h-6 ' />{s}</div>
            )
           }
           
            
            
          </div>
        </div>
        )}
      </div>

      <div className='col-span-1'>
        <img src={userlogo} className='h-8'
        alt="user"
        
        />

      </div>

    </div>
  )
}

export default Head