import React from "react";
import { Menu, Dropdown } from "antd";
import { Link, useHistory, Redirect } from "react-router-dom";
import { DownOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";
import { logoutService } from "../../Redux/Actions/auth";

const style = {
  color: "#32427c",
  fontSize: "12px",
  fontWeight: "400",
};

const menuProile = (
  <Menu>
    <Menu.Item key="0">
      <Link style={style} to="/profile">
        Take Phote
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link style={style} to="/">
        Upload Photo
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link style={style} to="/">
        Remove Photo
      </Link>
    </Menu.Item>
  </Menu>
);

export function DropdownMenu() {
  const history = useHistory();
  const logOut = () => {
    <Redirect to="/" />;
    logoutService();
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link style={style} to="/profile">
          <UserOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link style={style} onClick={() => logOut()} to="#">
          Sign Out
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <DownOutlined style={{ color: "#fff", fontWeight: "700" }} />
        </a>
      </Dropdown>
    </>
  );
}

export function DropdownMenuProfile() {
  return (
    <>
      <Dropdown overlay={menuProile} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <EditOutlined style={{ color: "#fff", fontWeight: "700" }} />
        </a>
      </Dropdown>
    </>
  );
}
