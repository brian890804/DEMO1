import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

export default function Pentagram({ strokeDasharray }) {
  return (
    <SVG strokeDasharray={strokeDasharray} />
  );
}
function SVG({ strokeDasharray }) {
  const [flip, set] = useState(false)
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 8,
    delay: 0,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return (
    <animated.svg
      style={{ width: 150, height: 150,disaplay:'flex',alignContent:'center',justifyContent:'center' }}
      viewBox="-10 -10 120 120"
      strokeWidth="2"
      fill="white"
      stroke="rgb(45, 55, 71)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={strokeDasharray}
      strokeDashoffset={x.to(x => (0.5 - x) * 20)}>
      <polygon stroke="red" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
    </animated.svg>
  )
}

