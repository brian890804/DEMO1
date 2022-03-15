import React,{useState} from 'react';
import { useSpring, animated, config } from 'react-spring'

export default function FadeAnimation({showText}) {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0.5 },
      reset: true,
      reverse: flip,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.h1 style={props}>{showText}</animated.h1>
  }