import { Divider } from "@heroui/react";
import { Dot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-4 p-4 text-center text-sm">
      <Divider />
      <div className="flex flex-row items-center justify-center mt-2">
        <span>Jannick Tobler</span>
        <Dot />
        <span>2025</span>
      </div>
    </footer>
  );
}
