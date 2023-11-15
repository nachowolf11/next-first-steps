import { Navbar } from "@/components/server";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
}