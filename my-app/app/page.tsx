import Container from "@/components/container";
import Label from "@/components/label";
import Image from "next/image";
import constellation from "../public/constellation.svg";

export default function Home() {
  return (
    <>
      <Container>
        <Label Size="h5" type="subtle" className="p-6 text-dark-blue">
          who we are
        </Label>
        <Label Size="h1" type="header" className="p-6">
          Clinical Developer Team
        </Label>
        <div className="flex py-10">
          <div className="flex-1">
            <Label Size="h3" type="subheader" className="p-6">
              We love challenges and we love to develop with the most
              cutting-edge technologies.
            </Label>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image src={constellation} alt="constellation" />
          </div>
        </div>
      </Container>
      <div className="bg-dark-blue py-10">
        <Container>
          <Label Size="h5" type="subtle" className="p-6">
            our mission
          </Label>
          <Label Size="h1" type="header" className="p-6">
            Your tech contact for the development of integrated software
            solutions
          </Label>
        </Container>
      </div>
    </>
  );
}
