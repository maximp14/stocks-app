import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
} from "@mui/material";
import NavBar from "../../../components/nav/NavBar";

import "./style.css";
import { getStockDetails } from "../../../store/stock/stock.action";
import LineChart from "./charts/LineChart";
import Test from "./Test";
import ColumnChart from "./charts/ColumnChart";

const StockDetailsPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [tabs, setTabs] = useState(0);
  const dispatch = useAppDispatch();
  const { stockHigh, stockLow, stockVolume } = useAppSelector(
    (state) => state.stock
  );

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabs(newValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
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

  return (
    <div>
      <NavBar />
      <div className="stock_detail__container">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="realtime"
            control={<Radio />}
            label="Tiempo real"
          />
          <FormControlLabel
            value="historic"
            control={<Radio />}
            label="Histórico"
          />
        </RadioGroup>
        <div className="detail__button">
          <Button variant="outlined" onClick={handleGetDetail}>
            Graficar
          </Button>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={tabs} onChange={handleChangeTabs} centered>
          <Tab label="Line Chart" />
          <Tab label="Bar Chart" />
          <Tab label="Unknow Chart" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>{tabToReturn()}</Box>
    </div>
  );
};

export default StockDetailsPage;
