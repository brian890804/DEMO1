import React from "react";
import { useSpring, animated, easings } from "react-spring";
import Trainsition from "./Trainsition";
export default function Traverse() {
    const Traverse = useSpring({
        loop: { reverse: true },
        from: { x: 0, rotateZ: 0, background: '#46e891', },
        to: { x: 100, rotateZ: 100, background: '#277ef4', },
        config: {
            duration: 2000,
            easing: easings.easeInOutQuart,
        },
    })
    const styles = useSpring({
        loop: { reverse: true },
        from: {
            rotateZ: 0,
            background: '#277ef4'
        },
        to: {
            rotateZ: 360,
            background: '#46e891'
        },
        config: {
            duration: 2000,
            easing: easings.easeInOutQuart,
        },

    })
    return (
        <animated.div
            style={{
                width: 100,
                height: 100,
                backgroundColor: '#46e891',
                borderRadius: 16,
                margin: 20,
                overflow: 'hidden',
                ...Traverse,
            }}
        >
            <animated.div
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#46e891',
                    borderRadius: 16,
                    marginTop: 25,
                    marginLeft: 25,
                    position: 'absolute',
                    padding:5,
                    ...styles,
                }}
            >
                <Trainsition />
            </animated.div>
        </animated.div>
    )
}