import React, { useEffect, useState } from "react";
import { Tabs } from "react-daisyui"
import { IBook } from "../../../types/book";
import Book from "../../../components/Book";

interface RankingProps {
    tabs: TabItem[],
}

interface TabItem {
    title: string,
    books: IBook[]
}


const Ranking: React.FC<RankingProps> = ({ tabs = [] }) => {

    console.log(tabs, 'ranking tabs')

    const [activeIndex, setActiveIndex] = useState(0)
    const [rankList, setRankList] = useState<IBook[]>(tabs[0]?.books || [])

    const handler = (index: number) => {
        setActiveIndex(index);
    }

    const getRankList = () => {
        setRankList(tabs[activeIndex].books)
    }

    useEffect(()=>{
        getRankList()
    },[activeIndex])

    return <div className="ranking">
        <Tabs variant="boxed">
            {
                tabs.map((v, index) => {
                    return <Tabs.Tab key={index} active={activeIndex == index} onClick={(e: React.MouseEvent) => handler(index)}>{v.title}</Tabs.Tab>
                })
            }
        </Tabs>
        <div className="rankinglist">

            {
                rankList.map((rank) => {
                    return <Book key={rank.bookId} title={rank.title} coverImg={rank.coverImg} desc={rank.desc} />
                })
            }
        </div>
    </div>
}

export default Ranking;