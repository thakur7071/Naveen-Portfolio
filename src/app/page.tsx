import HomePage from "./HomePage";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const { view } = await searchParams;

  return <HomePage skipCurtain={view === "main"} />;
}
