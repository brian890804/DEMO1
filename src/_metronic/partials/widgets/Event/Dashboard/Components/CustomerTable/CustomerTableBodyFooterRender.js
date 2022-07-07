import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function CustomerTableBodyFooterRender(opts) {
  let avgRegisterNumber = (
    opts.data.reduce((accu, item) => {
      return accu + item.data[6].props.children;
    }, 0) / opts.data.length).toFixed(2);
  let avgCheckInNumber =
    (opts.data.reduce((accu, item) => {
      return accu + item.data[7].props.children;
    }, 0) / opts.data.length).toFixed(2);
  return (
    <TableFooter >
      <TableRow>
        {opts.selectableRows !== 'none' ? <TableCell /> : null}
        {opts.columns?.map((col, index) => {
          if (col.display === 'true') {
            if (col.name === '報名人數') {
              return (
                <TableCell key={index} >
                  平均: {avgRegisterNumber} 人
                </TableCell>
              );
            } else if (col.name === '報到人數') {
              return (
                <TableCell key={index} >
                  平均: {avgCheckInNumber} 人
                </TableCell>
              );
            } else {
              return <TableCell key={index} />;
            }
          }
          return null;
        })}
      </TableRow>
    </TableFooter>
  );
}