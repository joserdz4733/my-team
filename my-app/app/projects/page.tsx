import { getApps } from "@/actions/apps";
import Container from "@/components/container";
import Label from "@/components/label";
import { Link } from "@nextui-org/link";

export default async function Projects() {
  const apps = await getApps();
  return (
    <Container className="p-6">
      <Label Size="h5" type="subtle" className=" text-dark-blue">
        projects
      </Label>
      <Label Size="h1" type="header" className="py-10">
        Our Clinical Apps
      </Label>
      <div className="flex py-10">
        {apps.map((app) => (
          <Link
            showAnchorIcon
            href={app.url}
            key={`app-${app.id}`}
            color="text-dark-blue"
            className="text-3xl"
          >
            {app.name}
          </Link>
        ))}
      </div>
    </Container>
  );
}
