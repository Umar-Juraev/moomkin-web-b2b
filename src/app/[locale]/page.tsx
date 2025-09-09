import { About, Banner, Partners, Questions, Results, Team,WorkingProcess } from "@/section";

export default function RootPage() {
  return (
    <main>
      <Banner />
      <About />
      <WorkingProcess />
      <Results />
      <Team />
      <Partners />
      <Questions />
    </main>
  );
}