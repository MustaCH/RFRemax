import localFont from "next/font/local";


const alloverFont = localFont({
    src: [
      { path: "../../fonts/ALLOVER.ttf", weight: "100" },
    ],
    variable: "--font-allover", 
    display: "swap", 
  });

export const WelcomeBanner = () => {



    return (
        <div id="welcome-banner" className={`${alloverFont.variable} w-full h-[80vh] mt-2 md:mt-3 bg-cover bg-center md:bg-[center_top_-7rem] bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1732221175/bannerwelcome_liywcy.jpg)]`}>
            <p className={`text-4xl md:text-7xl text-[#064693] font-bold text-right pt-28 px-12 md:mr-48 leading-10`}>Romina</p>
            <p className={`text-4xl md:text-7xl text-[#064693] font-bold text-right pt-1 md:pt-4 px-12 md:mr-48 leading-10`}>Frola</p>
            <p className="text-[#dc162f] text-[0.6rem] md:text-xl text-right pr-12 md:mr-48">Agente Inmobiliario</p>
        </div>
    )
}

export default WelcomeBanner;