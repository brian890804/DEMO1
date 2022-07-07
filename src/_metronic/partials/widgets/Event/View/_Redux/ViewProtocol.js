import axios from 'axios';
const AppSetting = process.env.REACT_APP_URL;
export default class EventProtocol {
  static pIns = new EventProtocol();
  static ins() { return this.pIns; }
  getActivityData(id){
    return axios.post(AppSetting + "View/getActivityData/"+id)
  }
  getActivityDataImgId(id){
    return axios.post(AppSetting + "View/getActivityDataImgId/"+id)
  }
  getActivityDataImg(id){
    return axios.post(AppSetting + "View/getActivityDataImg/"+id)
  }
}