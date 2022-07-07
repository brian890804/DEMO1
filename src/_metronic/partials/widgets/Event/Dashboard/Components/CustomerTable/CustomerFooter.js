import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import MuiTablePagination from "@mui/material/TablePagination";

export default function CustomerFooter(props) { //目前沒有客製化 可用可不用
  const { count, textLabels, rowsPerPage, page } = props;
  const handleRowChange = event => {
    props.changeRowsPerPage(event.target.value);
  };

  const handlePageChange = (_, page) => {
    props.changePage(page);
  };
  const footerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 24px 0px 24px',
  };
  
  return (
    <TableFooter>
      <TableRow>
        <TableCell style={footerStyle} colSpan={1000}>
          <MuiTablePagination
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={textLabels.rowsPerPage}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to}筆 ${textLabels.displayRows} ${count}筆`}
            backIconButtonProps={{
              'aria-label': textLabels.previous,
            }}
            nextIconButtonProps={{
              'aria-label': textLabels.next,
            }}
            rowsPerPageOptions={[10, 20, 100]}
            onRowsPerPageChange={handleRowChange}
            onPageChange={handlePageChange}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  );


};