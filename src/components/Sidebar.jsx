import { Link } from "react-router-dom";

const Sidebar=()=>{
    return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "170px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4"></span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">

    <li 
      // onClick={()=>{setSelectedTab("Home")}}

      onClick={()=>{console.log("home clicked")}}

       className="nav-item">
        <Link to="/" 
        // className={`nav-link text-white 
        // ${selectedTab==="Home" && "active"}`} 

        className="nav-link text-white" 

        aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li 
      // onClick={()=>{setSelectedTab("CreatePost")}}

      onClick={()=>{console.log("create post clicked")}}
      >
        <Link to="/create-post" 
        // className={`nav-link text-white 
        // ${selectedTab==="CreatePost" && "active"}`}

        className="nav-link text-white"
        >
          
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>



      {/* <li 
      // onClick={()=>{setSelectedTab("Home")}}

      onClick={()=>{console.log("home clicked")}}

       className="nav-item">
        <a href="/" 
        // className={`nav-link text-white 
        // ${selectedTab==="Home" && "active"}`} 

        className="nav-link text-white" 

        aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li 
      // onClick={()=>{setSelectedTab("CreatePost")}}

      onClick={()=>{console.log("create post clicked")}}
      >
        <a href="/create-post" 
        // className={`nav-link text-white 
        // ${selectedTab==="CreatePost" && "active"}`}

        className="nav-link text-white"
        >
          
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li> */}
      {/* <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
          Customers
        </a>
      </li> */}
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
     
}
export default Sidebar;