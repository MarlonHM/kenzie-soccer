import { render, screen, waitFor } from "@testing-library/react";
import Button from "../../components/Button";

describe("Testing the component Button", () => {
  test("should be able to render", async () => {
    render(<Button titleButton="titulo para renderização" primary />);

    const button = screen.findByRole("button");

    waitFor(() => expect(getByTestId("Your-Test-Id")).toBeInTheDocument());
  });
});
