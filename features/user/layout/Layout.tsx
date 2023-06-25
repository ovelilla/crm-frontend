import {
    Main,
    ColumnLeft,
    ContainerLeft,
    ColumnRight,
    ContainerRight,
    Title,
    Text,
} from "./styles";
import AuthCircles from "@/icons/AuthCircles";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Main>
            <ColumnLeft>
                <ContainerLeft>{children}</ContainerLeft>
            </ColumnLeft>

            <ColumnRight>
                <AuthCircles />

                <ContainerRight>
                    <Title>
                        <span>Welcome to</span>
                        <span>Next.js CRM App</span>
                    </Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel leo
                        ut aliquam. Class aptent taciti sociosqu ad litora torquent per conubia
                        nostra.
                    </Text>
                </ContainerRight>
            </ColumnRight>
        </Main>
    );
};

export default Layout;
