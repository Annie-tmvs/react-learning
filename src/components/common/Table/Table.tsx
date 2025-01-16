import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableType } from "./Table.type";
import { StyledTableCell, StyledTableRow } from "./Table.cutom";

const TableCustom = (props: TableType) => {
  const { textAlign, theader, tbody } = props;

  return (
    <TableContainer component={Paper} sx={{ margin: "32px 0" }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            {theader?.map((col: string, i: number) => (
              <StyledTableCell key={i} align={textAlign} {...props}>
                {col}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbody?.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {theader?.map((col, colIndex) => (
                <StyledTableCell {...props} key={colIndex} align={textAlign}>
                  {row[col]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableCustom;
