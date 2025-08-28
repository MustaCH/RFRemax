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
        <Link id={name} target="_blank" href={url} aria-label={value} className="flex items-center justify-center gap-1 hover:opacity-80 transition-all duration-300 ease-out rounded-full p-2 w-fit">
            <Icon className='text-xl text-gray-500 transition-opacity duration-300 ease-out' aria-label={value} />
            <p className="text-lg text-gray-500">{value}</p>
        </Link>
    )
}

export default ContactButton;