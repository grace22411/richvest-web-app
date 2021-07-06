import React, {useEffect} from "react";
import { Table, Tag, Space } from "antd";
import {data} from "../../../data/FundData"



const TotalFund = () => {
    
      const columns = [
        {
            title: "First name",
            dataIndex: "firstName",
            key: "firstName",
            
          },
          {
            title: "Last name",
            dataIndex: "lastName",
            key: "lastName",
            
          },
          {
            title: "Email",
            dataIndex: "emailAddress",
            key: "emailAddress",
            
          },
          {
            title: "Phone",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            
          },
          
        {
          title: "Project",
          dataIndex: "project",
          key: "project",
          
        },
        {
          title: "Amount",
          dataIndex: "amount",
          key: "amount"
        },
        {
          title: "Start Date",
          dataIndex: "startDate",
          key: "startDate"
        },
        {
          title: "Maturity Date",
          dataIndex: "maturityDate",
          key: "maturityDate"
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (status) => (
            <>
              <span>{<span style={{color:'#1EAE98'}}>{status = 'Active'}</span> ?? <span style={{color:'#FEA803'}}>{status = 'pending'}</span> }</span>
              <br />
            </>
          ),
        },
        {
            title: "",
            dataIndex: "",
            key: "",
            render: (status) => (
              <>
                <span><i class="fas fa-ellipsis-v"></i></span>
              </>
            ),
          },
      ];
  return (
    <div>
      <Table 
      columns={columns} 
      dataSource={data}
      pagination={true}
    rowClassName="table-space"
      />
    </div>
  );
};

export default TotalFund;
