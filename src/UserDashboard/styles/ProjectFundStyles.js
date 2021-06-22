import styled from "styled-components";

export const TotalFund = styled.div`
  width: 100%;
  height: auto;
  //border:1px solid red;
  padding-bottom: 40px;
  display: grid;
  z-index: -9999;
  grid-template: 0.5fr / 1fr;
  place-items: center;
  * {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }
  .underneath-head {
    width: 95%;
    height: 110px;
    background: linear-gradient(#fe5f75, #fc9842);
    border-radius: 15px;
    z-index: -1;
  }
  .text-contained {
    width: 100%;
    height: 100px;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #191970;
    border-radius: 10px 10px 5px 5px;
    margin: -10px auto 0 auto;
    color: #fff;
    h2 {
      font-size: 18px;
      color: #fff;
    }
  }
`;

export const CreateNewPlan = styled.div`
  width: 250px;
  height: 150px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5783e620;
  border-radius: 20px;
  i {
    font-size: 20px;
    margin-bottom: 15px;
  }
  i,
  p {
    color: #5783e6;
  }
`;
export const TotalFundEntry = styled.div`
  margin-top: 40px;
  .ant-table {
    background-color: transparent !important;
    padding: 20px 0 0 0;
    overflow-x: auto;
    width: 100%;
    font-size: 0.8em;
    color: #32427c;
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
  .table-space:nth-child(2) {
    background-color: #f1f5ff;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-top: 20px;
  }
`;
export const FirstStep = styled.div`
  padding: 15px 20px;
  text-align: center;
  .title {
    text-align: center;
    img {
      height: 50px;
      width: 50px;
    }
    h3 {
      font-size: 18px;
      margin-top: 10px;
    }
  }
  form {
    margin-top: 40px;
    text-align: left;
    .form-group {
      margin-bottom: 20px;
      label {
        font-size: 0.9em;
        font-weight: 500;
        color: #32427c;
      }
      .durationHead {
        display: flex;
        p {
          margin-left: auto;
          font-size: 0.8em;
          color: #fc9247;
        }
      }
      input {
        border: 1px solid #d8e1f8;
        border-radius: 10px;
        outline: none !important;
      }
      input[value^="13%"] {
        font-size: 15px;
        color: #32427c;
      }
    }
  }
  .summary {
    width: 100%;
    height: 200px;
    background-color: #5783e630;
    margin-top: 30px;
    padding: 2.5em;
    display: flex;
    .total {
      width: 8em;
      height: 8em;
      border: 4px solid #191970;
      border-radius: 100%;
      border-right-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        color: #fc9247;
        font-size: 1.5em;
      }
    }
    .text {
      width: 60%;
      padding: 0.5em;
      margin-left: auto;
      text-align: left;
      p {
        font-size: 0.9em;
        color: #32427c;
      }
      span {
        color: #fc9247;
      }
    }
  }

  .container-fluid {
    background-color: #5783e630;
    padding: 25px;
    border-radius: 20px;
    margin-top: 20px;
    h4,
    h3 {
      font-size: 13px;
      color: #32427c;
    }
    h3 {
      font-size: 15px;
    }
    .row {
      .col-md-6 {
        text-align: left;
        margin-top: 20px;
        p {
          font-size: 13px;
          margin: 0;
        }
      }
    }
  }

  button {
    margin-top: 30px;
    border: none;
    background-color: #191970;
    color: #fff;
    border-radius: 10px;
    padding: 5px 20px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    padding: 15px 0;
    .summary {
      padding: 1em;
      height: auto;
      .total {
        height: 6em;
        width: 6em;
        h2 {
          font-size: 1em;
        }
      }
      .text {
        font-size: 0.7em;
      }
    }
  }
`;
