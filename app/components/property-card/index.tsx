'use client'

import { LocationType, PriceType } from "@/app/types"
import { PriceFormatter } from "@/app/utils"
import Link from "next/link"
import { FC } from "react"

interface PropertyCardProps {
    image: string,
    price: PriceType,
    expenses?: PriceType,
    title: string,
    location?: LocationType
}

export const PropertyCard: FC<PropertyCardProps> = ({image, price, expenses, title, location}) => {
    return (
        <Link href={''} className="shadow-md rounded-lg border-2 border-transparent hover:border-[#B0BBC5] duration-150 bg-white w-96">
            <div style={{ backgroundImage: `url(${image})` }} className="h-60 bg-center bg-cover bg-no-repeat w-full rounded-t-lg"></div>
            <div className="flex flex-col gap-2 px-6 pb-6 pt-3">
                <div>
                    <PriceFormatter className="font-semibold text-lg" value={price}/>
                    {expenses && <PriceFormatter title="Expensas:" className="text-xs font-light" value={expenses}/>}
                </div>
                <div>
                    <h3 className="text-xs md:text-sm">{title}</h3>
                </div>
                <div className="flex gap-1 text-xs mt-4">
                    {location?.province && <p>{location?.province} /</p>}
                    <p>{location?.city} {location?.hood && "/"}</p>
                    <p>{location?.hood}</p>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard;