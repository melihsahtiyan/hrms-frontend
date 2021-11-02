import React from "react";
import JobSeekerService from "../services/jobSeekerService";
import { Table, Icon, Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect((jobSeekers) => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data.data))
      .catch();
  });
  
  return (
  <div>
      <Table inverted celled attached="top">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Surname</Table.HeaderCell>
            <Table.HeaderCell>Identity Number</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
            <Table.HeaderCell>Job Status</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.jobSeekerId}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell textAlign="right">{jobSeeker.lastName}</Table.Cell>
              <Table.Cell textAlign="right">{jobSeeker.identityNumber}</Table.Cell>
              <Table.Cell textAlign="right">{jobSeeker.birthDate}</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>{jobSeeker.user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
  </div>
  );
}
