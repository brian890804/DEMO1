import React from 'react'
import StarFlexibleAnimation from '../../../../_metronic/partials/widgets/animation/StarFlexibleAnimation'
import FadeAnimation from '../../../../_metronic/partials/widgets/animation/FadeAnimation'
import BatteryAnimation from '../../../../_metronic/partials/widgets/animation/BatteryAnimation'
import TrainsitionAnimation from '../../../../_metronic/partials/widgets/animation/TrainsitionAnimation'
export default function Animation() {
    return (
        <>
            <div className='row g-5 g-xl-8'>
                <Layout title={<FadeAnimation showText={"描邊動畫"} />}>
                    <StarFlexibleAnimation strokeDasharray={4} />
                    <StarFlexibleAnimation strokeDasharray={20} />
                    <StarFlexibleAnimation strokeDasharray={40} />
                    <StarFlexibleAnimation strokeDasharray={150} />
                </Layout>
                <Layout title={<FadeAnimation showText={"其他"} />}>
                    <BatteryAnimation />
                    {/* <TrainsitionAnimation NUM_TRANS={['0','2']}/> */}
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