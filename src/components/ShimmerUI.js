const shimmerUI = ()=>{
    return(
    
<div className="restro-list flex mx-[97px]">
    {Array(5).fill("").map( (e,index) =>(
        
        <div  key={index} className="card m-5 my-16 h-80" style={{height:"300px", backgroundColor:"lightgray", width:"200px", borderStyle:"none"}}>
      </div>

    ) )} 
       </div>
    );
}

export default shimmerUI;