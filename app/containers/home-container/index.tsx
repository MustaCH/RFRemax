import { ContactFormModal, WelcomeBanner } from "@/app/components";
import {PropertiesContainer, ContactContainer, WhoamiContainer} from "@/app/containers";


export const HomeContainer = () => {
    return (
        <div>
            <ContactFormModal errors={false}/>
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