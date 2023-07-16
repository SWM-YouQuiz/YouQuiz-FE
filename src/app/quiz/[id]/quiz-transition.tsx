"use client"
import {useAnimate, usePresence, ValueAnimationTransition} from "framer-motion";
import React, {ReactNode, useEffect} from "react";
import {SwipeEventData, useSwipeable} from "react-swipeable";
import {QuizItems} from "@/app/quiz/[id]/quiz-items";
import {Heart, Share, ThumbDown, ThumbUp} from "@/components/svgs";
import {Quiz, SwipeStatus} from "@/modules/quiz/types";

type QuizTransitionProps = {
    swipeStatus: SwipeStatus,
    setSwipeStatus:  React.Dispatch<React.SetStateAction<SwipeStatus>>,
    children: ReactNode
}

const onTheLeft = {x: "-100%"};
const onTheRight = {x: "100%"};
const QuizTransition = ({swipeStatus, setSwipeStatus, children}: QuizTransitionProps) => {
    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()

    useEffect(() => {
        if (swipeStatus === "next") {
            const enterAnimation = async () => {
                await animate(scope.current, onTheLeft, {duration: 0.5, ease: "easeInOut"})
            }
            enterAnimation()

        } else if (swipeStatus === "prev") {
            const exitAnimation = async () => {
                await animate(scope.current, onTheRight, {duration: 0.5, ease: "easeInOut"})
            }
            exitAnimation()
        }
    }, [swipeStatus, isPresent, animate, scope])

    const config = {
        delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
        preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
        trackTouch: true,                      // track touch input
        trackMouse: false,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
        swipeDuration: 200,               // allowable duration of a swipe (ms). *See Notes*
        touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
    }

    const handleSwipe = (eventData: SwipeEventData) => {
        if (eventData.dir === "Right") {
            setSwipeStatus('prev');
            // router.replace(`${id - 1}`);
        } else if (eventData.dir === "Left") {
            setSwipeStatus('next');
            // router.replace(`${id + 1}`);
        }
    };

    const handlers = useSwipeable({
        onSwiped: handleSwipe,
        ...config,
    });

    return (
        <div
            className="container h-full w-full"
            ref={scope}
        >
            <div
                className="container h-full w-full flex flex-col justify-between"
                {...handlers}
            >
                {children}
            </div>
        </div>

    )
}

export default QuizTransition;

