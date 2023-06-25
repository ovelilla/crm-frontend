import LockOutlined from "@mui/icons-material/LockOutlined";
import { StyledHeader, Icon, Title } from "./styles";

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <StyledHeader>
            <Icon>
                <LockOutlined />
            </Icon>

            <Title>{title}</Title>
        </StyledHeader>
    );
};

export default Header;
