import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("Deve renderizar o título bem vindo", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Bem-vindo ao RN + Vacina Cidadão/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
