"use client";

import { useEffect, useState } from "react";
import { PropertyCard } from "@/app/components";
import { FaHouse } from "react-icons/fa6";
import { IProjectType } from "@/app/types";
import { getProperties } from "@/app/services";



export const PropertiesContainer = () => {
  const [properties, setProperties] = useState<IProjectType[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error loading properties:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        Cargando...
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col gap-8 p-12 md:p-24">
        <div className="flex items-center gap-2 text-xl text-[#3B4352] border-b border-b-[#4088e3] pb-4">
          <FaHouse />
          <h2 className="capitalize font-medium">propiedades</h2>
        </div>
        <p className="text-center text-lg">No hay propiedades disponibles</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-12 md:p-24">
      <div className="flex items-center gap-2 text-xl text-[#3B4352] border-b border-b-[#4088e3] pb-4">
        <FaHouse />
        <h2 className="capitalize font-medium">propiedades</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            operation={property.operation}
            price={property.price}
            expenses={property.expenses}
            image={
              property.images && property.images.length > 0
                ? property.images[0]
                : "/placeholder.jpg"
            }
            location={property.location}
            availability={property.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesContainer;
