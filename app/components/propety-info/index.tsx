import { IProjectType } from "@/app/types"
import { PriceFormatter } from "@/app/utils";
import { FC } from "react"

interface PropertyInfoProps {
    project?: IProjectType;
}

export const PropertyInfo: FC<PropertyInfoProps> = ({project}) => {
    return (    
        <div className="flex flex-col gap-6">     
            <h1 className="text-xl md:text-3xl">{project?.title}</h1>
            <div>
            <div className="text-sm border border-[#B0BBC5] bg-[#3B4352] text-white py-1 px-2 w-fit rounded-lg mb-2">
                {project?.operation.type === 'SALE' ? 'Venta' : project?.operation.type === 'RENT' ? 'Alquiler' : ''}
            </div>
            <PriceFormatter className="text-4xl" value={project?.price}/>
            {project?.expenses && <PriceFormatter className="text-sm" value={project?.expenses} title="Expensas:"/>}
            </div>
        </div>

    )
}

export default PropertyInfo;