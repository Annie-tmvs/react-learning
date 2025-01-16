import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { TableType } from "./Table.type";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)((props: TableType) => {
  const { headerheight, headerbackgroud, headercolor, textAlign } = props;
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: headerbackgroud,
      color: headercolor,
      lineHeight: headerheight,
      textAlign: textAlign,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  };
});

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
