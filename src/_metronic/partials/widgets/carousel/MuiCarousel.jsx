import React, { useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Cards from "./Cards";
import Right from '@mui/icons-material/ChevronRight';
import notAvailable from '../../../../../assets/notAvailable.png'
import Left from '@mui/icons-material/KeyboardArrowLeft';
import { isMobile } from 'react-device-detect';
import store from '../../../../store';
import { Scale } from '@mui/icons-material';
const nonft = new URL('../../../../../assets/NFT/noNFT.png', import.meta.url).href;
const button_manage = new URL('../../../../../assets/NFT/NFT_ManagementWallet.png', import.meta.url).href;
const arrow = new URL('../../../../../assets/NFT/arrow.png', import.meta.url).href;



function Layout({ children, CarouselRef }) {
    const isLandScape = store(state => state.isLandScape);
    return (
        <div style={{ width: '100%', height: isLandScape ? "55vh" : '30vh', }}>
            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
                <div className="col-2 my-auto ">
                    <IconButton onClick={() => CarouselRef.current.prev()}>
                        <img src={arrow} style={{ alignSelf: 'center', width: '60%', height: '50%', objectFit: 'contain'}} />
                        {/* <Left color='primary' style={{ width: '100%', height: isLandScape ? "10vh" : '15vh', }} /> */}
                    </IconButton>
                </div>
                <div className="col-8  my-auto">
                    {children}
                </div>
                <div className="col-2 my-auto">
                    <IconButton onClick={() => CarouselRef.current.next()}>
                        <img src={arrow} style={{ alignSelf: 'center', width: '60%', height: '50%', objectFit: 'contain', transform: 'scaleX(-1)' }} />
                        {/* <Right color='primary' style={{ width: '100%', height: isLandScape ? "10vh" : '15vh', }} /> */}
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default function MuiCarousel({ nftList, setOpenManageWallet }) {
    const CarouselRef = useRef();
    const isLandScape = store(state => state.isLandScape);
    return (
        <>
            {
                nftList.length ?
                    <Layout CarouselRef={CarouselRef}>
                        <Cards spread={'customer'} ref={CarouselRef} >
                            {
                                nftList.map((item, i) => <Item key={i} item={item} />)
                            }
                        </Cards>
                    </Layout>
                    :
                    <img src={nonft} style={{ alignSelf: 'center', width: '60%', height: '50%', objectFit: 'contain' }} />

            }
            <button style={{ border: 0, backgroundColor: 'transparent', width: isMobile ? (isLandScape ? '15vw' : '30vw') : '10vw', alignSelf: 'center' }}
                onClick={() => { setOpenManageWallet(true) }}
            >
                <img src={button_manage} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </button>
        </>
    )
}

function Item(props) {
    const isLandScape = store(state => state.isLandScape);
    const [imgSrc, setImgSrc] = React.useState(props.item.metadata != null ? props.item.metadata.image : "")
    const handleImgError = () => {
        setImgSrc(notAvailable)
    }
    return (
        <img src={imgSrc} alt="s"
            style={{
                width: "100%",
                height: isLandScape ? '50vh' : '20vh'
                , cursor: 'pointer'
            }}
            onError={handleImgError} />
    )
}