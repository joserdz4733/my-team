import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Developer } from "@prisma/client";

export default function DeveloperCard({
  data,
}: {
  data: {
    StacksOnDeveloper: {
      stack: {
        id: number;
        name: string;
      };
    }[];
  } & {
    id: number;
    name: string;
    photoUrl: string | null;
    title: string | null;
  };
}) {
  const { name, title, photoUrl, StacksOnDeveloper } = data;
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
        {title && <p className="text-tiny uppercase font-bold">{title}</p>}
        {StacksOnDeveloper.length > 0 && (
          <small className="text-default-500">
            {StacksOnDeveloper.map((x) => x.stack.name).join(", ")}
          </small>
        )}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={
            photoUrl ||
            "https://media.istockphoto.com/id/1298261537/es/vector/marcador-de-posici%C3%B3n-del-icono-de-la-cabeza-del-perfil-del-hombre-en-blanco.jpg?s=2048x2048&w=is&k=20&c=UBwkyOUjTXXzduvO5Z1HJKOoJ4B9ciFQXfbEf4dmRr4="
          }
          fallbackSrc="https://media.istockphoto.com/id/1298261537/es/vector/marcador-de-posici%C3%B3n-del-icono-de-la-cabeza-del-perfil-del-hombre-en-blanco.jpg?s=2048x2048&w=is&k=20&c=UBwkyOUjTXXzduvO5Z1HJKOoJ4B9ciFQXfbEf4dmRr4="
          width={270}
        />
      </CardBody>
    </Card>
  );
}
