import React from 'react';
import Header from '../../components/Header';

type MainPageProps = {
    title?: string;
    description?: string;
    buttonTitle?: string;
};

const MainPage: React.FC<MainPageProps> = ({
    title = "Invista sem medo. Aprenda simulando de verdade.",
    description = "Simule operações na bolsa com dados reais e sem riscos.",
    buttonTitle = "Comece agora gratuitamente",
}) => {
    return (
        //declarar o header
        <main>
            <Header />

            <div className="flex flex-col items-center gap-10 p-10">
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>

                <div>
                    <h2 className="text-xl font-bold">{description}</h2>
                </div>

                <button className="border border-black text-xl font-bold rounded-xl w-[320px] h-[58px]">
                    {buttonTitle}
                </button>
            </div>
        </main>
    );
};

export default MainPage;

//Todo converte todos os componentes para componentes funcionais
