import RoleList from "./RoleList";
import { research } from "../data/profile";

export default function Research() {
  return (
    <RoleList
      id="research"
      theme="dark"
      heading="Research"
      note="Where the engineering turns into open questions."
      items={research}
    />
  );
}
