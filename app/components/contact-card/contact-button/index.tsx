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
        <div className="group flex flex-col items-center justify-center transition duration-150 h-12">
            <Icon className='group-hover:hidden text-5xl'/>
            <a className="hidden group-hover:flex bg-[#E8E7E5]" target='_blank' href={url}>
                {value}
            </a>
        </div>
    )
}