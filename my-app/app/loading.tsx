import { Progress } from "@nextui-org/progress";

export default function Loading() {
  return (
    <Progress
      size="sm"
      isIndeterminate
      label="Loading..."
      aria-label="Loading..."
      className="max-w-md"
    />
  );
}
