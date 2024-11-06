import ErrorBlock from "../../bases/ErrorBlock";
import Loading from "../../components/Loading";
import useRequest from "../../hooks/useRequest/useRequest";
import { IhomeData } from "../../types";
import api from "./api";
import Banner from "./components/banner";
import Header from "./components/header";
import "./components/index.scss"
import NavBar from "./components/navbar";
import Card from "../../components/Card";
import Book from "../../components/Book";

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
            <div className=" p-[10px] rounded-md overflow-hidden h-[calc(100%-50px)] overflow-y-auto">
                <Banner banners={data.banner} />
                <NavBar />

                <div className="mt-10">
                    <Card title="热门精选" >
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home;