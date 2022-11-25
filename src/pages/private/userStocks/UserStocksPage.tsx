import { useEffect, useState } from "react";
import NavBar from "../../../components/nav/NavBar";
import StocksTable from "./StocksTable";
import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import {
  addSymbol,
  deteleStock,
  getAutocompleteData,
  getUserStocks,
  setShowMessage,
} from "../../../store/stock/stock.action";
import "./style.css";
import {
  Alert,
  Autocomplete,
  Button,
  createFilterOptions,
  TextField,
} from "@mui/material";
import { StockSymbol } from "../../../store/stock/stock.type";

const UserStocksPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { autocompletedata, message, symbolList } = useAppSelector(
    (state) => state.stock
  );
  const [selectedSymbol, setSeletectedSymbol] = useState<StockSymbol>();

  useEffect(() => {
    if (autocompletedata.length === 0) {
      dispatch(getAutocompleteData());
    }
    dispatch(getUserStocks());
  }, []);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(setShowMessage(null));
      }, 3000);
    }
  }, [message]);

  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (options: any, state: any) => {
    return defaultFilterOptions(options, state).slice(0, 10);
  };

  function handleAddSymbol() {
    if (selectedSymbol) dispatch(addSymbol(selectedSymbol));
  }

  function handleClickOnSymbol() {
    console.log("hice click");
  }

  function handleDelete(symbol: any) {
    dispatch(deteleStock(symbol));
    dispatch(getUserStocks());
  }

  return (
    <div className="stock__container">
      <NavBar />

      <div className="stock__autocomplete">
        <Autocomplete
          placeholder="Autocompletar"
          filterOptions={filterOptions}
          value={selectedSymbol}
          options={autocompletedata ? autocompletedata : []}
          sx={{ width: 300 }}
          getOptionLabel={(option: any) => option["symbol"] || ""}
          onChange={(event: any, newValue: any) => {
            setSeletectedSymbol(newValue);
          }}
          renderInput={(params: any) => (
            <TextField {...params} label="Autocompletar" />
          )}
        />
        <Button variant="outlined" onClick={handleAddSymbol}>
          Agregar símbolo
        </Button>
      </div>

      <div className="stock__table">
        <StocksTable
          symbolList={symbolList}
          handleSymbol={handleClickOnSymbol}
          handleDelete={handleDelete}
        />
      </div>
      {message && <Alert severity={message.severity}>{message.text}</Alert>}
    </div>
  );
};

export default UserStocksPage;
