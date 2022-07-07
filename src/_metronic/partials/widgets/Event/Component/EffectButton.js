import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
export default function EffectButton({ onDelete, onChangeFieldType, children, onInsertQuestion, visibleIndex, items }) {
  const [listOpen, setListOpen] = React.useState(false);
  const handleListOpen = () => setListOpen(true);
  const handleListClose = () => setListOpen(false);
  const actions = [
    { icon: <DeleteIcon />, name: '刪除問題' },
    { icon: <CheckBoxIcon />, name: '更改為勾選方塊' },
    { icon: <RadioButtonCheckedIcon />, name: '更改為核取方塊' },
    { icon: <ArrowDropDownCircleIcon />, name: '更改為文字方塊' },
    { icon: <TextFieldsIcon />, name: '更改為簡答方塊' },
    { icon: <AddBoxIcon />, name: '新增問題' },
  ];
  const disabledPreset = (index) => {
    let type = items[visibleIndex].options[0].type
    if (index === 0 && visibleIndex === 0) return true
    if (index === 1 && type === 'check') return true
    if (index === 2 && type === 'radio') return true
    if (index === 3 && type === 'field') return true
    if (index === 4 && type === 'shortAnswer') return true
  }
  return (
    <div onMouseOver={handleListOpen} onMouseLeave={handleListClose} style={{ width: '100%', position: 'relative', padding: 5, paddingBottom: 25 }}>
      {children}
      {
        listOpen ?
          <SpeedDial
            ariaLabel="SpeedDial  openIcon  example"
            sx={{ position: 'absolute', right: 5, bottom: 5 }}
            icon={<SpeedDialIcon openIcon={<BuildIcon />} />}
            direction="left"
          >
            {actions.map((action, index) => (
              <SpeedDialAction
                key={index}
                icon={action.icon}
                tooltipTitle={action.name}
                disabled={disabledPreset(index)}
                onClick={() => {
                  switch (index) {
                    case 0:
                      onDelete(); break;
                    case 1:
                      onChangeFieldType('check');
                      break;
                    case 2:
                      onChangeFieldType('radio');
                      break;
                    case 3:
                      onChangeFieldType('field');
                      break;
                    case 4:
                      onChangeFieldType('shortAnswer');
                      break;
                    case 5:
                      onInsertQuestion(); break;
                    default: break;
                  }
                }}
              />
            ))}
          </SpeedDial>
          : undefined
      }
    </div>
  );
}