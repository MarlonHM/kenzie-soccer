import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Testing the component Button", () => {
  test("should be able to render", () => {
    render(<Button name="titulo para renderização" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
