import axios from 'axios';
const AppSetting = process.env.REACT_APP_URL;
export default class EventProtocol {
  static pIns = new EventProtocol();
  static ins() { return this.pIns; }
  getActivityData() {
    return axios.post(AppSetting + "Event/ActivityData");
  }
  submitEventForm(request) {
    return axios.post(AppSetting + "Event/SubmitEventForm",request)
  }
  getActivityManageData(id){
    return axios.post(AppSetting + "Event/getActivityManageData/"+id)
  }

}