import localFont from "next/font/local";

const alloverFont = localFont({
  src: [{ path: "../../fonts/ALLOVER.ttf", weight: "100" }],
  variable: "--font-allover",
  display: "swap",
});

export const WelcomeBanner = () => {
  return (
    <div
      id="welcome-banner"
      className={`${alloverFont.variable} w-full min-h-screen mt-2 md:mt-3 bg-cover bg-center bg-no-repeat md:bg-[center_top_-12rem] bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1745614032/bannerwelcome_liywcy_rw3zep.webp)]`}
    >
      <p
        className={`text-4xl md:text-7xl text-[#003457] font-bold text-right pt-28 px-12 md:mr-48 leading-10 drop-shadow-lg`}
      >
        Romina
      </p>
      <p
        className={`text-4xl md:text-7xl text-[#003457] font-bold text-right pt-1 md:pt-4 px-12 md:mr-48 leading-10 drop-shadow-lg`}
      >
        Frola
      </p>
      <p className="text-[#dc162f] text-[0.6rem] md:text-xl text-right pr-12 md:mr-48 drop-shadow-lg">
        Agente Inmobiliario
      </p>
    </div>
  );
};

export default WelcomeBanner;
