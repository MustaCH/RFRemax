import { IProjectType } from "@/app/types";
import { PriceFormatter } from "@/app/utils";
import { FC } from "react";

interface PropertyInfoProps {
  project?: IProjectType;
}
const BACITY = "Ciudad de Buenos Aires";

export const PropertyInfo: FC<PropertyInfoProps> = ({ project }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl">{project?.title}</h1>
        <div>
          <h3>
            {project?.location?.province !== BACITY &&
              `${project?.location?.province} /`}{" "}
            {project?.location?.city} / {project?.location?.hood}
          </h3>
          <p>
            {project?.location?.street} {project?.location?.number}
          </p>
        </div>
      </div>
      <div>
        {project?.availability === true ? (
          <div className="text-sm border border-[#B0BBC5] bg-[#3B4352] text-white py-1 px-2 w-fit rounded-lg mb-2">
            {project?.operation.type === "SELL"
              ? "Venta"
              : project?.operation.type === "RENT"
              ? "Alquiler"
              : ""}
          </div>
        ) : (
          <div className="text-sm border border-[#B0BBC5] bg-red-700 text-white py-1 px-2 w-fit rounded-lg mb-2">
            {project?.operation.type === "SALE" ? "Vendido" : "Alquilado"}
          </div>
        )}
        <PriceFormatter className="text-4xl" value={project?.price} />
        {project?.expenses && (
          <PriceFormatter
            className="text-sm"
            value={project?.expenses}
            title="Expensas:"
          />
        )}
      </div>
    </section>
  );
};

export default PropertyInfo;
