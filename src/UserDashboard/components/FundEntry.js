import React, {useEffect} from "react";
import { Table, Tag, Space } from "antd";
import {data} from "../data/FundData"
import { fetchAllProjectFundPaginated } from "../../Redux/Actions/project-fund-mgt";
import { useDispatch, useSelector } from "react-redux";



const FundEntry = (props) => {
    const dispatch = useDispatch();
    const { funds } = useSelector((state) => state.projectFund)
    useEffect(() => {
        dispatch(fetchAllProjectFundPaginated());
    }, []);
    //console.log(funds)
    

      const columns = [
        {
          title: "Project",
          dataIndex: "project",
          key: "project",
          render: (projectTitle, record) => (
            <>
              <span>{record.projectTitle}</span>
              <br />
            </>
          ),
        },
        {
          title: "Amount",
          dataIndex: "amount",
          key: "amount",
          render: (amount) => (
            <>
              <span>{amount}</span>
            </>
          ),
        },
        {
          title: "Duration",
          dataIndex: "duration",
          key: "duration",
          render: (duration) => (
            <>
              <span>{duration} Months</span>
            </>
          ),
        },
        {
          title: "Returns",
          dataIndex: "returns",
          key: "returns",
          render: (roi) => (
            <>
              <span>{roi}</span>
              <br />
            </>
          ),
        },
        {
          title: "Start Date",
          dataIndex: "startDate",
          key: "startDate",
          render: (startDate) => (
            <>
              <span>{startDate}</span>
              <br />
            </>
          ),
        },
        {
          title: "Maturity Date",
          dataIndex: "maturityDate",
          key: "maturityDate",
          render: (maturityDate) => (
            <>
              <span>{maturityDate}</span>
              <br />
            </>
          ),
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (status) => (
            <>
              <span>{status ?? 'pending' }</span>
              <br />
            </>
          ),
        },
      ];
  return (
    <div>
      <Table 
      columns={columns} 
      dataSource={funds} 
      pagination={true}
    rowClassName="table-space"
      />
    </div>
  );
};

export default FundEntry;
