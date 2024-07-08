import { tv, type VariantProps } from "tailwind-variants";

const container = tv({
  base: "max-w-[1200px] mx-auto px-8",
});

type ContainerVariants = VariantProps<typeof container>;

interface ContainerProps extends ContainerVariants {
  className?: string;
  children?: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return <div className={container(props)}>{props.children}</div>;
}
