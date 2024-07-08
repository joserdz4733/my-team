import { createApp, getApp, updateApp } from "@/actions/apps";
import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default async function NewApp({ params }: { params: { id: number } }) {
  async function newApp(formData: FormData) {
    "use server";

    const rawData = {
      name: formData.get("name")?.toString() || "",
      url: formData.get("url")?.toString() || "",
    };

    await createApp(rawData);
  }

  return (
    <Container>
      <Label Size="h3" type="subheader" className="p-6">
        New App
      </Label>
      <div className="py-5">
        <form action={newApp} className="flex flex-col gap-4">
          <Input type="text" name="name" label="Name" />
          <Input type="text" name="url" label="URL" />
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
