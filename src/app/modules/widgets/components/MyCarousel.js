import React, { useRef } from 'react'
import Cards from '../../../../_metronic/partials/widgets/carousel/Cards'
import IconButton from '@mui/material/IconButton';
import Arrow from '@mui/icons-material/ArrowBackIosNew';
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
function Layout({ children, CarouselRef }) {
    return (
        <div style={{ width: '100%', height: "55vh", }}className='card'>
            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
                <div className="col-2 my-auto ">
                    <IconButton onClick={() => CarouselRef.current.prev()}>
                        <Arrow style={{ alignSelf: 'center', width: '60%', height: '50%', objectFit: 'contain' }} />
                    </IconButton>
                </div>
                <div className="col-8  my-auto">
                    {children}
                </div>
                <div className="col-2 my-auto">
                    <IconButton onClick={() => CarouselRef.current.next()}>
                        <Arrow style={{ alignSelf: 'center', width: '60%', height: '50%', objectFit: 'contain', transform: 'scaleX(-1)' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default function MyCarousel() {
    const CarouselRef = useRef();
    var items = [
        '/media/logos/ANKLES_LOGO.jpeg',
        '/media/logos/ANKLES_LOGO.jpeg',
        '/media/logos/ANKLES_LOGO.jpeg',
    ]

    return (
        <Layout CarouselRef={CarouselRef}>
            <Cards spread={'customer'} ref={CarouselRef} >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Cards>
        </Layout>
    )
}

function Item(props) {
    return (
        <img src={toAbsoluteUrl(props.item)}
            alt="s"
            style={{
                width: "100%",
                height: '50vh',
                cursor: 'pointer'
            }} />
    )
}


