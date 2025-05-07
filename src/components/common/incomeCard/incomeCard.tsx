import RoundChart from "@/components/common/roundChart/roundChart";
import React from "react";
import CustumProgress from "../custumProgress/custumProgress";

const IncomeCard = () => {
  return (
    <div className="incomeCard">
      <h2 className="main_heading">Quick Status</h2>
      <div className="income_head">
        <div className="chart_box">
          <h5>Monthly Income</h5>
          <div className="chart_container">
            <RoundChart />
            <div className="chart_value">
              <h5>85%</h5>
            </div>
          </div>
        </div>
        <div className="chart_box">
          <h5>Yearly Income</h5>
          <div className="chart_container">
            <RoundChart />
            <div className="chart_value">
              <h5>85%</h5>
            </div>
          </div>
        </div>
      </div>

      <ul>
        <li>
          <CustumProgress value={50} />
        </li>
        <li>
          <CustumProgress value={50} />
        </li>
      </ul>
    </div>
  );
};

export default IncomeCard;
