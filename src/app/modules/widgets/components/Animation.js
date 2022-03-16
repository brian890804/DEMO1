import React from 'react'
import Pentagram from '../../../../_metronic/partials/widgets/animation/Pentagram'
import Fade from '../../../../_metronic/partials/widgets/animation/Fade'
import Battery from '../../../../_metronic/partials/widgets/animation/Battery'
import Traverse from '../../../../_metronic/partials/widgets/animation/Traverse'
// import SqureZoomCircle from '../../../../_metronic/partials/widgets/animation/SqureZoomCircle'

export default function Animation() {
    return (
        <>
            <div className='row g-8 g-xl-8'>
                <Layout title={<Fade showText={"描邊動畫"} />}>
                    <Pentagram strokeDasharray={4} /> <Pentagram strokeDasharray={20} />
                    <Pentagram strokeDasharray={40} /><Pentagram strokeDasharray={80} />
                </Layout>
                <Layout title={<Fade showText={"填滿動畫"} />}>
                    <Battery division={3} />
                    <Battery division={2} />
                    <Battery division={1} />
                </Layout>
            </div>
            <div className='row g-5 g-xl-8'>
                <Layout title={<Fade showText={"翻轉動畫"} />}>
                    <Traverse />
                    {/* <SqureZoomCircle/> */}
                </Layout>
                <Layout title={<Fade showText={"其他"} />}>
                    <Battery division={3} />
                    <Battery division={2} />
                    <Battery division={1} />
                </Layout>
            </div>
        </>
    )
}
function Layout({ title, children }) {
    return (
        <div className='col-xl-6'>
            <div className={`card card-xl-stretch mb-xl-8`}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>
                            {title}
                        </span>
                        <span className='text-muted fw-bold fs-7'>組件</span>
                    </h3>
                </div>
                <div className='card-body py-3'>
                    <div className='table-responsive' style={{ margin: 20 }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}