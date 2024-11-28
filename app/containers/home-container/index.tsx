'use client'

import { ContactFormModal, WelcomeBanner } from "@/app/components";
import {PropertiesContainer, ContactContainer, WhoamiContainer} from "@/app/containers";
import { useEffect, useState } from "react";


export const HomeContainer = () => {
    const [isModalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");
        if (!hasVisited) {
          setModalOpen(true); 
          sessionStorage.setItem("hasVisited", "true"); 
        }
      }, []);

    return (
        <div>
            {isModalOpen && (
                    <ContactFormModal onClose={() => setModalOpen(false)} />
                )}            
            <section>
                <WelcomeBanner/>
            </section>
            <section id="propiedades">
                <PropertiesContainer/>
            </section>
            <section id="quiensoy">
                <WhoamiContainer/>
            </section>
            <section id="contacto">
                <ContactContainer/>
            </section>
        </div>
    )
}

export default HomeContainer;