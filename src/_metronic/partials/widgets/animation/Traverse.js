import React from "react";
import { useSpring, animated, easings } from "react-spring";
import Trainsition from "./Trainsition";
export default function Traverse({ reverse }) {
    const Traverse = useSpring({
        loop: { reverse: true },
        from: { x: 0, rotateZ: 0, background: '#ff3c00', },
        to: { x: 50, rotateZ: 360, background: '#46e891', },
        config: {
            duration: 1500,
            easing: easings.easeInOutQuart,
        },
    })
    const styles = useSpring({
        loop: reverse ? { reverse: true } : true,
        from: {
            rotateZ: 0,
            background: '#ffd500'
        },
        to: {
            rotateZ: 360,
            background: '#f27a55'
        },
        config: {
            duration: 2000,
            easing: easings.easeInOutQuart,
        },

    })
    return (
        <animated.div
            style={{
                width: 70,
                height: 70,
                backgroundColor: '#46e891',
                borderRadius: 16,
                overflow: 'hidden',
                ...Traverse,
            }}
        >
            <animated.div
                style={{
                    width: 50,
                    height: 50,
                    marginTop: "20%",
                    marginLeft: "5%",
                    backgroundColor: '#46e891',
                    borderRadius: 16,
                    overflow: 'hidden',
                    padding: 5,
                    ...styles,
                }}
            >
                <Trainsition />
            </animated.div>
        </animated.div>
    )
}