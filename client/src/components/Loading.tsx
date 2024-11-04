import React from "react";
import SpinnerLoading from "../bases/Spinner";



const Loading: React.FC =  React.memo(()=>{

        return <div className="flex justify-center w-full  items-center absolute left-0 right-0 top-0 bottom-0">
            <SpinnerLoading  />
        </div>
    
})

export default Loading;