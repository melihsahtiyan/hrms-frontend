import React from "react";
import { Table, Icon, Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvetisementService = new JobAdvertisementService();
    jobAdvetisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data))
      .catch();
  });

  return (
    <div>
      <Table inverted celled attached="top">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Needed Employer</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
            <Table.HeaderCell>Expiration Date</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Education Level</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Ability</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.jobAdvertisementId}>
              <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
              <Table.Cell textAlign="right">{jobAdvertisement.salary}</Table.Cell>
              <Table.Cell textAlign="center">{jobAdvertisement.neededEmployee}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.expirationDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city}</Table.Cell>
              <Table.Cell>{jobAdvertisement.educationLevel}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPositionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
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
