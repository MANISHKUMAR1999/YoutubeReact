import React from 'react'
import userlogo from "../assets/images/user-3296.png"
const commentsData = [
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[

    ]

  },
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[
      
    ]

  },
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[
      {
        name:"Manish Kumar",
        text:"lorem ipsum dolor sit amet, conectetur adip",
        replies:[ ]
    
      },
      {
        name:"Manish Kumar",
        text:"lorem ipsum dolor sit amet, conectetur adip",
        replies:[ ]
    
      },
      {
        name:"Manish Kumar",
        text:"lorem ipsum dolor sit amet, conectetur adip",
        replies:[
          {
            name:"Manish Kumar",
            text:"lorem ipsum dolor sit amet, conectetur adip",
            replies:[ ]
        
          },
          {
            name:"Manish Kumar",
            text:"lorem ipsum dolor sit amet, conectetur adip",
            replies:[ ]
        
          },
          {
            name:"Manish Kumar",
            text:"lorem ipsum dolor sit amet, conectetur adip",
            replies:[ ]
        
          },
          {
            name:"Manish Kumar",
            text:"lorem ipsum dolor sit amet, conectetur adip",
            replies:[
              {
                name:"Manish Kumar",
                text:"lorem ipsum dolor sit amet, conectetur adip",
                replies:[ ]
            
              },
              {
                name:"Manish Kumar",
                text:"lorem ipsum dolor sit amet, conectetur adip",
                replies:[ ]
            
              },
              {
                name:"Manish Kumar",
                text:"lorem ipsum dolor sit amet, conectetur adip",
                replies:[ ]
            
              },
              {
                name:"Manish Kumar",
                text:"lorem ipsum dolor sit amet, conectetur adip",
                replies:[ ]
            
              },
             ]
        
          },
         ]
    
      },

      
    ]

  },
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[
      
    ]

  },
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[
      
    ]

  },
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[ ]

  },
  {
    name:"Manish Kumar",
    text:"lorem ipsum dolor sit amet, conectetur adip",
    replies:[
      
    ]

  },
  
]

const Comment = ({data})=>{
  const {name,text,replies} =data;
 return <div className='flex shadow-sm bg-gray-100 p-2 rounded my-2'>
  <img alt="user" src={userlogo} className='w-8 h-8'/>
  <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
  </div>
 </div>
}

const CommentsList = ({Comments})=>{
  return Comments.map((comment,index)=> (
    <div key={index}>
 <Comment data={comment} />
 <div className='pl-5 border border-l-black ml-5'>
 {/* <Comment data={comment} key={index}/>
 <Comment data={comment} key={index}/>
 <Comment data={comment} key={index}/> */}
 <CommentsList Comments={comment.replies}/>
 </div>
    </div>
 


  ) )

}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentsList Comments = {commentsData}/>
    </div>
  )
}

export default CommentContainer