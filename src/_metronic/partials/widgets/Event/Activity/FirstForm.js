import React, { lazy } from 'react'
import DarkButton from '../Component/DarkButotn';
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
const CkEditor = lazy(() => import('../Component/CkEditor'))

export default function FirstForm({ Api }) {
  const FirstPageViewContent = useSelector(store => store.event.FirstPageViewContent, shallowEqual);
  // const ImgId = useSelector(store => store.view.ImgId, shallowEqual);
  console.log(FirstPageViewContent,'FirstPageViewContent')

  return (
    <>
      <CkEditor setfontData={Api.setFirstPageViewContent} TamplatesDataContent={FirstPageViewContent} />
      <div style={{ textAlign: 'center' }}>
        <DarkButton onClick={() => console.log('callApi(fontData)')}>
          <Link
            to="/Event/AddActivity"
            className="nav-link pl-1"
            style={{ color: '#FFF' }}
          >
            下一步
          </Link>
        </DarkButton>
      </div>
    </>
  )
}