import { getStack, updateStack } from "@/actions/stacks";
import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default async function EditStack({
  params,
}: {
  params: { id: number };
}) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid stack id");

  const app = await getStack(idAsNumber);

  async function editApp(formData: FormData) {
    "use server";

    const rawData = {
      name: formData.get("name")?.toString() || "",
    };

    await updateStack(idAsNumber, rawData);
  }

  return (
    <Container>
      <Label Size="h3" type="subheader" className="p-6">
        Edit Stack
      </Label>
      <div className="py-5">
        <form action={editApp} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label="Name"
            defaultValue={app?.name}
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
