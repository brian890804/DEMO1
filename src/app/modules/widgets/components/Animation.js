import React, { useState, useEffect } from 'react'
import Pentagram from '../../../../_metronic/partials/widgets/animation/Pentagram'
import Fade from '../../../../_metronic/partials/widgets/animation/Fade'
import Battery from '../../../../_metronic/partials/widgets/animation/Battery'
import Traverse from '../../../../_metronic/partials/widgets/animation/Traverse'
import SqureZoomCircle from '../../../../_metronic/partials/widgets/animation/SqureZoomCircle'
import Svg from '../../../../_metronic/partials/widgets/animation/Svg'
import Draggable from '../../../../_metronic/partials/widgets/animation/Draggable/Draggable'
export default function Animation() {
    const [svg, set] = useState('active');
    useEffect(() => {
        setTimeout(() => (svg === 'active' ? set('') : set('active')), 5000)
    }, [svg])
    return (
        <>
            <div className='row g-8 g-xl-8'>
                <Layout title={<Fade showText={"描邊動畫"} />}>
                    <Pentagram strokeDasharray={4} /> <Pentagram strokeDasharray={20} />
                    <div />
                    <Pentagram strokeDasharray={40} /><Pentagram strokeDasharray={80} />
                </Layout>
                <Layout title={<Fade showText={"填滿動畫"} />}>
                    <Battery division={3} />
                    <Battery division={2} />
                    <Battery division={1} />
                </Layout>
            </div>
            <div className='row g-5 g-xl-8  '>
                <Layout title={<Fade showText={"動畫"} />} >
                    <div />
                    <Svg svg={svg} />
                    <Traverse />
                    <Traverse />
                    <Traverse />
                    <Traverse />
                    <div />
                </Layout>
                <Layout title={<Fade showText={"點選動畫"} />}>
                    <SqureZoomCircle />
                </Layout>
            </div>
            <div className='row g-5 g-xl-8 '>
                <Layout title={<Fade showText={"動畫"} />} >
                    <Draggable items={[1,2,3,4]} />
                </Layout>
                <Layout title={<Fade showText={"點選動畫"} />}>
                </Layout>
            </div>
        </>
    )
}
function Layout({ title, children }) {
    return (
        <div className='col-xl-6 '>
            <div className={`card card-xl-stretch mb-xl-8 `}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>
                            {title}
                        </span>
                        <span className='text-muted fw-bold fs-7'>組件</span>
                    </h3>
                </div>
                <div className='card-body py-3 '>
                    <div className="row " style={{ height: '100%', justifyContent: 'center', padding: 10 }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}