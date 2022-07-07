import EventProtocol from "./EventProtocol";
import { actions } from './ActivitySlice';
export const Api = {
  getActivityData: () => (dispatch) => {
    return EventProtocol.ins().getActivityData().then((response) => {
      const res = response.data;
      switch (response.status) {
        case 200:
          dispatch(actions.getActivityData({ data: res.datas }));
          break;
        default:
          console.log(res.resultCode)
          break;
      }
    });
  },
  submitEventForm: (request) => (dispatch) => {
    return EventProtocol.ins().submitEventForm(request).then((response) => {
      const res = response.data;
      console.log(res,'resr')
      switch (response.status) {
        case 200:
          dispatch(actions.submitEventForm());
          break;
        default:
          console.log(res.resultCode)
          break;
      }
    });
  },
  getActivityManageData: (id) => (dispatch) => {
    return EventProtocol.ins().getActivityManageData(id).then((response) => {
      const res = response.data;
      switch (response.status) {
        case 200:
          dispatch(actions.getActivityManageData({ request: res.datas }));
          break;
        default:
          dispatch(actions.getActivityManageData({ request: {} }));
          break;
      }
    });
  },
}

export const Handle = {
  setPosition: (request) => async (dispatch) => {
    dispatch(actions.setAnimation({ AnimationValue: 0 }));
    await dispatch(actions.setPosition({ Position: request }));
    dispatch(actions.setAnimation({ AnimationValue: 400 }));
  },
  setQuestionTitle: (title, questionIndex) => (dispatch) => {
    dispatch(actions.setQuestionTitle({ title, index: questionIndex }));
  },
  initialQuestion: () => (dispatch) => {
    dispatch(actions.initialQuestion());
  },
  onChangeExpand: (expand, questionIndex,) => (dispatch) => {
    dispatch(actions.onChangeExpand({ expand, index: questionIndex }));
  },
  onInsertQuestion: () => (dispatch) => {
    dispatch(actions.onInsertQuestion({ Insert: { title: "", expand: true, options: [{ type: 'field', content: '' }] } }));
  },
  onDelete: (deleteIndex, deleteType, questionIndex) => (dispatch) => {
    deleteType === 'answer'
      ? dispatch(actions.deleteOption({ deleteIndex, questionIndex }))
      : dispatch(actions.deleteQuestion({ deleteIndex: deleteIndex }));
  },
  onInsertField: (questionIndex) => (dispatch) => {
    dispatch(actions.onInsertField({ InsertQuestionIndex: questionIndex }));
  },
  onChangeFieldType: (questionIndex, type) => (dispatch) => {
    dispatch(actions.onChangeFieldType({ type, questionIndex }));
  },
  handleChangeFieldValue: (questionIndex, selectionIndex, value) => (dispatch) => {
    dispatch(actions.handleChangeFieldValue({ value, questionIndex, selectionIndex }));
  },
  setFirstPageViewContent: (FirstPageViewContent) => async (dispatch) => {
    dispatch(actions.setFirstPageViewContent({ FirstPageViewContent }));
  },
}
