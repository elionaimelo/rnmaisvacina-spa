import { render, screen } from "@testing-library/react";

import { Header } from "./header";

describe("<Header />", () => {
  it("Deve verificar o título do banner", () => {
    render(<Header />);
    // expect(
    //   screen.getByRole("heading", { name: /RN + VACINA/i })
    // ).toBeInTheDocument();
    const title = screen.getByText("react");
    expect(title).toBeInTheDocument();
  });
});
