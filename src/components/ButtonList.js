//import React from 'react'

import React, { useEffect, useState } from 'react'
import Button from './Button'

import { GET_VIDEO_CATEGORIES_LIST } from '../utils/config';



const ButtonList = () => {

  const [categoryList, setCategoryList] = useState([]);
  
  const getCategories = async () => {
    const data = await fetch(GET_VIDEO_CATEGORIES_LIST);
    const data_json = await data.json();

    console.log(data_json.items,"byyyyyyyyyyyyyy");

    setCategoryList(data_json.items);
  };

  useEffect(()=> {
    getCategories();
  },[]);
  return (
    <div className="flex flex-wrap">
      {categoryList.map(item=>{
        return  <Button name={item.snippet.title} key={item.id}/>
      })
      }
      

  
    </div>
  )
}

export default ButtonList