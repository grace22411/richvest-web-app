import styled from "styled-components"

export const DashboardContainer = styled.div`
   // border:1px solid red;
    height:auto;
    margin-top:53px;
    .row{
        .col-md-3{
            margin-top:-40px;
        }
        .col-md-9{
            margin-top:-40px;
            padding:0;
            color:#32427c;
    h3{
        font-size:17px;
        font-weight:600;
        color:#32427c;
    }
    p{
        font-size:12px;
    }
            .row{
                margin-top:20px;
            }
        }
    }
`

export const TabContainer = styled.div`
    margin-top:30px;
    padding-right:45px;
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
          color: #999999;
          font-weight: 500;
          font-size: 14px;
          border-bottom:none;
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
          border-bottom:2px solid #32427c;
          .ant-tabs-tab-btn {
            color: #32427c;
            text-align: left;
          }
        }
      }
    }
`