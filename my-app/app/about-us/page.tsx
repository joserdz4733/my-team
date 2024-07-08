import { getDevelopers } from "@/actions/developers";
import Container from "@/components/container";
import Label from "@/components/label";
import DeveloperCard from "./developer-card";

export default async function AboutUs() {
  const developers = await getDevelopers();

  return (
    <>
      <Container>
        <Label Size="h5" type="subtle" className="p-6 text-faded-red">
          About us
        </Label>
        <Label Size="h1" type="header" className="p-6">
          Clinical Developer Team
        </Label>
        <div className="flex">
          <div className="flex-1">
            <Label Size="h3" type="subheader" className="p-6">
              Our team of dedicated developers brings a wealth of technical
              skill, creativity, and passion to every project.
            </Label>
          </div>
          <div className="flex-1" />
        </div>
        <Label Size="h5" type="subtle" className="p-6 text-faded-red">
          our team
        </Label>
        <div className="flex justify-around my-20">
          {developers.map((dev) => (
            <DeveloperCard data={dev} key={`developer-${dev.id}`} />
          ))}
        </div>
      </Container>
      <div className="bg-faded-red py-10">
        <Container>
          <Label Size="h5" type="subtle" className="p-6">
            our mission
          </Label>
          <Label Size="h1" type="header" className="p-6">
            With a commitment to excellence and a drive for continuous
            improvement, we deliver solutions that exceed expectations.
          </Label>
        </Container>
      </div>
    </>
  );
}
