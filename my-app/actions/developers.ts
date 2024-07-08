"use server";
import prisma from "@/prisma/db";
import { Developer, StacksOnDeveloper } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getDevelopers() {
  const developers = await prisma.developer.findMany({
    include: { StacksOnDeveloper: { select: { stack: true } } },
  });
  return developers;
}

export async function getDeveloper(id: number) {
  const developer = await prisma.developer.findUnique({
    where: { id: id },
    include: { StacksOnDeveloper: true },
  });

  return developer;
}

export async function deleteDeveloper(id: number) {
  await prisma.developer.delete({ where: { id } });
}

export async function updateDeveloper(
  id: number,
  developer: {
    name: string;
    photoUrl?: string;
    title?: string;
    stacks: string[];
  }
) {
  await prisma.developer.update({
    where: { id },
    data: {
      name: developer.name,
      photoUrl: developer.photoUrl,
      title: developer.title,
      StacksOnDeveloper: {
        createMany: {
          data: developer.stacks.map((x) => ({
            stackId: +x,
          })),
        },
      },
    },
  });
  redirect("/admin/developers");
}

export async function createDeveloper(developer: {
  name: string;
  photoUrl?: string;
  title?: string;
  stacks: string[];
}) {
  await prisma.developer.create({
    data: {
      name: developer.name,
      photoUrl: developer.photoUrl,
      title: developer.title,
      StacksOnDeveloper: {
        createMany: {
          data: developer.stacks.map((x) => ({
            stackId: +x,
          })),
        },
      },
    },
  });
  redirect("/admin/developers");
}
