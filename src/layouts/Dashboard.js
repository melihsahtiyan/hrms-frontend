import React from "react";
import { Grid, Menu, Sidebar, Table } from "semantic-ui-react";
import AbilityList from "../pages/AbilityList";
import Category from "../pages/Category";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobSeekerList from "../pages/JobSeekerList";

export default function Dashboard() {
  return (
    <div>
      <Table inverted fixed padded>
        <Table.Body inverted vertical>
          <Table.Row verticalAlign="bottom">
            <Table.Cell verticalAlign="bottom" textAlign="center" width={1} content={Sidebar}>
              <Category />
            </Table.Cell>
            <Table.Cell active verticalAlign="middle" width={15} content={Table}>
              <JobAdvertisementList />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
