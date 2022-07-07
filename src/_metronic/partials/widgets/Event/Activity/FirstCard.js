import React from 'react'
import * as actions from './_Redux/ActivityAction'
import FirstForm from './FirstForm'
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
export default function FirstCard() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const Api = {
    setFirstPageViewContent: () => {
      dispatch(actions.Handle.setFirstPageViewContent(id))
    },
  }

  return (
    <FirstForm Api={Api} />
  )
}