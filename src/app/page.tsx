import TiltedGridHeroDemo from "@/components/tilted-grid-hero-demo";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-6xl">
        <TiltedGridHeroDemo />
      </div>
    </main>
  );
}
