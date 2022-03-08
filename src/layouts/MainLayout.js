import { Nav } from "../components/partials/Nav";
import { AppRoutes } from "./AppRoutes";

export const MainLayout = ()=>(
    <>
    <Nav/>
    <main>
        <AppRoutes/>
    </main>
    </>
)