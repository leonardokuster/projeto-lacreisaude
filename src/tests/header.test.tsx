import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header'; // Ajuste o caminho conforme a estrutura do seu projeto

// Define um seletor específico para a navegação desktop
const DESKTOP_NAV_SELECTOR = 'nav.sc-jwTyAe'; 

describe('Header Component', () => {
    test('renderiza os logos desktop e mobile', () => {
        render(<Header />);

        const allLogos = screen.getAllByAltText("Lacrei Saúde Logo");
        const logoDesktop = allLogos.find(logo => logo.getAttribute('width') === '150');
        const logoMobile = allLogos.find(logo => logo.getAttribute('width') === '120');

        expect(logoDesktop).toBeInTheDocument();
        expect(logoMobile).toBeInTheDocument();
    });

    test('renderiza o menu desktop', () => {
        render(<Header />);

        const desktopNav = screen.getByRole("navigation");

        expect(within(desktopNav).getByText("Quem somos")).toBeInTheDocument();
        expect(within(desktopNav).getByText("Ajuda")).toBeInTheDocument();

        expect(screen.getByRole("button", { name: /opções de login/i })).toBeInTheDocument();
    });

    test('abre e fecha o submenu do botão Entrar', async () => {
        const user = userEvent.setup();
        render(<Header />);

        const loginButton = screen.getByRole("button", { name: /opções de login/i });

        const menuBefore = screen.queryByRole('menu');
        if (menuBefore) {
            expect(menuBefore).not.toBeVisible();
        } else {
            expect(menuBefore).not.toBeInTheDocument();
        }

        await user.click(loginButton);

        // Depois do clique, menu deve estar visível
        const desktopMenu = await screen.findByRole('menu');
        expect(desktopMenu).toBeVisible();

        // Verifica conteúdo do menu
        expect(within(desktopMenu).getByText(/Paciente/i)).toBeVisible();
        expect(within(desktopMenu).getByText(/Profissional/i)).toBeVisible();

        // Fecha o menu
        await user.click(loginButton);

        // Menu pode ser removido do DOM ou pode ficar invisível por CSS, depende do MUI/prop keepMounted
        const menuAfter = screen.queryByRole('menu');
        if (menuAfter) {
            expect(menuAfter).not.toBeVisible();
        } else {
            expect(menuAfter).not.toBeInTheDocument();
        }
        });

    test('abre e fecha o menu mobile ao clicar', async () => {
        const user = userEvent.setup();
        render(<Header />);

        const menuButton = screen.getByRole("button", { name: /menu/i });
        const mobileMenuContainerRole = 'presentation'; 
        const mobileMenuId = "mobile-menu";

        // 1. Busque todos os elementos com role="presentation"
        const allContainers = screen.getAllByRole(mobileMenuContainerRole, { hidden: true });
        
        // 2. Filtre o elemento que possui o ID correto
        const containerMobile = allContainers.find(el => el.id === mobileMenuId);
        
        if (!containerMobile) throw new Error("Container Mobile não encontrado.");
                
        // menu fechado: O container deve estar invisível
        expect(containerMobile).not.toBeVisible();
        
        // abrir menu
        await user.click(menuButton);

        // menu aberto: O container deve estar visível.
        expect(containerMobile).toBeVisible(); 
        
        // Encontramos o ul[role="menu"] interno DENTRO do container.
        const mobileMenu = within(containerMobile).getByRole('menu');
        
        // Verificamos a visibilidade dos links internos DENTRO do container.
        expect(within(mobileMenu).getByText("Paciente")).toBeVisible(); 
        
        // fechar menu 
        await user.keyboard('{Escape}'); 

        // menu fechado
        expect(containerMobile).not.toBeVisible();
        // Verificamos a invisibilidade dos links internos.
        expect(within(mobileMenu).getByText("Paciente")).not.toBeVisible();
    });

    test('links possuem href correto', () => {
        render(<Header />);

        const logoLink = screen.getByRole('link', { name: /lacrei saúde logo/i });
        expect(logoLink).toHaveAttribute('href', '/');

        const quemSomosLinks = screen.getAllByText("Quem somos");
        expect(quemSomosLinks[0]).toHaveAttribute('href', '/about');

        const ajudaLinks = screen.getAllByText("Ajuda");
        expect(ajudaLinks[0]).toHaveAttribute('href', '/');
    });
});