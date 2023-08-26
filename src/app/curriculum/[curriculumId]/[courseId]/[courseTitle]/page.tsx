import {getChapters, getCourses} from "@/modules/curriculum/serverApiActions";
import {cn} from "@/util/tailwind";
import {Header} from "@/components/Header";
import {Alert, BackArrow, Filter} from "@/components/svgs";
import Link from "next/link";
import Card from "@/modules/curriculum/components/Card";
import Options from "@/modules/curriculum/components/Options";
const Chapter = async ({params}: {params: {curriculumId: string, courseId: string, courseTitle: string}}) => {
    const chapters = await getChapters({curriculumId: 'mvp', courseId: params.courseId});

    return (
        <div className="flex flex-col h-full">
            <Header>
                <Link href={`/curriculum/${params.curriculumId}`}>
                    <BackArrow/>
                </Link>
                <div className="font-bold">mvp</div>
                <Filter/>
            </Header>
            <div className="flex-grow bg-bg-primary overflow-y-auto p-5">
                <BodyContainer chapters={chapters} courseTitle={params.courseTitle}/>
            </div>
        </div>
    )
}

export default Chapter;

const BodyContainer = ({chapters, courseTitle}: {chapters: Chapter[], courseTitle: string}) => (
    <div className="w-full space-y-4">
        {
            chapters.map(({id, description, courseId}, idx) => (
                    <Card
                        key={`chapter-${id}`}
                        href={`/quiz/${id}`}
                        alt={courseId}
                        imageUrl={`https://quizit-storage.s3.ap-northeast-2.amazonaws.com/${courseTitle}.png`}
                        path={`Chapter ${idx+1}`}
                        allQuizzes={100}
                        solvedQuizzes={40}
                        title={description}
                    >
                        <Options documentUrl="https://nextjs.org/docs/app/building-your-application/routing"/>
                    </Card>
                )
            )
        }

    </div>
)