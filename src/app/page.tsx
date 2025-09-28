import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col sm:items-center items-start">
        <h1 className="text-4xl font-bold">Insanity App</h1>
        <p className="text-lg">The most insane app in the world</p>
      </main>
    </div>
  );
}
