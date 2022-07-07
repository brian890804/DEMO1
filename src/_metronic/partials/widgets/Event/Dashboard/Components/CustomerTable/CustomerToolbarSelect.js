import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import BlockIcon from "@mui/icons-material/Block";
import { withStyles } from "tss-react/mui";
import DeleteIcon from '@mui/icons-material/Delete';

const defaultToolbarSelectStyles = {
  iconButton: {
  },
  iconContainer: {
    marginRight: "24px",
  },
  inverseIcon: {
    transform: "rotate(90deg)",
  },
};

function CustomerToolbarSelect({ classes, displayData, selectedRows, setSelectedRows, onRowsDelete }) {
  const handleClickInverseSelection = () => {
    const nextSelectedRows = displayData.reduce((nextSelectedRows, _, index) => {
      if (!selectedRows.data.find(selectedRow => selectedRow.index === index)) {
        nextSelectedRows.push(index);
      }
      return nextSelectedRows;
    }, []);

    setSelectedRows(nextSelectedRows);
  };
  const handleClickDeselectAll = () => {
    setSelectedRows([]);
  };
  const handleDeleteUser = (request) => {
    onRowsDelete(request.data.map(data => data.index))
    setSelectedRows([]);
  }

  return (
    <div className={classes.iconContainer}>
      <Tooltip title={"取消所有"}>
        <IconButton className={classes.iconButton} onClick={() => handleClickDeselectAll()}>
          <IndeterminateCheckBoxIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title={"反向選取"}>
        <IconButton className={classes.iconButton} onClick={() => handleClickInverseSelection()}>
          <CompareArrowsIcon className={[classes.icon, classes.inverseIcon].join(" ")} />
        </IconButton>
      </Tooltip>
      <Tooltip title={"刪除"}>
        <IconButton className={classes.iconButton} onClick={() => handleDeleteUser(selectedRows)} aria-label={"刪除"}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default withStyles(CustomerToolbarSelect, defaultToolbarSelectStyles, { name: "CustomToolbarSelect" });
