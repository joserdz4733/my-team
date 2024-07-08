import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { getDevelopers } from "@/actions/developers";
import DevelopersTable from "./developers-table";

export default async function Developers() {
  const data = await getDevelopers();

  return (
    <Container className="p-6">
      <Label Size="h3" type="subheader" className="mb-4">
        Manage Developers
      </Label>
      <Button color="primary" as={Link} href="developers/new">
        New Developer
      </Button>
      <DevelopersTable data={data} />
    </Container>
  );
}
