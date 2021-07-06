import styled from "styled-components"

//ProjectFundAdmin
export const PageTitle = styled.div`
    h1{
        font-size: 26px;
        color:#32427C;
    }
`
export const DateFilter = styled.div`
    display: flex;
    margin-top:50px;
    input,select{
        background-color: #F9F9F9;
        border:1px solid #E6E6E6;
        border-radius: 5px;
        height:40px;
        color:#8F9ABC;
        padding:10px;
        outline: none !important;
        margin:0;
    }
    button{
        background-color: #04048C;
            color:#fff;
            border-radius: 5px;
            height: 40px;
            border:none;
    }
    label{
        font-size:18px;
        color:#04048C;
    }
    
    .filter-one{
        width:18%;
        input{
            width:90%;
        }
    }
    .search{
        width:46%;
        input{
            width:65%;
        }
        select{
            color:#32427C;
            font-weight: 500;
        }
        button{
            width:10%;
        }
    }
    .download{
        width:17%;
        button{
            width:100%;
            
        }
    }

`

export const FundContainer = styled.div`
    width:100%;
    margin-top: 50px;
    .ant-tabs-nav-wrap {
    width: 270px;
    .ant-tabs-nav-list {
      width: 100%;
      border-bottom: none;
      margin-bottom: 0 !important;
      border-radius: 6px;
      background-color: #fff;
      justify-content: space-between;
      .ant-tabs-tab {
        color: #32427c;
        font-weight: 400;
        font-size: 14px;
        border-bottom: none;
        width: auto;
      }
      .ant-tabs-tab:nth-child(4) {
        margin-right: 0;
      }
      .ant-tabs-ink-bar {
        background-color: #000;
        margin-bottom: -2px;
        display: none;
      }
      .ant-tabs-tab-active {
        border-bottom: 1px solid #32427c;
        .ant-tabs-tab-btn {
          color: #32427c;
          font-weight: 500;
          text-align: left;
        }
      }
    }
  }
  .ant-table {
    background-color: transparent !important;
    padding: 20px 0 0 0;
    overflow-x: auto;
    width: 100%;
    font-size: 0.8em;
    color: #32427c;
    .pending{
        color:#FEA803;
    }
    
  }
  table {
    border-spacing: 0px 5px !important;
    background-color: transparent !important;
    .ant-table-thead {
      tr {
        th {
          background-color: #f1f5ff;
          font-size: 1em;
          color: #32427c;
        }
      }
    }
  }

  .table-space {
    box-shadow: 0 2px 4px rgba(#525252, 0.12);
    width: 100%;
    background-color: #f4f8fe48;
  }
  .table-space:nth-child(2n) {
    background-color: #f1f5ff;
  }
`