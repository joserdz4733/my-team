"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Stack } from "@prisma/client";

export default function StackSelect({
  data,
  defaultValue,
}: {
  data: Stack[];
  defaultValue?: string[];
}) {
  console.log(defaultValue);
  return (
    <Select
      name="stacks"
      label="Stacks"
      placeholder="Select a stack"
      selectionMode="multiple"
      className="max-w-xs"
      fullWidth
      defaultSelectedKeys={defaultValue}
    >
      {data.map((x) => (
        <SelectItem key={x.id}>{x.name}</SelectItem>
      ))}
    </Select>
  );
}
