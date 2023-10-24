import './globals.css'
import {ReactNode} from "react";
import Head from "@/app/head";
import QuizContainer from "@/modules/quiz/components/QuizContext";
import QuizFilterContainer from "@/modules/curriculum/components/QuizFilterContainer";
import {AnimationWrapper} from "@/lib/animation/AnimationWrapper";

export const metadata = {
    title: 'Quiz IT',
    description: 'Quiz IT',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        viewportFit: "cover"
    },
}

const RootLayout = async ({children,}: { children: ReactNode }) => {
    return (
        <html lang="ko" className="overscroll-none">
            <Head />
            <body className="h-screen w-full flex flex-col">
                <QuizContainer>
                    <QuizFilterContainer>
                        <AnimationWrapper>
                            {children}
                        </AnimationWrapper>
                    </QuizFilterContainer>
                </QuizContainer>
            </body>
        </html>
    )
}

export default RootLayout;