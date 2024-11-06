import ErrorBlock from "../../bases/ErrorBlock";
import Loading from "../../components/Loading";
import BottomNavgation from "../../bases/Navgation/Navgation";
import useRequest from "../../hooks/useRequest/useRequest";
import { IhomeData } from "../../types";
import api from "./api";
import Banner from "./components/banner";
import Header from "./components/header";
import "./components/index.scss"
import NavBar from "./components/navbar";

const Home: any = () => {
    const { data, error } = useRequest<IhomeData>({
        url: api.getHomeData
    })

    if (error) {
        return <ErrorBlock />
    }

    if (!data) {
        return <>
            <Loading />
        </>
    }

    // console.log(data)


    return (
        <div className="homePage h-full">
            <Header title="首页" />
            <div className="banners p-[10px] rounded-md overflow-hidden h-[calc(100%-100px)]">
                <Banner banners={data.banner} />
                <NavBar />
            </div>
        </div>
    )
}

export default Home;