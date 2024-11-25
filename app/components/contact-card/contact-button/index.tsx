import React, { FC } from "react"
import { IconType } from "react-icons"

interface ContactButtonProps {
    name: string,
    value: string,
    url: string,
    Icon: IconType;
}

export const ContactButton: FC<ContactButtonProps> = ({name, value, url, Icon}) => {
    return (
        <a target="_blank" href={url} className="relative group flex flex-col items-center justify-center h-12 w-full">
            <Icon className='absolute group-hover:opacity-0 text-5xl transition-opacity duration-300 ease-out'/>
            <a                 
                className="hidden group-hover:flex transition-opacity duration-150 ease-in-out opacity-0 group-hover:opacity-100"
                target="_blank"
                href={url}
            >
                {value}
            </a>
        </a>
    )
}