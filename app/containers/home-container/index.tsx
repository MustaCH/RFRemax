import { WelcomeBanner } from "@/app/components";
import {PropertiesContainer, ContactContainer, WhoamiContainer} from "@/app/containers";


export const HomeContainer = () => {
    return (
        <div>
            <section>
                <WelcomeBanner/>
            </section>
            <section>
                <PropertiesContainer/>
            </section>
            <section>
                <WhoamiContainer/>
            </section>
            <section>
                <ContactContainer/>
            </section>
        </div>
    )
}

export default HomeContainer;