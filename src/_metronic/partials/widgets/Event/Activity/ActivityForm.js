import MaterialInput from '../Component/MaterialInput';
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import Accordion from '../Component/Accordion'
import DraggableList from '../Component/Draggable/Draggable';
import { useSwalAlert } from '../../../../helpers/SwalAlert';
import DarkButton from '../Component/DarkButotn';
import { useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';
export default function AddActivityForm({ Api, Handle, initialValues, creatorFields, ReviseContent }) {
  const { alertError, alertSuccess } = useSwalAlert();
  const history = useHistory();
  const Questions = useSelector(store => store.event.Questions);
  const ComparisonDate = (startTime, endTime, values, actions) => {
    if (new Date(startTime).getTime() > new Date(endTime).getTime()) {
      values.endTime = ''
      values.startTime = ''
      alertError({ text: '報名時間錯誤' })
      return 0
    }
    if (ReviseContent) {
      // Api.submitEventForm(Object.assign({}, values, [Option]))
      actions.resetForm();
      alertSuccess({ text: '活動修改成功!' })
    }
    else {
      Api.submitEventForm({ 'Creator': values, Questions })
      actions.resetForm();
      alertSuccess({ text: '活動建立成功!' })
      history.push("/Event/AddActivity/Success")
    }
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues.Creator || initialValues}
      validationSchema={undefined}
      onSubmit={(values, actions) => {
        ComparisonDate(values.startTime, values.endTime, values, actions)
      }}>
      <Form >
        {/*建立表單需填寫欄位*/}
        <CreatorField creatorFields={creatorFields} />
        {/*設定其報名者填寫欄位*/}
        <EventRegistrant Handle={Handle} Questions={initialValues?.Questions?.questions||Questions} />{/*   initialValues[1]?.questions  */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <DarkButton onClick={() => history.goBack()}>
            上一步
          </DarkButton>
          <DarkButton type="submit" >
            {ReviseContent ? "修改" : "送出"}
          </DarkButton>
        </Grid>
      </Form >
    </Formik >
  )
}
function CreatorField({ creatorFields }) {
  return <Accordion title="活動管理表單欄位">
    {
      creatorFields.map((data, index) =>
        <div className="p-2" key={index}>
          <div className="form-group row">
            <Field
              name={data.name}
              component={MaterialInput}
              label={data.label}
              id={data.label}
              type={data.type || "text"}
              placeholder={data.placeholder}
            />
          </div>
        </div>
      )
    }
  </Accordion>
}
function EventRegistrant({ Handle, Questions }) {
  return <Accordion title="報名者選擇填寫欄位">
    <DraggableList Handle={Handle} items={Questions} />
  </Accordion>
}
