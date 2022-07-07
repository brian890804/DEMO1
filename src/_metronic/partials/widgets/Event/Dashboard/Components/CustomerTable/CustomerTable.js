import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import CustomerTableBodyFooterRender from './CustomerTableBodyFooterRender';
import CustomerFooter from './CustomerFooter';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomerToolbarSelect from './CustomerToolbarSelect';
import CustomerToolbar from './CustomerToolbar';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Field = {
  width: "100%",
  color: 'black',
  textAlign: 'center',
  marginTop: 5,
}
export default function CustomerTable({ Api, EventActivityData }) {
  const [columns, setColumns] = useState([]);
  const [control, setControl] = useState(false);
  const [data, setData] = useState('');
  let code;
  const judge = (fileName, value) => {
    switch (fileName) {
      case "編號":
        code = value
        return <div style={{ ...Field, cursor: 'default' }}>{value}</div>
      case "功能":
        return <>
          <Link
            to={`/Event/ReviseActivity/${code}`}
            style={Field}
          ><EditIcon fontSize='small' />
          </Link>
          <Link
            to={`/Event/View/ActivityCover/${code}`}
            target="_blank"
            style={Field}
          ><VisibilityIcon fontSize='small' />
          </Link>
        </>
      default:
        return <div style={{ ...Field, cursor: 'default' }}>{value}</div>
    }
  }
  function createData(fileName, index) {
    let newColumns = columns;
    newColumns.push({ //欄位設定
      name: fileName, options: {
        filter: fileName !== '功能' && true,
        setCellProps: () => ({ style: { minWidth: "50px", maxWidth: "60px" } }),
        customBodyRender: (value, _, updateValue) => (
          judge(fileName, value)
        ),
      },
    }) //篩選條件可用index設定
    setColumns(columns)
  }
  useEffect(() => {
    if (!columns.length) {
      rowColumns.forEach((data, index) => createData(data, index))
    }
    setControl(true)
  }, [])//eslint-disable-line
  useEffect(() => {
    let newData = [...EventActivityData]
    newData = newData.map(data => Object.values(data))
    setData(newData)
  }, [EventActivityData])

  const onRowsDelete = (removeIndex) => {
    let newData;
    if (removeIndex.length > 1) {
      newData = Object.assign({}, data)
      delete newData[1]
      removeIndex.map(data => delete newData[data])
      newData = Object.values(newData)
    } else {
      newData = data.filter((_, index) => index !== removeIndex[0])
    }
    setData(newData)
  }

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    elevation: 10,
    tableBodyHeight: (window.innerHeight / 2.2).toString(),
    draggableColumns: { enabled: true },//欄位拖曳
    onDownload: (buildHead, buildBody, columns, data) => {//不加這個中文會亂碼
      return "\uFEFF" + buildHead(columns) + buildBody(data)
    },
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
      return (
        <CustomerFooter
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          changeRowsPerPage={changeRowsPerPage}
          changePage={changePage}
          textLabels={textLabels}
        />
      );
    },
    customTableBodyFooterRender: ({ columns, data, selectableRows }) => {
      return (
        <CustomerTableBodyFooterRender
          data={data}
          columns={columns}
          selectableRows={selectableRows}
        />
      );
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
      return (
        <CustomerToolbarSelect
          displayData={displayData}
          onRowsDelete={onRowsDelete}
          setSelectedRows={setSelectedRows}
          selectedRows={selectedRows} />
      )
    },
    customToolbar: () => {
      return (
        <CustomerToolbar />
      )
    },
    textLabels: {
      body: {
        noMatch: "沒有搜尋到相同的資料",
        toolTip: "排序",
        columnHeaderTooltip: column => `${column.label}`
      }, pagination: {
        next: "下一頁",
        previous: "上一頁",
        rowsPerPage: "總頁數:",
        displayRows: "共",
      },
      toolbar: {
        search: "搜尋",
        downloadCsv: "下載CSV檔",
        print: "影印",
        viewColumns: "選擇顯示欄位",
        filterTable: "篩選表格",
      }, filter: {
        all: "All",
        title: "篩選",
        reset: "重設",
      }, viewColumns: {
        title: "顯示欄位",
      }, selectedRows: {
        text: "行 被選擇",
        delete: "刪除",
        deleteAria: "刪除所選欄位",
      },
    },
  };
  return (
    <>
      {
        control ?
          <MUIDataTable
            title={"活動管理"}
            data={data}
            columns={columns}
            options={options}
          />
          : null
      }
    </>

  )
}
// const handleDeleteUser = (idToDelete) => {
//   axios.delete("https://jsonplaceholder.typicode.com/users/${idToDelete}").then
//     (response => {
//       console.log(response)
//     })
//     .catch(error => {
//       console.log(error)
//     });
// };
const rowColumns = ["編號", "標題", "作者", "報名開始", "報名結束", "地點", "報名人數", "報到人數", "狀態", "功能"];




