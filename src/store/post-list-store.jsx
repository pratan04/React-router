import { useState } from "react";
import { useEffect } from "react";
import { createContext, useReducer } from "react";



 export const PostList=createContext({

    postList:[] ,
    // fetching: false,
    addPost: ()=>{},
    deletePost: ()=>{},
    





})

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST" )
    {newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)}

    


    else if(action.type ==="ADD_INITIAL_POSTS"){
        newPostList=action.payload.posts;
    }


    else if (action.type ==="ADD_POST"){
        newPostList=[action.payload, ...currPostList];
    }


   
    
    return newPostList;

}



const PostListProvider=({children})=>{

    const [postList,dispatchPostList]=useReducer(postListReducer, []);

    // const [fetching,setFetching]=useState(false);

    




    // const [postList,dispatchPostList]=useReducer(postListReducer, DEFAULT_POST_LIST);
    

    const addPost=(post)=>{

        dispatchPostList({
            type: "ADD_POST",
            payload:post,
        })

       
    };


    const addInitialPosts=(posts)=>{

        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload:{
                posts,

            }
        })

       
    };
    

    const deletePost=(postId)=>{

        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        })
       
    };

    // useEffect(()=>{
    //     setFetching(true);
        
    //     const controller=new AbortController();
    //     const signal=controller.signal;


    //     fetch('https://dummyjson.com/posts',{signal})
    //     .then(res => res.json())
        
    //     .then(data =>{addInitialPosts(data.posts)
            
    //         setFetching(false)
    //     });
        
    //     return ()=>{
            
    //         // console.log("cleanup in progress")
    //     controller.abort()}
    // },[])
    

    

    
    return (<div>
         <PostList.Provider value={
        {
            postList,
            addPost,
            deletePost,
            // fetching,

        } }>
        {children}
    </PostList.Provider>
    </div>)

}

//     const DEFAULT_POST_LIST=[
//         {
//         id: "1",
//         title: "going haridwar",
//         body: "ssuplets dive in ganga river",
//         reactions: 2,
//         userId:"user-9",
//         tags: ["vacation","yoga","meditation"],
//     },

//     {
//         id: "2",
//         title: "going haridwar",
        
//         reactions: 2,
//         userId:"user-9",
//         tags: ["vacation","yoga","meditation"],
//         body: "ssuplets dive in ganga river",
//     },
// ];


export default PostListProvider;