import ViewProtocol from "./ViewProtocol";
import { advertisingViewSlice } from "./ViewSlice";
const { actions } = advertisingViewSlice;
export const Api = {
  getActivityData: (id) => (dispatch) => {
    return ViewProtocol.ins().getActivityData(id).then((response) => {
      const res = response.data;
      switch (response.status) {
        case 200:
          dispatch(actions.getActivityData({ ListDatas: res.datas }));
          break;
        default:
          dispatch(actions.getActivityData({ ListDatas: {} }));
          break;
      }
    })
  },
  getActivityDataImgId: (id) => async (dispatch) => {
    let response = await ViewProtocol.ins().getActivityDataImgId(id);
    let res = response.data;
    let status = response.status;
    if (status === 200) {
        dispatch(actions.getActivityDataImgId({ ImgId: res.datas }));
    }
  },
}

export const Handle = {

}
