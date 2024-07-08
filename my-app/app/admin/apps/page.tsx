import { getApps } from "@/actions/apps";
import Container from "@/components/container";
import AppsTable from "./apps-table";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default async function Apps() {
  const data = await getApps();

  return (
    <Container className="p-6">
      <Label Size="h3" type="subheader" className="mb-4">
        Manage Apps
      </Label>
      <Button color="primary" as={Link} href="apps/new">
        New App
      </Button>
      <AppsTable data={data} />
    </Container>
  );
}
