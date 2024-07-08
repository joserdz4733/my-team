"use server";
import prisma from "@/prisma/db";
import { App } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getApps() {
  const apps = await prisma.app.findMany();
  return apps;
}

export async function getApp(id: number) {
  const app = await prisma.app.findUnique({ where: { id: id } });

  return app;
}

export async function deleteApp(id: number) {
  await prisma.app.delete({ where: { id } });
}

export async function updateApp(id: number, app: Partial<App>) {
  await prisma.app.update({ where: { id }, data: app });
  redirect("/admin/apps");
}

export async function createApp(app: Omit<App, "id">) {
  await prisma.app.create({ data: app });
  redirect("/admin/apps");
}
