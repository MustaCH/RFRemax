export const WhoamiCard = () => {
    return (
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-evenly items-center">
            <div className="rounded-full border-4 border-white bg-center shadow-lg bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1732230093/quiensoy_rhrzzo.jpg)] w-80 h-80 md:w-96 md:h-96">
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg p-8 w-96 shadow-lg">
                <div className="border-b border-b-[#712536] pb-2">
                    <h3 className="text-2xl font-semibold">¿Quien soy?</h3>
                </div>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ratione, 
                    ducimus quibusdam, cupiditate est aliquid enim neque nam sapiente, 
                    quam sit et impedit temporibus autem libero quae illum! Eos obcaecati 
                    odio ipsa molestias laudantium ducimus non ullam quae doloribus deleniti 
                    dolorem nemo suscipit quod quo voluptate, tenetur quisquam hic ex fugiat eaque. 
                    Est, ab repellat iusto eligendi quis suscipit dolore non voluptatum aperiam veritatis
                </p>
            </div>
        </div>
    )
}

export default WhoamiCard;