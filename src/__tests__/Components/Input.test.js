import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";

describe("testing the component Input", () => {
  test("should be", () => {
    render(
      <Input
        label="Teste:"
        name="teste"
        placeholder="teste"
        register={() => {
          console.log("teste");
        }}
      />
    );

    const input = screen.getByPlaceholderText("teste");

    expect(input).toBeInTheDocument();
  });
});
