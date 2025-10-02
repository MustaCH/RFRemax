"use client";

import { LocationType, OperationType, PriceType } from "@/app/types";
import { PriceFormatter } from "@/app/utils";
import Link from "next/link";
import { FC } from "react";

interface PropertyCardProps {
  id: string;
  operation: OperationType;
  availability: boolean;
  image: string;
  price: PriceType;
  expenses?: PriceType;
  title: string;
  location?: LocationType;
}

export const PropertyCard: FC<PropertyCardProps> = ({
  image,
  operation,
  availability,
  price,
  expenses,
  title,
  id,
  location,
}) => {
  return (
    <Link
      href={`${id}`}
      className="shadow-md rounded-lg border-2 border-transparent hover:border-[#B0BBC5] duration-150 bg-white w-full md:w-80 lg:w-72 xl:w-96"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="relative h-72 bg-center bg-cover bg-no-repeat w-full rounded-t-lg"
      >
        {availability === false && (
          <div className="absolute top-0 right-0 p-2 bg-red-700 rounded-tr-lg rounded-bl-lg">
            <p className="text-white">
              {operation.type === "SELL" ? "Vendido" : "Alquilado"}
            </p>
          </div>
        )}
        {title === 'Venta Depto. 3 Amb. Puerto Madero - 3 Cocheras' && 
        <div className="absolute top-0 right-0 p-2 bg-blue-700 rounded-tr-lg rounded-bl-lg">
            <p className="text-white">
              En negociación
            </p>
          </div>
         }
      </div>
      <div className="flex flex-col gap-2 px-6 pb-6 pt-3">
        <div className="border border-[#B0BBC5] rounded-lg p-1 w-fit text-xs">
          <p>{operation.type === "SELL" ? "Venta" : "Alquiler"}</p>
        </div>
        <div className="h-12">
          <PriceFormatter className="font-semibold text-lg" value={price} />
          {expenses && (
            <PriceFormatter
              title="Expensas:"
              className="text-xs font-light"
              value={expenses}
            />
          )}
        </div>
        <div>
          <h3 className="text-xs md:text-sm text-[#4088e3]">{title}</h3>
        </div>
        <div className="flex gap-1 text-xs mt-4 opacity-75">
          {location?.province !== location?.city && <p>{location?.province} /</p>}
          <p>
            {location?.city} /
          </p>
          <p>{location?.hood}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
