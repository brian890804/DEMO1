import { useEffect } from 'react'
import EventDashBoardForm from "./EventDashBoardForm"
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../Activity/_Redux/ActivityAction'
export default function EventDashBoardCard() {
  const dispatch = useDispatch();
  const { EventActivityData,data } = useSelector(
    ({ event }) => ({
      EventActivityData: event.EventActivityData,
      data: event.EventActivityData,
    }),
  );
  useEffect(() => {
    Api.getActivityData();
  }, [])//eslint-disable-line
  const Api = {
    getActivityData: () => {
      dispatch(actions.Api.getActivityData())
    },
  }

  return (
    EventActivityData?.length ? <EventDashBoardForm Api={Api} EventActivityData={EventActivityData} /> : ""
  )
}