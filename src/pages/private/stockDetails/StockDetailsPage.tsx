import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { Autocomplete, Box, Button, Tab, Tabs, TextField } from "@mui/material";
import NavBar from "../../../components/nav/NavBar";

import "./style.css";
import {
  getStockDetails,
  setSelectedInterval,
} from "../../../store/stock/stock.action";
import LineChart from "./charts/LineChart";
import ColumnChart from "./charts/ColumnChart";
import { interval } from "../../../utils/interval-options";

const StockDetailsPage: React.FC = () => {
  const [tabs, setTabs] = useState(0);
  const dispatch = useAppDispatch();
  const { stockHigh, stockLow, stockVolume, selectedInterval } = useAppSelector(
    (state) => state.stock
  );

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabs(newValue);
  };

  function handleGetDetail() {
    dispatch(getStockDetails());
  }

  function tabToReturn() {
    switch (tabs) {
      case 0:
        return (
          <>
            {stockHigh.length > 0 && (
              <LineChart dataHigh={stockHigh} dataLow={stockLow} />
            )}
          </>
        );
        break;
      case 1:
        return (
          <>
            <ColumnChart dataVolume={stockVolume} />
          </>
        );
        break;
      default:
        break;
    }
  }

  console.log("selected interval", selectedInterval);

  return (
    <div>
      <NavBar />
      <div className="stock_detail__container">
        <div className="stock_detail__autocomplete">
          <Autocomplete
            placeholder="Autocompletar"
            value={selectedInterval}
            options={interval}
            sx={{ width: 300 }}
            getOptionLabel={(option: any) => option.name}
            onChange={(event: any, newValue: any) => {
              dispatch(setSelectedInterval(newValue));
            }}
            renderInput={(params: any) => (
              <TextField label="Autocomplete" {...params} />
            )}
          />

          {selectedInterval && (
            <Button variant="outlined" onClick={handleGetDetail}>
              Generate Graph
            </Button>
          )}
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={tabs} onChange={handleChangeTabs} centered>
          <Tab label="Line Chart" />
          <Tab label="Bar Chart" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>{tabToReturn()}</Box>
    </div>
  );
};

export default StockDetailsPage;
