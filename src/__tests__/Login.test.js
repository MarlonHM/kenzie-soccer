import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";
// import UserProvider from "../providers/User";

const mockLogin = jest.fn();

jest.mock("../providers/User", () => {
  return {
    useUser: () => ({
      login: data => {
        return {
          email: "email@email.com",
          password: "123456"
        };
      }
    })
  };
});

describe("Test for the page Login", () => {
  test("Login is working", async () => {
    render(<Login />);

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Senha");
    const button = screen.getByText("Enviar");

    act(() => {
      userEvent.type(email, "email@email.com");
      userEvent.type(password, "123456");
      fireEvent.click(button);
    });

    const dataEmail = await screen.findByDisplayValue("email@email.com");
    const dataPassword = await screen.findByDisplayValue("123456");

    waitFor(() => {
      expect(dataEmail).toBeInTheDocument();
      expect(dataPassword).toBeInTheDocument();

      expect(mockLogin).toHaveBeenCalled;
    });
  });
});
