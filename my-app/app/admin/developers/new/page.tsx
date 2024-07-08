import { createDeveloper } from "@/actions/developers";
import { getStacks } from "@/actions/stacks";
import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import StackSelect from "./stack-select";

export default async function NewDeveloper() {
  const stacks = await getStacks();

  async function editApp(formData: FormData) {
    "use server";

    const rawData = {
      name: formData.get("name")?.toString() || "",
      photoUrl: formData.get("photoUrl")?.toString() || "",
      stacks: formData.getAll("stacks") as string[],
    };

    await createDeveloper(rawData);
  }

  return (
    <Container>
      <Label Size="h3" type="subheader" className="p-6">
        New Developer
      </Label>
      <div className="py-5">
        <form action={editApp} className="flex flex-col gap-4">
          <Input type="text" name="name" label="Name" />
          <Input type="text" name="photoUrl" label="Photo Url" />
          <Input type="text" name="title" label="Title" />
          <StackSelect data={stacks} />
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
