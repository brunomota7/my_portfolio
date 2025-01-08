import type { Metadata } from "next";
import "../../../styles/globals.css";


export const metadata: Metadata = {
  title: "Bruno Mota - Portfólio | Main",
  description: "Full Sack Developer",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
