import React from "react";
import {Header} from "@/components/Header";
import Link from "next/link";
import {BackArrow} from "@/components/svgs";
import QuizSwiper from "@/app/quiz/[curriculumId]/[courseId]/[chapterId]/[quizId]/quiz-swiper";
import ShareButton from "@/modules/quiz/components/ShareButton";

type QuizPageParams = {
    curriculumId: string,
    courseId: string,
    chapterId: string,
    quizId: string
}

const QuizPage = ({ params }: { params: QuizPageParams }) => {
    return (
        <div className="flex flex-col h-full">
            <Header>
                <Link href={`/curriculum/${params.curriculumId}/${params.courseId}`}>
                    <BackArrow/>
                </Link>
                <div className="font-bold">퀴즈</div>
                <ShareButton/>
            </Header>
            <div className="flex-grow px-5 pb-5 pt-2.5 overflow-y-scroll bg-white">
                <QuizSwiper
                    chapterId={params.chapterId}
                    couseId={params.courseId}
                    curriculumId={params.curriculumId}
                />
            </div>
        </div>
    )
}

export default QuizPage;

