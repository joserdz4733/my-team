"use client";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Stack } from "@prisma/client";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Link } from "@nextui-org/link";
import { deleteStack } from "@/actions/stacks";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export default function StacksTable({ data }: { data: Array<Stack> }) {
  const router = useRouter();

  const renderCell = useCallback(
    (data: any, columnKey: any) => {
      const cellValue = data[columnKey];

      switch (columnKey) {
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit app">
                <Link
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  href={`/admin/stacks/${data.id}`}
                >
                  <IconEdit />
                </Link>
              </Tooltip>
              <Tooltip color="danger" content="Delete app">
                <form
                  action={async () => {
                    await deleteStack(data.id);
                    router.refresh();
                  }}
                >
                  <Button
                    isIconOnly
                    className="text-lg text-danger cursor-pointer active:opacity-50"
                    type="submit"
                  >
                    <IconTrash />
                  </Button>
                </form>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [router]
  );

  return (
    <Table aria-label="Example table with dynamic content" className="py-8">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
