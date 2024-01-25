import { Navbar, Footer } from "../components/navigation/index";
import { motion } from "framer-motion";
import { TbBrandSpeedtest, TbAffiliate } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

export const Layout = () => {
  const planes = [
    { plan: "180", cost: "100MIL" },
    { plan: "220", cost: "120MIL" },
    { plan: "270", cost: "150MIL" },
    { plan: "350", cost: "185MIL" },
    { plan: "410", cost: "200MIL" },
    { plan: "500", cost: "250MIL" },
  ];

  return (
    <div className="relative">
      <motion.div
        className="fixed bottom-0 right-0 p-3 m-4 bg-green-500 rounded-full text-6xl text-white opacity-30 transition hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=595971649878"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      </motion.div>

      <Navbar />

      <main className="bg-blue-900 ">
        {/* Inicio de la pagina */}
        <div
          className="flex flex-col gap-20  py-12 lg:flex-row-reverse lg:h-screen lg:items-center md:px-12"
          style={{ backgroundColor: "#ffaf02" }}
          id="inicio"
        >
          {/* Gosnet logo */}
          <div className="w-80 md:w-96  mx-auto">
            <img
              src={require("../assets/Gosnet_logo.jpg")}
              alt="Gosnet"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <div className=" h-fit text-white px-9 space-y-3 ">
            <h1 className="text-7xl md:text-9xl font-ptsans font-semibold text-center lg:text-left mb-9">
              Gosnet
            </h1>
            <h2 className="text-3xl font-nanito">
              Servicios de telecomunicación y tecnología
            </h2>
            <p className="text-lg font-nanito">
              Dealer autorizado de NEOTELECOM
            </p>
          </div>
        </div>
        {/* Planes de internet */}
        <div className=" text-white font-bebas py-10">
          <h2 className="text-9xl text-center">PLANES</h2>
          <div id="planes">
            {/* Promocional */}
            <div className="bg-blue-200 bg-opacity-70 w-80 rounded-3xl mx-auto py-2 md:w-fit md:px-12">
              <div className="text-center md:flex md:items-baseline md:gap-3 md:w-fit md:mx-auto ">
                <h3 className="text-4xl md:text-7xl">Promocional</h3>
                <p className="text-6xl md:text-8xl">300mbps</p>
              </div>
              <div className="rounded-full bg-blue-900 w-fit px-4 md:px-8 mx-auto text-6xl md:text-8xl py-1">
                <p>130.000</p>
              </div>
            </div>

            {/* Planes */}
            <div className="h-fit sm:grid md:grid-cols-3 sm:grid-cols-2">
              {planes.map((item, index) => (
                <div key={index} className="mx-auto w-56 h-56 py-12 my-8">
                  <div className="relative">
                    <h4 style={{ fontSize: "12rem", lineHeight: "0.7" }}>
                      {item.plan}
                    </h4>
                    <div
                      className="absolute top-1/4 font-extrabold text-3xl bg-red-500 rounded-md px-2"
                      style={{ left: "57%" }}
                    >
                      <p>MBPS</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-right px-2 ">
                    <div className="-space-y-2  font-nanito   w-full font-semibold">
                      <p style={{ lineHeight: "2.2" }}>A SOLO</p>
                      <p className="text-red-500 text-xl">GS</p>
                    </div>
                    <div>
                      <p className="text-6xl font-extrabold">{item.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-fit mx-auto text-white pb-12 md:flex-row">
          <div className="rounded-e-full md:rounded-s-full md:rounded-e-none border-2 border-white  px-7 py-2 w-96 font-ptsans">
            <div className="flex gap-2 items-center">
              <TbBrandSpeedtest className="text-3xl" />
              <h5 className="text-lg">POTENCIA TU RENDIMIENTO</h5>
            </div>
            <div className="py-1">
              <p className="font-nanito text-xs">
                UN PING ESTABLE MARCA LA DIFERENCIA. PROVEEMOS CONEXIONES
                RAPIDAS Y SIN INTERRUPCIONES
              </p>
            </div>
          </div>
          <div className="rounded-e-full border-2 border-white  px-7 py-2 w-96 font-ptsans">
            <div className="flex gap-2 items-center">
              <TbAffiliate className="text-3xl" />
              <h5 className="text-lg">INTERNET SIMETRICO</h5>
            </div>
            <div className="py-1">
              <p className="font-nanito text-xs">
                VELOCIDAD DE CARGA Y DE DESCARGA EQUILIBRADA, TRANSFERENCIA DE
                DATOS EFICIENTE EN AMBAS DIRECCIONES
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
