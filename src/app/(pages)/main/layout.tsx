import type { Metadata } from "next";
import "../../../styles/globals.css";
import Particles from "@/components/ui/particles";


export const metadata: Metadata = {
  title: "Bruno Mota - Portfólio | Main",
  description: "Full Sack Developer",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="fixed inset-0 z-1">
        <Particles id="tsparticles-global" />
      </div>
      {children}
    </div>
  );
}
