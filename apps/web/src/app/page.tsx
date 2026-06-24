import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ backgroundColor: "#3d3df2" }}
    >
      <Image src="/dog.svg" alt="dog" width={160} height={160} />
      <h1
        className="text-7xl text-black font-[family-name:var(--font-annie)]"
      >
        gttp
      </h1>
      <p className="max-w-md text-black font-[family-name:var(--font-noto-sans)]">
        A personal project building an HTTP server from scratch in Go,
        currently with an in-memory user store. The goal is to eventually
        write the HTTP/1.1 parser itself from raw TCP, without relying on
        net/http or any external libraries.
      </p>
      <div className="flex flex-row gap-2 font-[family-name:var(--font-noto-sans)] text-black text-sm">
        <div className="flex items-center gap-2">
          <span className="border border-black rounded-full px-3 py-1">GET</span>
          <span>/users/{`{id}`}</span>
        </div>
        <span className="text-3xl">|</span>
        <div className="flex items-center gap-2">
          <span className="border border-black rounded-full px-3 py-1">POST</span>
          <span>/users</span>
        </div>
        <span className="text-3xl">|</span>
        <div className="flex items-center gap-2">
          <span className="border border-black rounded-full px-3 py-1">DELETE</span>
          <span>/users/{`{id}`}</span>
        </div>
      </div>
      <p className="text-black font-[family-name:var(--font-annie)] text-lg">
        thanks for visiting
      </p>
    </main>
  );
}