import { alumniType } from "../Alumni/alumni";
import { eventType } from "./Event/eventType";
import { domainType } from "./OurTeam/domainType";
import { membersType } from "./OurTeam/membersType";

export const schema = {
  types: [
    eventType , membersType , domainType , alumniType
  ],
}
