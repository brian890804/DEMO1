import React from 'react';
import { shallowEqual, useSelector } from "react-redux";
import DarkButton from '../Component/DarkButotn';
import { Link, useParams } from 'react-router-dom';
export default function ActivityCoverForm() {
  let { id } = useParams();
  const ImgId = useSelector(store => store.view.ImgId, shallowEqual);
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img src={"https://quicktrade.aiv.com.tw/api/image/" + ImgId} alt='img' />
      <DarkButton style={{ position: 'absolute', bottom: 0, right: '1vw' }}>
        <Link
          to={"/Event/View/ActivityList/" + id}
          target='_blank'
          className="nav-link pl-1"
          style={{ color: "#fff", marginLeft: 10, }}
        >
          報名活動
        </Link>
      </DarkButton>
    </div >
  )
}