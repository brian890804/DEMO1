import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as Yup from "yup";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { Formik } from "formik";
import DarkButton from '../Component/DarkButotn';
import Carousel from '../Component/Carsousel'
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} style={{ height: '100%', paddingBottom: 20 }} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    style={{ height: 40, cursor: 'default' }}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Title({ ListDatas }) {
  return <div style={{
    fontSize: 20,
    fontWeight: '700',
    backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)',
    fontFamily: 'sans-serif',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    lineHeight: 3,
    color: 'white',
    paddingLeft: 10
  }}
  >
    {ListDatas.Title}
  </div>
}
const judgmentType = (options, FieldValues, setFieldValue, index) => {
  let Field = `Options${index}`;
  switch (options[0].type) {
    case "field":
      return <>
        <InputLabel >選擇選項</InputLabel>
        <Select
          name={Field}
          onChange={(x) => setFieldValue(Field, x.target.value)}
          label="options"
          defaultValue={''}
          style={{ minHeight: 30, width: '100%', wordBreak: 'break-word' }}
        >
          {options.map((data, index) =>
            <MenuItem value={data.content} key={index}>
              {data.content}
            </MenuItem>
          )}
        </Select>
      </>
    case "radio":
      return (
        <RadioGroup
          sx={{ width: '100%', wordBreak: 'break-word' }}
          name={Field}
          onChange={(x) => setFieldValue(Field, x.target.value)}
          defaultValue=''
        >
          {options.map((data, index) =>
            <FormControlLabel
              key={index}
              value={data.content}
              control={<Radio />}
              label={data.content} />
          )}
        </RadioGroup>)
    case "check":
      return (
        <FormGroup
          name={Field}
          sx={{ width: '100%', wordBreak: 'break-word' }}
          onChange={(e) => {
            let repeatValue = false;
            let checkValue = e.target.value
            let Data = FieldValues[Field]
            Data.length && Data.map(data => {
              if (data === checkValue) return repeatValue = true;
            })
            if (repeatValue) {
              setFieldValue(Field, Data.filter(data => data !== checkValue))
              repeatValue = false
            } else if (Data === '') {
              setFieldValue(Field, [checkValue])
            } else {
              setFieldValue(Field, Data.concat([checkValue]))
            }
          }}>
          {
            options.map((data, index) =>
              <FormControlLabel
                sx={{ width: '100%', wordBreak: 'break-word' }}
                key={index}
                value={data.content}
                control={<Checkbox />}
                label={data.content} />
            )
          }
        </FormGroup >
      )
    case "shortAnswer":
      return <TextField
        name={Field}
        required
        onChange={(x) => setFieldValue(Field, x.target.value)}
        label="您的回答"
        style={{ minHeight: 55, width: '100%' }}
      />
    default:
      break;
  }
}
function Form({ init, ListDatas }) {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ ...init }}
      validationSchema={undefined}
      onSubmit={(values) => {
        console.log(values)
      }}>
      {({ setFieldValue, values, handleSubmit }) => (
        <>
          <Carousel>
            {
              ListDatas.questions.map((data, index) => {
                return <Accordion expanded={true} key={index}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>{data.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl sx={{ m: 1, minWidth: 100, width: '100%' }}>
                      {judgmentType(data.options, values, setFieldValue, index)}
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
              })
            }
          </Carousel>
          <div style={{ textAlign: 'center' }}>
            <DarkButton type="submit" onClick={() => handleSubmit()} >送出</DarkButton>
          </div>
        </>
      )}
    </Formik >
  )
}

export default function ActivityViewList({ ListDatas }) {
  const [init, setInit] = React.useState([]);
  React.useMemo(() => {
    let newData = {};
    ListDatas.questions.map(data =>
      data.options.map((_, index) => {
        newData[`Options${index}`] = ''
        setInit(newData)
      })
    ) // eslint-disable-next-line 
  }, [ListDatas])
  return (
    <>
      <Title ListDatas={ListDatas} />
      <Form init={init} ListDatas={ListDatas} />
    </>

  );
}