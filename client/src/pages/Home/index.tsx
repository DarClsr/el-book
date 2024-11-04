import useRequest from "../../hooks/useRequest/useRequest";
import api from "./api";
import Banner from "./components/banner";
import Header from "./components/header";
import "./components/index.scss"

const Home: any = () => {
    const { data, error } = useRequest<{
        banner: []
    }>({
        url: api.getHomeData
    })

    if (error) {
        return <>error back</>
    }

    if (!data) {
        return <>loading</>
    }


    return (
        <div className="homePage">
            <Header title="首页" />
            <div className="banners p-[10px] rounded-md overflow-hidden">
                <Banner banners={data.banner} />
            </div>
        </div>
    )
}

export default Home;