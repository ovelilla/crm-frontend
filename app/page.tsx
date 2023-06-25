"use client";

import { useTheme } from "@mui/material/styles";
import useThemeStore from "@/hooks/useThemeStore";
import Layout from "@/features/user/layout";
import Header from "@/features/user/components/header";
import Body from "@/features/user/components/body";
import Login from "@/features/user/login";
import Footer from "@/features/user/components/footer";

export default function Home() {
    const theme = useTheme();
    const { themeMode, setThemeMode } = useThemeStore();

    return (
        <Layout>
            <Header title={"Iniciar sesión"} />
            <Body>
                <Login />
            </Body>
            <Footer
                firstLink={"/registrar"}
                firstText={"¿No tienes cuenta? Regístrate"}
                secondLink={"/recuperar"}
                secondText={"¿Olvidaste tu contraseña?"}
            />
        </Layout>
    );
}
