import { IProjectType } from "@/app/types";
import { FC } from "react";
import { BiArea, BiBuilding, BiSolidCarGarage } from "react-icons/bi";
import {
  MdMeetingRoom,
  MdOutlineCalendarMonth,
  MdOutlineKingBed,
} from "react-icons/md";
import {
  PiHouseSimpleBold,
  PiHouseSimpleDuotone,
  PiHouseSimpleFill,
  PiOfficeChairBold,
  PiToiletBold,
} from "react-icons/pi";
import { TbBath } from "react-icons/tb";

interface PropertyPageProps {
  project: IProjectType | undefined;
}

export const PropertySpecs: FC<PropertyPageProps> = ({ project }) => {
  console.log("Propiedad recibida en PropertySpecs:", project);

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl underline decoration-[#4088e3] underline-offset-8">
        Características
      </h3>
      <hr />
      <div className="grid grid-cols-2 gap-4">
        {project?.surface?.surfaceTotal && (
          <div className="flex items-center gap-2">
            <PiHouseSimpleBold className="text-2xl" />
            <p className="font-bold">
              {project?.surface?.surfaceTotal} m<sup>2</sup> totales
            </p>
          </div>
        )}
        {project?.surface?.surfaceCover && (
          <div className="flex items-center gap-2">
            <PiHouseSimpleFill className="text-2xl" />
            <p className="font-bold">
              {project?.surface?.surfaceCover} m<sup>2</sup> cubiertos
            </p>
          </div>
        )}
        {project?.surface?.surfaceSemiCover && (
          <div className="flex items-center gap-2">
            <PiHouseSimpleDuotone className="text-2xl" />
            <p className="font-bold">
              {project?.surface?.surfaceSemiCover} m<sup>2</sup> semicubiertos
            </p>
          </div>
        )}
        {project?.surface?.surfaceLand && (
          <div className="flex items-center gap-2">
            <BiArea className="text-2xl" />
            <p className="font-bold">
              {project?.surface?.surfaceLand} m<sup>2</sup> terreno
            </p>
          </div>
        )}
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4">
        {project?.specifications?.rooms && (
          <div className="flex items-center gap-2">
            <MdMeetingRoom className="text-2xl" />
            <p className="font-bold">
              {project?.specifications?.rooms} ambientes
            </p>
          </div>
        )}
        {project?.specifications?.bedrooms && (
          <div className="flex items-center gap-2">
            <MdOutlineKingBed className="text-2xl" />
            <p className="font-bold">
              {project?.specifications?.bedrooms} habitaciones
            </p>
          </div>
        )}
        {project?.specifications?.bathrooms && (
          <div className="flex items-center gap-2">
            <TbBath className="text-2xl" />
            <p className="font-bold">
              {project?.specifications?.bathrooms} baños
            </p>
          </div>
        )}
        {project?.specifications?.toilets && (
          <div className="flex items-center gap-2">
            <PiToiletBold className="text-2xl" />
            <p className="font-bold">
              {project?.specifications?.toilets} toilets
            </p>
          </div>
        )}
        {project?.specifications?.garage && (
          <div className="flex items-center gap-2">
            <BiSolidCarGarage className="text-2xl" />
            <p className="font-bold">
              {project?.specifications?.garage} cocheras
            </p>
          </div>
        )}
        {project?.specifications?.age !== 0 && (
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth className="text-2xl" />
            <p className="font-bold">
              {project?.specifications?.age} años de antigüedad
            </p>
          </div>
        )}
        {project?.specifications?.floor && (
          <div className="flex items-center gap-2">
            <BiBuilding className="text-2xl" />
            <p className="font-bold">
              Pisos de la propiedad: {project?.specifications?.floor}
            </p>
          </div>
        )}
        {project?.specifications?.professional && (
          <div className="flex items-center gap-2">
            <PiOfficeChairBold className="text-2xl" />
            <p className="font-bold">Apto profesional</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertySpecs;
