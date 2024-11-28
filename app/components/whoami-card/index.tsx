export const WhoamiCard = () => {
    return (
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-evenly items-center">
            <div className="rounded-full border-4 border-white bg-[length:35.5rem_50rem] bg-[center_top_-16rem] shadow-lg bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1732294268/Romina-04_fpifqe.jpg)] w-80 h-80 md:w-96 md:h-96">
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg p-8 w-96 shadow-lg">
                <div className="border-b border-b-[#712536] pb-2">
                    <h3 className="text-2xl font-semibold">¿Quien soy?</h3>
                </div>
                <p className="text-sm">
                    Soy Romina Frola, asesora inmobiliaria en RE/MAX Time, especializada en ofrecer un servicio personalizado y 
                    transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.<br/><br/>
                    Mi pasión por el rubro nació de mi interés en ayudar a las personas a encontrar su hogar perfecto, 
                    brindando un servicio que combina ética, compromiso y dedicación. Como Personal Shopper Inmobiliario, 
                    me encargo de realizar búsquedas específicas, asegurando una experiencia segura y sin complicaciones.<br/><br/>
                    Como emprendedora, me definen la perseverancia y el deseo constante de superarme. Mi misión es crecer 
                    profesionalmente, fidelizar a mis clientes y ser reconocida por la excelencia en mi trabajo, construyendo 
                    relaciones basadas en la confianza y el respeto.
                </p>
            </div>
        </div>
    )
}

export default WhoamiCard;