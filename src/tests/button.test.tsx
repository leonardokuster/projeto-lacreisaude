import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "../components/Button";
import "@testing-library/jest-dom";
import "jest-styled-components";

describe("CustomButton", () => {
    test("renderiza o label corretamente", () => {
        render(<CustomButton label="Clique aqui" />);
        expect(screen.getByText("Clique aqui")).toBeInTheDocument();
    });

    test("aplica corretamente os estilos padrão", () => {
        render(<CustomButton label="Padrão" />);

        const button = screen.getByRole("button");

        expect(button).toHaveStyleRule("background-color", "var(--color-primary)");
        expect(button).toHaveStyleRule("color", "var(--background)");
        expect(button).toHaveStyleRule("border-radius", "10px");
    });

    test("aplica corretamente os estilos customizados", () => {
        render(
        <CustomButton
            label="Custom"
            bgColor="#123456"
            bgHover="#654321"
            textColor="#ffffff"
            border="2px solid red"
        />
        );

        const button = screen.getByRole("button");

        expect(button).toHaveStyleRule("background-color", "#123456");
        expect(button).toHaveStyleRule("color", "#ffffff");
        expect(button).toHaveStyleRule("border", "2px solid red");

        expect(button).toHaveStyleRule("background-color", "#654321", {
        modifier: ":hover",
        });
    });

    test("chama onClick quando clicado", () => {
        const handleClick = jest.fn();

        render(<CustomButton label="Click" onClick={handleClick} />);

        fireEvent.click(screen.getByText("Click"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("aplica corretamente variant e size", () => {
        render(<CustomButton label="Teste" variant="outlined" size="large" />);

        const button = screen.getByRole("button");

        expect(button.className).toContain("MuiButton-outlined");
        expect(button.className).toContain("MuiButton-sizeLarge");
    });

    test("aceita props extras do MUI sem quebrar", () => {
        render(<CustomButton label="Desabilitado" disabled />);

        const button = screen.getByRole("button");

        expect(button).toBeDisabled();
    });
});