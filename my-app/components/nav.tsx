import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NavDropdown from "./nav-dropdown";

export interface MenuItem {
  title: string;
  url?: string;
  subMenu?: Array<MenuItem>;
}

export default function Nav() {
  const menuItems: Array<MenuItem> = [
    { title: "Meet the team", url: "/about-us" },
    { title: "Projects", url: "/projects" },
    { title: "Contact Us", url: "/contact-us" },
    {
      title: "Admin",
      subMenu: [
        { title: "Apps", url: "/admin/apps" },
        { title: "Stacks", url: "/admin/stacks" },
        { title: "Developers", url: "/admin/developers" },
      ],
    },
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden lg:pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="pr-10">
          <Link href="/" className="font-bold text-inherit">
            ACME
          </Link>
        </NavbarBrand>

        {menuItems.map((item, index) =>
          !item.subMenu ? (
            <NavbarItem key={`full-${item.title}-${index}`}>
              <Link color="foreground" href={item.url}>
                {item.title}
              </Link>
            </NavbarItem>
          ) : (
            <NavDropdown
              index={index}
              item={item}
              key={`full-${item.title}-${index}`}
            />
          )
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`mobile-${item.title}-${index}`}>
            <Link className="w-full" color="foreground" href="#">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
