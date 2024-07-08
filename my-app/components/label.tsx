import { tv, type VariantProps } from "tailwind-variants";

const label = tv({
  base: "",
  variants: {
    type: {
      header: "font-bold text-6xl uppercase",
      subheader: "font-bold text-3xl",
      subtle: "font-bold uppercase",
    },
  },
});

type LabelVariants = VariantProps<typeof label>;

interface LabelProps extends LabelVariants {
  className?: string;
  Size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
}

export default function Label({ Size, children, ...rest }: LabelProps) {
  return <Size className={label(rest)}>{children}</Size>;
}
