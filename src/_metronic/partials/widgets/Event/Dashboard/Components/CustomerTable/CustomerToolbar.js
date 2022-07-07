import { useState } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material/styles';
import { grey, lightBlue } from '@mui/material/colors';
import { Link } from "react-router-dom";
const ColorButton = styled(IconButton)(() => ({
  '&:hover': {
    backgroundColor: grey[200],
  },
}));
export default function CustomerToolbar() {
  const [focus, set] = useState(false);
  return (
    <Tooltip title="點選後新增活動" >
      <Link
        to="/Event/AddActivity/FirstPage"
        style={{ color: '#FFF', }}
      >
        <ColorButton
          size="medium"
          onMouseEnter={() => set(true)}
          onMouseLeave={() => set(false)}
        >
          <AddCircleIcon fontSize="inherit" style={{ color: !focus || lightBlue[700] }} />
        </ColorButton>
      </Link>
    </Tooltip>
  )
}