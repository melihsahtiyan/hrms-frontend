import React from "react";
import { Icon, Menu, Segment, Sidebar, Table } from "semantic-ui-react";
import AbilityList from "./AbilityList";
import JobPositionList from "./JobPositionList";

export default function Category() {
  return (
    <div>
      <Sidebar as={Menu} inverted visible vertical children width="thin">
        <Menu.Item>
          <AbilityList />
        </Menu.Item>
        <Menu.Item>
          <JobPositionList />
        </Menu.Item>
        <Menu.Item>Channels</Menu.Item>
      </Sidebar>
    </div>
  );
}
