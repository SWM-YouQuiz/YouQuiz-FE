import {Header} from "@/components/Header";
import {BackArrow, Rightarrow, Setting} from "@/components/svgs";
import Link from "next/link";
import {GoalEdit, NicknameEdit} from "@/modules/profile/Edits";

const MyPage = () => {
    return (
        <div className="flex flex-col h-full">
            <Header>
                <Link href="/profile" replace={true}>
                    <BackArrow/>
                </Link>
                <div className="font-bold">마이페이지</div>
                <div/>
            </Header>
            <div className="flex-grow overflow-y-auto p-5 bg-white">
                <BodyContainer/>
            </div>
        </div>
    )
}

export default MyPage;

const BodyContainer = () => {
    return (
        <div className="space-y-8">
            <NicknameEdit/>
            <GoalEdit/>
        </div>
    )
}