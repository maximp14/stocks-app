import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/redux-hooks";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import NavBar from "../../../components/nav/NavBar";

import "./style.css";
import { getStockDetails } from "../../../store/stock/stock.action";
import StockChart from "./StockChart";

const StockDetailsPage: React.FC = () => {
  const [value, setValue] = React.useState("female");
  const dispatch = useAppDispatch();
  const { stockDetail } = useAppSelector((state) => state.stock);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  function handleGetDetail() {
    dispatch(getStockDetails());
  }

  console.log("value", stockDetail);
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
      <StockChart />
    </div>
  );
};

export default StockDetailsPage;
