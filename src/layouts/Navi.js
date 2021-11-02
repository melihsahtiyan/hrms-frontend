import React from "react";
import { Button, Input, Menu, Segment } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Segment >
        <Menu color="blue" inverted fixed="top">
          <Menu.Item>Job Seekers</Menu.Item>
          <Menu.Item>Job Advertisements</Menu.Item>
          <Menu.Item>Companies</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item color="black">
              <Input placeholder="Search any on hrms..."></Input>
            </Menu.Item>
            <Menu.Item>
              <Button color="grey" size="small">
                Profil
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
}
