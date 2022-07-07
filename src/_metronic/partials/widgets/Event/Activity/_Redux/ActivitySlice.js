
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const actionTypes = {
  setPosition: "[setPosition] Action",
  deleteOption: "[deleteOption] Action",
  onInsertField: "[onInsertField] Action",
  deleteQuestion: "[deleteQuestion] Action",
  getActivityData: "[getActivityData] Action",
  onChangeFieldType: "[onChangeFieldType] Action",
  onInsertQuestion: "[onInsertQuestion] Action",
  handleChangeFieldValue: "[handleChangeFieldValue] Action",
  onChangeExpand: "[onChangeExpand] Action",
  setQuestionTitle: "[setQuestionTitle] Action",
  initialQuestion: "[initialQuestion] Action",
  setAnimation: "[setAnimation] Action",
  submitEventForm: "[submitEventForm] Action",
  getActivityManageData: "[getActivityManageData] Action",
  setFirstPageViewContent: "[setFirstPageViewContent] Action",
};
const initialState = {
  EventActivityData: [],
  initValue: {},
  AnimationValue: 400,
  FirstPageViewContent: "",
  Questions: [
    {
      title: "",
      expand: true,
      options: [
        { type: 'field', content: '' }
      ]
    }
  ],
};
export const reducer = persistReducer(
  { storage, key: "Activity", whitelist: ["EventActivityData", "Questions", "FirstPageViewContent"] },
  (state = initialState, action) => {
    let newData = [...state.Questions]
    switch (action.type) {
      case actionTypes.setPosition: {
        const { Position } = action.payload;
        return { ...state, Questions: Position }
      }
      case actionTypes.onInsertQuestion: {
        const { Insert } = action.payload;
        newData.push(Insert);
        return { ...state, Questions: newData }
      }
      case actionTypes.onInsertField: {
        let { InsertQuestionIndex: index } = action.payload
        let type = newData[index].options[0].type;
        newData[index].options.push({ type: type, content: '' })
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.deleteOption: {
        let { questionIndex, deleteIndex } = action.payload
        delete newData[questionIndex].options[deleteIndex];
        newData[questionIndex].options = newData[questionIndex].options.filter(_ => _)//刪除空白
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.deleteQuestion: {
        let { deleteIndex } = action.payload;
        delete newData[deleteIndex]
        newData = newData.filter(_ => _)
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.getActivityData: {
        let { data } = action.payload;
        let Data = [...state.EventActivityData]
        if (!Data.length) {
          Data = Data.concat(data)
        }
        return { ...state, EventActivityData: [...Data] }
      }
      case actionTypes.onChangeFieldType: {
        let { type, questionIndex } = action.payload
        newData[questionIndex].options.forEach(datas => datas.type = type)
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.handleChangeFieldValue: {
        let { value, questionIndex, selectionIndex } = action.payload;
        newData[questionIndex].options[selectionIndex].content = value
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.onChangeExpand: {
        let { index, expand } = action.payload;
        newData[index].expand = expand;
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.setQuestionTitle: {
        let { title, index } = action.payload;
        newData[index].title = title
        return { ...state, Questions: [...newData] }
      }
      case actionTypes.initialQuestion: {
        return { ...state, Questions: initialState.Questions }
      }
      case actionTypes.setAnimation: {
        return { ...state, AnimationValue: action.payload.AnimationValue }
      }
      case actionTypes.submitEventForm: {
        return state = initialState;
      }
      case actionTypes.getActivityManageData: {
        let { request } = action.payload;
        return {
          ...state,
          initValue: request.Creator,
          Questions: request.Questions.questions
        }
      }
      case actionTypes.setFirstPageViewContent: {
        let { FirstPageViewContent } = action.payload;
        return { ...state, FirstPageViewContent }
      }
      default:
        return state;
    }
  }
);
export const actions = {
  setPosition: (Position) => ({
    type: actionTypes.setPosition,
    payload: Position
  }),
  onInsertQuestion: (Insert) => ({
    type: actionTypes.onInsertQuestion,
    payload: Insert
  }),
  onInsertField: (InsertQuestionIndex) => ({
    type: actionTypes.onInsertField,
    payload: InsertQuestionIndex,
  }),
  deleteOption: (questionIndex, deleteIndex) => ({
    type: actionTypes.deleteOption,
    payload: questionIndex, deleteIndex
  }),
  deleteQuestion: (deleteIndex) => ({
    type: actionTypes.deleteQuestion,
    payload: deleteIndex,
  }),
  getActivityData: (data) => ({
    type: actionTypes.getActivityData,
    payload: data,
  }),
  onChangeFieldType: (type, questionIndex) => ({
    type: actionTypes.onChangeFieldType,
    payload: type, questionIndex
  }),
  handleChangeFieldValue: (value, questionIndex, selectionIndex) => ({
    type: actionTypes.handleChangeFieldValue,
    payload: value, questionIndex, selectionIndex,
  }),
  onChangeExpand: (expand, index) => ({
    type: actionTypes.onChangeExpand,
    payload: expand, index,
  }),
  setQuestionTitle: (title, index) => ({
    type: actionTypes.setQuestionTitle,
    payload: title, index,
  }),
  initialQuestion: () => ({
    type: actionTypes.initialQuestion,
  }),
  setAnimation: (AnimationValue) => ({
    type: actionTypes.setAnimation,
    payload: AnimationValue,
  }),
  submitEventForm: () => ({
    type: actionTypes.submitEventForm,
  }),
  getActivityManageData: (request) => ({
    type: actionTypes.getActivityManageData,
    payload: request
  }),
  setFirstPageViewContent: (FirstPageViewContent) => ({
    type: actionTypes.setFirstPageViewContent,
    payload: FirstPageViewContent
  })
}
