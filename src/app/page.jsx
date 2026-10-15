import Header from "./_components/header";
import Frames from "./_components/frames";
export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-[url('/background-abstrato.png')] bg-cover bg-center flex flex-col justify-start md:justify-center items-center ">
        <Header/>
        <Frames/>
      </main>
    </>
  );
}
