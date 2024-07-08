"use server";
import prisma from "@/prisma/db";
import { Stack } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getStacks() {
  const stacks = await prisma.stack.findMany();
  return stacks;
}

export async function getStack(id: number) {
  const stack = await prisma.stack.findUnique({ where: { id: id } });

  return stack;
}

export async function deleteStack(id: number) {
  await prisma.stack.delete({ where: { id } });
}

export async function updateStack(id: number, stack: Partial<Stack>) {
  await prisma.stack.update({ where: { id }, data: stack });
  redirect("/admin/stacks");
}

export async function createStack(name: string) {
  await prisma.stack.create({ data: { name } });
  redirect("/admin/stacks");
}
