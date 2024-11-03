import useRequest from "../../hooks/useRequest/useRequest";
import api from "./api";
import Header from "./components/header";


 const Home:any =()=>{
    const {data,error}=useRequest({
        url:api.getHomeData
    })

    if(error){
        return <>error back</>
    }

    if(!data){
        return <>loading</>
    }
    return (
        <div className="homePage">
            <Header />
        </div>
    )
}

export default Home;