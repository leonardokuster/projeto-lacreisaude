'use client';

import { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { AppBar, Tooltip, Toolbar, Menu, MenuItem, Divider, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledAppBar = styled(AppBar)`
  position: static;
  background-color: var(--background);
  box-shadow: none;
  z-index: 1000;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  text-decoration: none;
  display: flex;
  gap: 10px;
`;

const StyledMenuIcon = styled.div`
  color: var(--background);
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: var(--color-primary);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled(IconButton)`
  background-color: var(--color-primary);
  color: var(--background);
  border-radius: 10px;
  font-size: 16px;
  gap: 5px;
  padding: 10px 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageDesktop = styled(Image)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageMobile = styled(Image)`
  @media (min-width: 769px) {
    display: none;
  }
`;

export default function Header() {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorElMenu);

  const [anchorElOption, setAnchorElOption] = useState<null | HTMLElement>(null);
  const optionOpen = Boolean(anchorElOption);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleOpenOption = (event: MouseEvent<HTMLElement>) => {
    setAnchorElOption(event.currentTarget);
  };

  const handleCloseOption = () => {
    setAnchorElOption(null);
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Link href="/">
          <ImageDesktop src="/images/logoDesktop.svg" alt="Lacrei Saúde Logo" width={150} height={50} />
          <ImageMobile src="/images/logoMobile.svg" alt="Lacrei Saúde Logo" width={120} height={50} />
        </Link>

        <Tooltip title="Menu">
          <StyledIconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls={menuOpen ? "mobile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={handleOpenMenu}
          >
            <StyledMenuIcon>
              <MenuIcon />
            </StyledMenuIcon>
          </StyledIconButton>
        </Tooltip>

        <Menu
          id="mobile-menu"
          anchorEl={anchorElMenu}
          open={menuOpen}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          keepMounted
        >
          <StyledMenuItem onClick={handleCloseMenu}>
            <Link href="/about" passHref>Quem somos</Link>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleCloseMenu}>
            <Link href="/" passHref>Ajuda</Link>
          </StyledMenuItem>
          <Divider />
          <StyledMenuItem onClick={handleCloseMenu}>
            <Link href="/" passHref>
                <PersonOutlineOutlinedIcon /> Paciente
            </Link>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleCloseMenu}>
            <Link href="/" passHref>
                <MedicalServicesOutlinedIcon /> Profissional
            </Link>
          </StyledMenuItem>
        </Menu>

        <DesktopMenu>
          <Link href="/about">Quem somos</Link>
          <Link href="/">Ajuda</Link>

          <Tooltip title="Opções de login">
            <LoginButton
              aria-controls={optionOpen ? "desktop-options-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={optionOpen ? 'true' : 'false'}
              onClick={handleOpenOption}
            >
              Entrar
              {optionOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </LoginButton>
          </Tooltip>

          <Menu
            id="desktop-options-menu"
            anchorEl={anchorElOption}
            open={optionOpen}
            onClose={handleCloseOption}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
          >
            <StyledMenuItem onClick={handleCloseOption}>
              <Link href="/" passHref>
                  <PersonOutlineOutlinedIcon /> Paciente
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={handleCloseOption}>
              <Link href="/" passHref>
                  <MedicalServicesOutlinedIcon /> Profissional
              </Link>
            </StyledMenuItem>
          </Menu>
        </DesktopMenu>
      </StyledToolbar>
    </StyledAppBar>
  );
}