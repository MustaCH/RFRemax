import Link from "next/link";
import React, { FC } from "react"
import { IconType } from "react-icons"

interface ContactButtonProps {
    name: string,
    value: string,
    url: string,
    Icon: IconType;
}

const ContactButton: FC<ContactButtonProps> = ({name, value, url, Icon}) => {
    return (
        <Link id={name} target="_blank" href={url} aria-label={value} className="group flex flex-col items-center justify-center bg-[#4088e3] hover:bg-transparent duration-300 ease-out rounded-full p-3 w-fit">
            <Icon className='group-hover:text-[#4088e3] text-5xl text-white transition-opacity duration-300 ease-out' aria-label={value} />
        </Link>
    )
}

export default ContactButton;