import { useEffect, useState } from 'react';
import ActivityForm from "./ActivityForm";
import * as actions from './_Redux/ActivityAction'
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const creatorFields = [
  { label: '地點', name: 'address', placeholder: "請輸入地址" },
  { label: '報名開始時間', name: 'startTime', type: 'date' },
  { label: '報名結束時間', name: 'endTime', type: 'date' },
  { label: '報名成功後導向頁面', name: 'guide', type: 'url', placeholder: 'https://' },
  { label: '實體門票數量', name: 'numberOfTickets', type: 'number', placeholder: '請輸入門票數量' },
]

export default function AddActivityCard() {
  const dispatch = useDispatch();
  const initValues = useSelector(store => store.event.initValue, shallowEqual);
  const [initialValues, setInitialValues] = useState({
    address: '',
    startTime: '',
    endTime: '',
    guide: '',
    numberOfTickets: '',
  });
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      Api.getActivityManageData(id)
    } else {
      setInitialValues({
        address: '',
        startTime: '',
        endTime: '',
        guide: '',
        numberOfTickets: '',
      })
      Handle.initialQuestion();
    }
    // eslint-disable-next-line 
  }, [id])
  useEffect(() => {
    if (id) {
      if (Object.keys(initValues).length) {
        setInitialValues(initValues)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initValues])
  let api = actions.Api;
  const Api = {
    submitEventForm: (request) => {
      dispatch(api.submitEventForm(request))
    },
    getActivityManageData: (id) => {
      dispatch(api.getActivityManageData(id))
    },
  }
  let handle = actions.Handle;
  const Handle = {
    setPosition: (request) => {
      dispatch(handle.setPosition(request))
    },
    setQuestionTitle: (title, questionIndex) => {
      dispatch(handle.setQuestionTitle(title, questionIndex))
    },
    initialQuestion: () => {
      dispatch(handle.initialQuestion())
    },
    onChangeExpand: (expand, questionIndex) => {
      dispatch(handle.onChangeExpand(expand, questionIndex))
    },
    onDelete: (deleteIndex, deleteType, questionIndex) => {
      dispatch(handle.onDelete(deleteIndex, deleteType, questionIndex))
    },
    onInsertQuestion: () => {
      dispatch(handle.onInsertQuestion())
    },
    onInsertField: (questionIndex) => {
      dispatch(handle.onInsertField(questionIndex))
    },
    onChangeFieldType: (questionIndex, type) => {
      dispatch(handle.onChangeFieldType(questionIndex, type))
    },
    handleChangeFieldValue: (questionIndex, selectionIndex, value) => {
      dispatch(handle.handleChangeFieldValue(questionIndex, selectionIndex, value))
    },
  }
  return <ActivityForm
    Api={Api}
    Handle={Handle}
    creatorFields={creatorFields}
    ReviseContent={id ? true : false}
    initialValues={initialValues}
  />
}