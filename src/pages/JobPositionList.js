import React, { useState } from "react";
import { useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import { Button, Dropdown, GridColumn, Table } from "semantic-ui-react";

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect((jobPositions) => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data))
      .catch();
  });

  return (
    <div>
      <Dropdown
        placeholder="Job Position"
        size="small"
        fluid
        floating
        button
        multiple
        selection
        scrolling
        as={Button}
        options={jobPositions.map((jobPosition) => (
          <Button
            attached="right"
            size="mini"
            compact
            floated
            fluid
            color="twitter"
            key={jobPosition.jobPositionId}
          >
            {jobPosition.jobPositionName}
          </Button>
        ))}
      />
    </div>
  );
}
