import {getCourses, getCurriculums} from "@/modules/curriculum/serverApiActions";
import {Header} from "@/components/Header";
import {Filter} from "@/components/svgs";
import Link from "next/link";
import Card from "@/modules/curriculum/components/Card";

import MotionDiv from "@/lib/animation/MotionDiv";
import BackButton from "@/components/BackButton";
import React from "react";
import {HydratedCourses} from "@/app/curriculum/[curriculumId]/hydrated-course";

const Course = async ({params}: {params: {curriculumId: string}}) => {
    const courses = await getCourses({curriculumId: params.curriculumId});
    const curriculums = await getCurriculums();

    const curriculum = curriculums.find(curriculum => curriculum.id === params.curriculumId) as Curriculum;

    return (
        <div className="flex flex-col h-full">
            <Header>
                <BackButton/>
                <div className="font-bold">{curriculum.title}</div>
                <Link href="/curriculum/filter">
                    <Filter/>
                </Link>
            </Header>
            <MotionDiv className="flex-grow bg-bg-primary overflow-y-auto p-5">
                <BodyContainer courses={courses}/>
            </MotionDiv>
        </div>
    )
}

export default Course;

const BodyContainer = ({courses}: {courses: Course[]}) => (
    <div className="space-y-4">
        {
            courses.map(({id, title, image, curriculumId}) => (
                <HydratedCourses key={`course-${id}`} courseId={id}>
                    <Card
                        id={id}
                        type="course"
                        href={`${curriculumId}/${id}`}
                        alt={title}
                        imageUrl={image}
                        path={title}
                        title={title}
                    />
                </HydratedCourses>
            ))
        }
    </div>
)