import Image from "next/image";

export default function HomePageContent({
  title = "Invista sem medo. Aprenda simulando de verdade.",
  description = "Simule operações na bolsa com dados reais e sem riscos.",
  buttonTitle = "Comece agora gratuitamente",
}) {
  return (
    <main className="flex flex-col items-center gap-10 p-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-xl font-bold">{description}</h2>

      <button className="border  border-black text-xl font-bold rounded-xl w-[320px] h-[58px]">
        {buttonTitle}
      </button>
      <div className="w-full h-[400px]">
        <Image
          src={"/images/graph_landing_page"}
          width={400}
          height={400}
          alt={"graph"}
        />
      </div>
    </main>
  );
}
