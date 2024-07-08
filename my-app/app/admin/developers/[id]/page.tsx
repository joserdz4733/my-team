import { getDeveloper, updateDeveloper } from "@/actions/developers";
import { getStacks } from "@/actions/stacks";
import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import StackSelect from "../new/stack-select";

export default async function EditDeveloper({
  params,
}: {
  params: { id: number };
}) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid app id");
  const stacks = await getStacks();
  const developer = await getDeveloper(idAsNumber);

  async function editApp(formData: FormData) {
    "use server";

    const rawData = {
      name: formData.get("name")?.toString() || "",
      photoUrl: formData.get("photoUrl")?.toString() || "",
      stacks: formData.getAll("stacks") as string[],
    };

    await updateDeveloper(idAsNumber, rawData);
  }

  return (
    <Container>
      <Label Size="h3" type="subheader" className="p-6">
        New Developer
      </Label>
      <div className="py-5">
        <form action={editApp} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label="Name"
            defaultValue={developer?.name}
          />
          <Input
            type="text"
            name="photoUrl"
            label="Photo Url"
            defaultValue={developer?.photoUrl || ""}
          />
          <Input
            type="text"
            name="title"
            label="Title"
            defaultValue={developer?.title || ""}
          />
          <StackSelect
            data={stacks}
            defaultValue={developer?.StacksOnDeveloper.map((x) =>
              x.stackId.toString()
            )}
          />
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
