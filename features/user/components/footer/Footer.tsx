import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import { StyledFooter } from "./styles";

interface FooterProps {
    firstLink: string;
    firstText: string;
    secondLink: string;
    secondText: string;
}

const Footer = ({ firstLink, firstText, secondLink, secondText }: FooterProps) => {
    return (
        <StyledFooter>
            <MuiLink component={NextLink} href={firstLink} variant="body2">
                {firstText}
            </MuiLink>

            <MuiLink component={NextLink} href={secondLink} variant="body2">
                {secondText}
            </MuiLink>
        </StyledFooter>
    );
};

export default Footer;
