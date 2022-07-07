import React from 'react'
import ActivityViewList from './ActivityViewList'
import * as actions from './_Redux/ViewAction'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
export default function ActivityViewListCard() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const ListDatas = useSelector(store => store.view.ListDatas, shallowEqual);

  React.useEffect(() => {
    dispatch(actions.Api.getActivityData(id))
    // eslint-disable-next-line 
  }, [])
  return (ListDatas ? <ActivityViewList ListDatas={ListDatas} /> : <></>)
}