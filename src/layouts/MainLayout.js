import {Nav} from "../components/partials/Nav";
import {AppRoutes} from "./AppRoutes";
import {Footer} from "../components/partials/Footer";

export const MainLayout = () => (
    <>
        <Nav/>
        <main>
            <AppRoutes/>
        </main>
        <Footer/>
    </>
)