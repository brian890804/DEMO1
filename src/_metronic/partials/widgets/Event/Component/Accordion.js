import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useSelector } from "react-redux";
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
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
export default function CustomizedAccordions({ children, title, draggablItem, data, onChangeExpand, index, ...draggableProps }) {
  const AnimationValue = useSelector(store => store.event.AnimationValue);
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let judgeControlType = data?.expand !== undefined
  return (
    <Accordion
      disableGutters
      elevation={0}
      TransitionProps={{ timeout: AnimationValue }}
      expanded={judgeControlType ? data.expand : expanded === 'panel1'}
      onChange={(judgeControlType ?
        () => { onChangeExpand(!data?.expand, index) }
        : handleChange('panel1'))
      }
      sx={{
        borderRadius: 1,
        boxShadow: "2px 2px 10px #DCDCDC",
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography
          style={{
            fontWeight: '600',
            fontSize: 18,
            height: 30,
            paddingTop: 5,
          }}>{title}
        </Typography>
        <div className="draggableIcon"
          style={{ position: 'absolute', right: 20, top: 10, display: draggablItem ? '' : 'none' }}
          {...draggableProps} >
          <DragHandleIcon fontSize="large" />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion >
  );
}