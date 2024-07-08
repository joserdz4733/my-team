"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { MenuItem } from "./nav";
import { Button } from "@nextui-org/button";

interface NavDropdownProps {
  item: MenuItem;
  index: number;
}

export default function NavDropdown({ item, index }: NavDropdownProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{item.title}</Button>
      </DropdownTrigger>
      <DropdownMenu items={item.subMenu}>
        {(ddItem) => (
          <DropdownItem key={`full-${ddItem.title}-${index}`} href={ddItem.url}>
            {ddItem.title}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
