import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer"; 
import "@testing-library/jest-dom";

// Mock do next/link
jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

// Mock do next/image
jest.mock("next/image", () => {
  return function MockedImage(props: any) {
    // Necessário para evitar erro de layout do Next 13
    return <img {...props} alt={props.alt} />;
  };
});

describe("Footer component", () => {
    test("renderiza logo com imagem correta", () => {
        render(<Footer />);
        const logo = screen.getByAltText("Lacrei Saúde Logo");

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "/images/logoFooter.svg");
    });

    test("renderiza todas as seções com seus títulos", () => {
        render(<Footer />);

        expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();
        expect(screen.getByText("Saúde")).toBeInTheDocument();
        expect(screen.getByText("Segurança e privacidade")).toBeInTheDocument();
    });

    test("renderiza links internos corretamente (Next.js Link)", () => {
        render(<Footer />);

        expect(screen.getByText("Quem somos").closest("a")).toHaveAttribute(
        "href",
        "/about"
        );

        expect(screen.getByText("Nosso propósito").closest("a")).toHaveAttribute(
        "href",
        "/"
        );
    });

    test("renderiza ícones com links externos corretos", () => {
        render(<Footer />);

        // Há múltiplos links sem nome: 4 sociais + 1 do logo (que no JSDOM pode aparecer sem nome)
        const linksSemNome = screen.getAllByRole("link", { name: "" }); 
        
        // Filtramos para pegar APENAS os 4 links sociais (pelo href externo)
        const socialLinks = linksSemNome.filter(
        (link) => link.getAttribute("href")?.startsWith("http") || 
                    link.getAttribute("href")?.startsWith("mailto")
        );

        // Deve encontrar os 4 links sociais
        expect(socialLinks).toHaveLength(4); 

        expect(socialLinks[0]).toHaveAttribute("href", "https://www.facebook.com/lacrei.saude/");
        expect(socialLinks[1]).toHaveAttribute("href", "https://www.instagram.com/lacrei.saude");
        expect(socialLinks[2]).toHaveAttribute("href", "https://www.linkedin.com/company/lacrei");
        expect(socialLinks[3]).toHaveAttribute("href", "mailto:contato@lacreisaude.com.br");
    });

    test("renderiza os quatro links sociais corretamente", () => {
        render(<Footer />);

        const allLinks = screen.getAllByRole("link");

        const socialLinks = allLinks.filter(
        (link) => link.getAttribute("href")?.startsWith("http") || 
                    link.getAttribute("href")?.startsWith("mailto")
        );
        
        expect(socialLinks).toHaveLength(4);

        expect(socialLinks[0]).toHaveAttribute(
        "href",
        "https://www.facebook.com/lacrei.saude/"
        );
        expect(socialLinks[1]).toHaveAttribute(
        "href",
        "https://www.instagram.com/lacrei.saude"
        );
        expect(socialLinks[2]).toHaveAttribute(
        "href",
        "https://www.linkedin.com/company/lacrei"
        );
        expect(socialLinks[3]).toHaveAttribute(
        "href",
        "mailto:contato@lacreisaude.com.br"
        );
    });

    test("renderiza mensagens de aviso corretamente", () => {
        render(<Footer />);

        expect(
        screen.getByText(
            /A Lacrei Saúde não oferece tratamento médico emergencial/i
        )
        ).toBeInTheDocument();

        expect(
        screen.getByText(/Em caso de auxílio psicológico, ligue para 188/i)
        ).toBeInTheDocument();
    });

    test("exibe o ano atual dinamicamente", () => {
        render(<Footer />);

        const currentYear = new Date().getFullYear();
        expect(
        screen.getByText(
            new RegExp(`Copyright © ${currentYear} Lacrei Saúde`, "i")
        )
        ).toBeInTheDocument();
    });

    test("renderiza os Dividers", () => {
        const { container } = render(<Footer />);
        const dividers = container.querySelectorAll("hr");

        expect(dividers.length).toBeGreaterThanOrEqual(2);
    });

    test("renderiza total esperado de links internos", () => {
        render(<Footer />);

        const internalLinks = screen.getAllByRole("link").filter((l) =>
            l.getAttribute("href")?.startsWith("/")
        );

        expect(internalLinks.length).toBe(10); 
    });
});
