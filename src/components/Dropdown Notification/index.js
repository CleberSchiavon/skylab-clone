import React, { useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { MdNotifications } from "react-icons/md";

const DropdownNotification = (props) => {
  const [dropDownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Dropdown isOpen={dropDownOpen} toggle={toggle}>
        <DropdownToggle>
          <MdNotifications size="30" color="#fff" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Você não tem notificações</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownNotification;
