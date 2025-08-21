import Image from "next/image";

export default function HomePageContent({
  title = "Invista sem medo. Aprenda simulando de verdade.",
  description = "Simule operações na bolsa com dados reais e sem riscos.",
  buttonTitle = "Comece agora gratuitamente",
}) {
  return (
    <main className="flex flex-col gap-[48px] pt-[2.5vh] items-center   overflow-y-auto pb-[5vh] bg-backgroundClaro">
      <div className="ml-[3rem]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-xl font-bold">{description}</h2>
      </div>

      <button className="border border-black text-xl font-bold rounded-xl w-[320px] h-[58px]">
        {buttonTitle}
      </button>
      <div className="relative w-full h-[400px] flex items-center justify-center border-none">
        {/*blur */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-backgroundClaro via-primaryGreen/60 to-backgroundClaro" />
        {/* Gradient fade */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-backgroundClaro via-transparent to-transparent" />
        <div className=" relative h-[85%] w-[85%] z-20 mx-auto rounded-[12px]">
          <Image
            src="/images/graph_landing_page.jpg"
            alt="graph"
            fill
            className="rounded-[12px] object-contain self-center"
            priority
          />
        </div>
      </div>
    </main>
  );
}
