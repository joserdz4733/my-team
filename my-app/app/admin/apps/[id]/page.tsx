import { getApp, updateApp } from "@/actions/apps";
import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default async function EditApp({ params }: { params: { id: number } }) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid app id");

  const app = await getApp(idAsNumber);

  async function editApp(formData: FormData) {
    "use server";

    const rawData = {
      name: formData.get("name")?.toString() || "",
      url: formData.get("url")?.toString() || "",
    };

    await updateApp(idAsNumber, rawData);
  }

  return (
    <Container>
      <Label Size="h3" type="subheader" className="p-6">
        Edit App
      </Label>
      <div className="py-5">
        <form action={editApp} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label="Name"
            defaultValue={app?.name}
          />
          <Input type="text" name="url" label="URL" defaultValue={app?.url} />
          <div className="ml-auto">
            <Button color="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
