import axios from "axios";

export default class AbilityService {
  getAbilities() {
    return axios.get("http://localhost:8080/api/abilities/getAll");
  }

//   getAbilityContains() {
//     return axios.get("http://localhost:8080/api/abilities/getAllByDescriptionContains?descrpition=");
//   }
}
