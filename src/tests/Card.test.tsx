import React from "react";
import { render, screen } from "@testing-library/react";
import CustomCard from "../components/Card"; 
import "@testing-library/jest-dom";
import "jest-styled-components";

// Mock do CustomButton para evitar testes desnecessários do componente filho
jest.mock("../components/Button", () => ({ 
    __esModule: true,
    default: ({ label }: { label: string }) => <button>{label}</button>
}));

describe("CustomCard", () => {
    test("renderiza o título quando fornecido", () => {
        render(<CustomCard title="Meu Título" description="Descrição" />);
        expect(screen.getByText("Meu Título")).toBeInTheDocument();
    });

    test("renderiza descrição corretamente", () => {
        render(<CustomCard description="Texto da descrição" />);
        expect(screen.getByText("Texto da descrição")).toBeInTheDocument();
    });

    test("renderiza mídia quando mediaProps.image é passado", () => {
        render(
        <CustomCard
            description="desc"
            mediaProps={{ 
                image: "/img.png", 
                alt: "Imagem teste",
                "aria-label": "Imagem teste" 
            }}
        />
        );

        // 1. Consulta: Encontre o elemento com role="img" (o CardMedia renderizado como <div>)
        const imgElement = screen.getByRole("img", { name: /Imagem teste/i });
        expect(imgElement).toBeInTheDocument();
        
        // 2. Verificação do Source: O CardMedia usa CSS background-image, não o atributo 'src'.
        expect(imgElement).toHaveStyle('background-image: url("/img.png")');
        
        // 3. Verificação do Alt:
        expect(imgElement).toHaveAttribute("alt", "Imagem teste");
    });

    test("não renderiza mídia quando mediaProps.image não é fornecido", () => {
        const { container } = render(<CustomCard description="desc" />);
        expect(container.querySelector("img")).toBeNull();
    });

    test("aplica estilos básicos customizados no StyledCard", () => {
        const { container } = render(
        <CustomCard
            description="desc"
            bgColor="#111111"
            textColor="#ffffff"
            borderRadius="20px"
            width="300px"
            height="200px"
            alignItems="center"
            textAlign="center"
            justifyContent="flex-end"
        />
        );

        const card = container.firstChild;

        expect(card).toHaveStyleRule("background-color", "#111111");
        expect(card).toHaveStyleRule("color", "#ffffff");
        expect(card).toHaveStyleRule("border-radius", "20px");
        expect(card).toHaveStyleRule("width", "300px");
        expect(card).toHaveStyleRule("height", "200px");
        expect(card).toHaveStyleRule("align-items", "center");
        expect(card).toHaveStyleRule("text-align", "center");
        expect(card).toHaveStyleRule("justify-content", "flex-end");
    });

    test("aplica estilos de borda no Description", () => {
        const { container } = render(
        <CustomCard
            description="Texto"
            borderTop
            borderLeft
            paddingLeft
        />
        );

        const description = container.querySelector("p");

        expect(description).toHaveStyleRule("border-top", "2px solid var(--color-primary)");
        expect(description).toHaveStyleRule("border-left", "2px solid var(--color-primary)");
        expect(description).toHaveStyleRule("padding-left", "10px");
    });

    test("não renderiza botão caso buttonLabel não seja fornecido", () => {
        const { container } = render(<CustomCard description="desc" />);
        expect(container.querySelector("button")).toBeNull();
    });

    test("renderiza o botão quando buttonLabel é fornecido", () => {
        render(<CustomCard description="desc" buttonLabel="Clique Aqui" />);

        expect(screen.getByText("Clique Aqui")).toBeInTheDocument();
    });

    test("passa corretamente as props para o botão", () => {
        render(
            <CustomCard
                description="desc"
                buttonLabel="OK"
                buttonProps={{ bgColor: "red" }}
            />
        );
        expect(screen.getByText("OK")).toBeInTheDocument();
    });

    test("aplica corretamente mediaWidth e mediaHeight no CardMedia", () => {
        const { container } = render(
            <CustomCard
                description="desc"
                mediaProps={{ image: "/img.png", alt: "imagem" }}
                mediaWidth="150px"
                mediaHeight="120px"
            />
        );

        // 1. Consulta: Encontre o elemento CardMedia renderizado como <div> com role="img".
        const cardMedia = container.querySelector('[role="img"]'); 
        
        if (!cardMedia) throw new Error("CardMedia element not found.");

        // 2. Verificação de Estilos: O jest-styled-components verifica as regras aplicadas
        // aos Styled Components, que usa as props $width/$height.
        expect(cardMedia).toHaveStyleRule("width", "150px");
        expect(cardMedia).toHaveStyleRule("height", "120px");
    });
});