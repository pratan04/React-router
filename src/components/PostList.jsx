
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
// import  PostListProvider, {PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";



const PostList = ()=>{

        // const {postList,fetching} = useContext(PostListData);

        const postList=useLoaderData();

    //     const [fetching,setFetching]=useState(false);

    // useEffect(()=>{
    //     setFetching(true);
        
    //     const controller=new AbortController();
    //     const signal=controller.signal;


    //     fetch('https://dummyjson.com/posts',{signal})
    //     .then(res => res.json())
        
    //     .then(data =>{addInitialPosts(data.posts)
            
    //         setFetching(false)
    //     });
        
    //     return ()=>{ console.log("cleanup in progress")
    //     controller.abort();
    // }
    // },[])



       



        





    //    const [data,setData]=useState(false);

    //    if(!data){

    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data =>{addInitialPosts(data.posts)});
    //     setData(true);
    //    }
    

        // const handleGetPostsClick=()=>{
        //     fetch('https://dummyjson.com/posts')
        //     .then(res => res.json())
        //     .then(data =>{addInitialPosts(data.posts)});
            

            

        // }

        


    return (<div>

{postList.length===0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}

{postList.map((post)=>(<Post key={post.id} post={post} />))}
</div>)

        {/* {fetching && <LoadingSpinner/>}

    {!fetching && postList.length===0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}

    {!fetching && postList.map((post)=>(<Post key={post.id} post={post} />))}
    </div>) */}


   


    // <Post/>
    // <Post/>
    // <Post/>
    // <Post/>
    // <Post/> 

    
}
export const postloader =()=>{


    return (fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) =>{
    return data.posts    
        })
    )
}

export default PostList;