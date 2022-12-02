import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StockSymbol } from "../../../store/stock/stock.type";
import { Button } from "@mui/material";

interface StockTableProps {
  symbolList: StockSymbol[];
  handleSymbol: (symbol: any) => void;
  handleDelete: (symbol: any) => void;
}

const StocksTable: React.FC<StockTableProps> = ({
  symbolList,
  handleSymbol,
  handleDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {symbolList.map((symbol) => (
            <TableRow
              key={symbol.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Button variant="text" onClick={() => handleSymbol(symbol)}>
                  {symbol.symbol}
                </Button>
              </TableCell>
              <TableCell align="right">{symbol.name}</TableCell>
              <TableCell align="right">{symbol.currency}</TableCell>
              <TableCell align="right">
                <Button variant="text" onClick={() => handleDelete(symbol)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StocksTable;
