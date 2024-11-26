import { PropertyCard } from "@/app/components"
import { FaHouse } from "react-icons/fa6"
import { projects } from "../../constants"

export const PropertiesContainer = () => {
    
    return (
        <div className="flex flex-col gap-8 p-12 md:p-24">
                <div className="flex items-center gap-2 text-xl text-[#3B4352] border-b border-b-[#712536] pb-4">
                    <FaHouse />
                    <h2 className=" capitalize font-medium">propiedades</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {
                        projects.map((p, index) => (
                            <PropertyCard key={index} id={p.id} title={p.title} price={p.price} expenses={p.expenses} image={p.images[0]} location={p.location}  />
                        ))
                    }
                </div>
            </div>
    )
}

export default PropertiesContainer;