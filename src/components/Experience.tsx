import RoleList from "./RoleList";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <RoleList
      id="experience"
      theme="light"
      heading="Experience"
      note="Two years, two companies, one revenue-critical service owned end to end."
      items={experience}
    />
  );
}
