import React from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'
import './Battery.css';

export default function App({division}) {
    const [ref, { width }] = useMeasure()
    const props = useSpring({  
        loop: {reverse: true },
        from: { width: 0 },
        to: { width: width / (division && division) },
        delay: 2000})
    return (
            <div ref={ref} className={"main"}>
                <animated.div className={"fill"} style={props}/>
                <animated.div style={{
                    position: "absolute",
                    display: 'flex',
                    color: "#282c34",
                    alignItems: "center",
                    width:'100%',
                    height:'100%',
                    justifyContent: "center",
                }}>{props.width.to(x => x.toFixed(0))}</animated.div>
            </div>
    )
}
