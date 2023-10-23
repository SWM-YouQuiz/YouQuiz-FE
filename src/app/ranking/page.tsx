import {Header} from "@/components/Header";
import {Alert} from "@/components/svgs";
import Carousel from "@/modules/ranking/components/Carousel";
import RankingList from "@/modules/ranking/components/RankingList";

const RankingPage = () => {

    return (
        <div className="flex flex-col h-full">
            <Header>
                <div className="font-bold">리더보드</div>
                <div className="hidden">
                    <Alert/>
                </div>
            </Header>
            <div className="flex-grow flex flex-col justify-between pt-4 bg-secondary-50">
                <Carousel/>
                <RankingList/>
            </div>
        </div>
    )
}

export default RankingPage;