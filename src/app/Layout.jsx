import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import '../styles/index.scss'


export const Layout = () => {
    return (
        <>

            <Header />

            <main className="main">
                <Outlet />
            </main>

            <Footer year={2025} />
        </>
    )
}