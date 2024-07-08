import { createStack, getStack, updateStack } from "@/actions/stacks";
import Container from "@/components/container";
import Label from "@/components/label";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default async function NewStack() {
  async function newStack(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString() || "";

    await createStack(name);
  }

  return (
    <Container className="p-6">
      <Label Size="h3" type="subheader">
        New Stack
      </Label>
      <div className="py-5">
        <form action={newStack} className="flex flex-col gap-4">
          <Input type="text" name="name" label="Name" />
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
