import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span>HOLA MUNDO</span>
      <Link href={"/about"}>About</Link>
    </main>
  );
}
