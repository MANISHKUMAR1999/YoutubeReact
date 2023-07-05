import React from "react";
import { Link } from "react-router-dom";
//import { abbreviateNumber } from "js-abbreviation-number";
//import { BsFillCheckCircleFill } from "react-icons/bs";

//import VideoLength from "../shared/videoLength";

const SearchResultVideoCard = ({ info }) => {
  // console.log(info)

  //  console.log(props,"hiiiiiiiiiiii")
  console.log(info);
  const { snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;
  return (
    <>
      <div className="flex align-middle mb-8">
        <div >
        <img
          src={thumbnails.high.url}
          width="600px"
          height="100px"
          className="bg-transparent rounded-lg"
        />
        </div>
       
      
      <div className="mx-5">
        <p className="text-3xl leading-10 font-normal font-sans">{title}</p>
        <div className="flex gap-2">
          <div className="text-gray-500">7.5 Views .</div>
          <div className="text-gray-500">{publishedAt}</div>
        </div>

        <div className="flex mt-6 gap-2">
          <img
            src="https://yt3.ggpht.com/ytc/AGIKgqNbtvxHC3m-OcDbHv2f7IxHz_smDuSMmzwDokYH_Q=s68-c-k-c0x00ffffff-no-rj"
            className="h-7 w-7 rounded-full"
          />
          <div className="text-gray-500 font-medium">{channelTitle}</div>
        </div>

        <div className="mt-6">
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="bg-gray-200 text-2xl text-gray-500 font-medium">
            New
          </button>
          <button className="bg-gray-200 text-2xl text-gray-500 font-medium">
            4K
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default SearchResultVideoCard;
