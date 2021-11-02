import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import AbilityService from "../services/abilityService";

export default function AbilityList() {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    let abilityService = new AbilityService();
    abilityService
      .getAbilities()
      .then((result) => setAbilities(result.data.data))
      .catch();
  });

  return (
    <div>
      <Dropdown
        placeholder="Ability"
        fluid
        floating
        button
        multiple
        selection
        options={abilities.map((ability) => (
          <Button
            attached
            size="mini"
            compact
            floated
            fluid
            color="twitter"
            key={ability.abilityId}
          >
            {ability.description}
          </Button>
        ))}
      />
    </div>
  );
}
