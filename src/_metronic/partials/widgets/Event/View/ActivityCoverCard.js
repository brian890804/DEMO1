import React from 'react';
import ActivityCoverForm from './ActivityCoverForm';
import * as actions from './_Redux/ViewAction'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export default function ActivityCoverCard() {
  let { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.Api.getActivityDataImgId(id))
    // eslint-disable-next-line 
  }, [])
  return (
    <ActivityCoverForm />
  )      
}