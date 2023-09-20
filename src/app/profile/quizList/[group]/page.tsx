import {Header} from "@/components/Header";
import {Rightarrow, Setting} from "@/components/svgs";
import Menu, {menuData} from "@/modules/profile/Menu";
import {getServerSession} from "next-auth";
import {authOptions} from "@/modules/auth/auth";
import QuizCard from "@/modules/profile/components/QuizCard";
import QuizList from "@/modules/profile/quizList/QuizList";

const validRoute = [
    "correctQuizIds",
    "incorrectQuizIds",
    "markedQuizIds"
]

const getTitle = (group: keyof UserInfo) => {
    let title = "";
    menuData.forEach(el => {
        if(el.href.includes(group)) {
            title = el.title;
        }
    })
    if(title) {
        return title;
    }
    throw new Error("잘못된 접근입니다.");
}

const QuizListPage = async ({params}: {params: {group: keyof UserInfo}}) => {
    const session = await getServerSession(authOptions);

    if(!session) {
        throw new Error("오류가 발생했습니다.");
    }

    const quizzes = session.user.user[params.group] as string[];

    return (
        <div className="flex flex-col h-full">
            <Header>
                <div className="font-bold">{getTitle(params.group)}</div>
                <Setting/>
            </Header>
            <div className="flex-grow overflow-y-auto p-5 bg-white">
                <QuizList quizIds={quizzes}/>
            </div>
        </div>
    )
}

export default QuizListPage;