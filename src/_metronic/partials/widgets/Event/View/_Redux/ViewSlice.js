
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ListDatas: {
    id: 165,
    Title: "沒有大標題",
    questions: [
      {
        id: 3,
        title: "沒有小標題",
        options: [
          { type: 'field', content: '' }
        ]
      }
    ]
  },
  ImgId: ""
};
export const advertisingViewSlice = createSlice({
  name: "View",
  initialState: initialState,
  reducers: {
    getActivityData: (state, action) => {
      let { ListDatas } = action.payload;
      state.ListDatas = ListDatas;
    },
    getActivityDataImgId: (state, action) => {
      let { ImgId } = action.payload;
      state.ImgId = ImgId;
    },
  }
});
