'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const FooterContainer = styled.footer`
    background-color: var(--background);
    color: var(--foreground);
    padding: 20px;
    text-align: center;

    a {
        text-decoration: none;
    }

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const FooterContent = styled.div`
    margin: 0 auto;
`;

const ImageStyled = styled(Image)`
    @media (max-width: 768px) {
        display: none;
    }
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: var(--foreground);
    padding-bottom: 50px;

    &:hover {
        text-decoration: underline;
    }
`;

const DividerStyled = (props: React.ComponentProps<typeof Divider>) => (
    <Divider
        sx={{
        backgroundColor: "var(--color-primary)",
        width: "100%",
        margin: "16px 0px"
        }}
        {...props}
    />
);

const Footer: React.FC = () => {
    return (
        <FooterContainer>
        <FooterContent>
            <Grid container spacing={2}>
            <DividerStyled />
            <Grid size={{ xs: 12, md: 3 }}>
                <Link href="/" passHref>
                    <ImageStyled src="/images/logoFooter.svg" alt="Lacrei Saúde Logo" width={150} height={50} />
                </Link>
                <Box sx={{ gap: 1 }}>
                <IconButton href="https://www.facebook.com/lacrei.saude/" target="_blank" rel="noopener noreferrer" color="inherit">
                    <FacebookIcon color="success"/>
                </IconButton>
                <IconButton href="https://www.instagram.com/lacrei.saude" target="_blank" rel="noopener noreferrer" color="inherit">
                    <InstagramIcon color="success" />
                </IconButton>
                <IconButton href="https://www.linkedin.com/company/lacrei" target="_blank" rel="noopener noreferrer" color="inherit">
                    <LinkedInIcon color="success" />
                </IconButton>
                <IconButton href="mailto:contato@lacreisaude.com.br" target="_blank" rel="noopener noreferrer" color="inherit">
                    <MailOutlineIcon color="success" />
                </IconButton>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Lacrei Saúde
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/about">Quem somos</LinkStyled><br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Nosso propósito</LinkStyled><br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Missão, visão e valor</LinkStyled><br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Acessibilidade</LinkStyled>
                </Typography>       
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Saúde
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Buscar atendimento</LinkStyled><br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Oferecer atendimento</LinkStyled>
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                Segurança e privacidade
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Política de privacidade</LinkStyled><br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Termos de uso</LinkStyled><br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                <LinkStyled href="/">Direitos do titular</LinkStyled>
                </Typography>
            </Grid>
            </Grid>
            <DividerStyled />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 2 }}>
            <Typography variant="body2" color="textSecondary">
                A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.            
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site www.cvv.org.br
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Copyright © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
            </Typography>
            </Box>
        </FooterContent>
        </FooterContainer>
    );
};

export default Footer;