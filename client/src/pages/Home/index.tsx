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
import CountDown from "../../components/CountDown";
import Ranking from "./components/ranking";

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


    const renderHot =()=>{
        return data.popular.map((v,index)=>{
            return <div className="my-1" key={index}>
                 <Book title={v.title} desc={v.desc} author={v.author} coverImg={v.coverImg} />
            </div>
        })
    }

    const renderCountDown=()=>{
        return <div className="ml-3">
            <CountDown />
        </div>
    }


    const renderRecommend =()=>{
        return data.recommend.map((v,index)=>{
            return  <Book layout="vertical" title={v.title} key={index} desc={v.desc} author={v.author} coverImg={v.coverImg} />
        })
    }

    const renderTime =()=>{
        return data.limited.map((v,index)=>{
            return  <Book layout="vertical" title={v.title} key={index} desc={v.desc} author={v.author} coverImg={v.coverImg} />
        })
    }


    
  




    return (
        <div className="homePage h-full pb-[10px]">
            <Header title="首页" />
            <div className=" p-[5px] rounded-md overflow-hidden h-[calc(100%-50px)] overflow-y-auto">
                <Banner banners={data.banner} />
                <NavBar />

                <div className="mt-10">
                    <Card title="热门精选" >
                       {renderHot()}
                    </Card>
                </div>

                <div className="mt-10">
                    <Card title="今日推荐" layout="vertical" >
                       {renderRecommend()}
                    </Card>
                </div>

                <div className="mt-10">
                    <Card title="限时免费"  layout="vertical" tlele_slot={renderCountDown()}  >
                       {renderTime()}
                    </Card>
                </div>

                <div className="mt-10">
                    <Card title="排行榜"    >
                       <Ranking tabs={data.ranking} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home;