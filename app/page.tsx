import Hello from "./components/Hello";

export default function Home() {
  console.log("What am I doing here? --SERVER");
  return (
    <>
      <h1 className="text-center">Welcome to next.js 15</h1>
      <Hello />
    </>
  );
}
