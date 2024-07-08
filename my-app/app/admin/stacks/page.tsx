import Container from "@/components/container";
import Label from "@/components/label";
import StacksTable from "./stacks-table";
import { getStacks } from "@/actions/stacks";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default async function Stacks() {
  const data = await getStacks();

  return (
    <Container className="p-6">
      <Label Size="h3" type="subheader" className="mb-4">
        Manage Stacks
      </Label>

      <Button color="primary" as={Link} href="stacks/new">
        New Stack
      </Button>

      <StacksTable data={data} />
    </Container>
  );
}
