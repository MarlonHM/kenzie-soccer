import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import Providers from "../providers";

const mockSignUp = jest.fn();

// jest.mock("../providers/User", () => {
//   return {
//     useUser: () => ({
//       login: data => {
//         return {
//           email: "email@email.com",
//           password: "123456"
//         };
//       }
//     })
//   };
// });

describe("Test for the page Login", () => {
  test("Login is working", async () => {
    render(
      <BrowserRouter>
        <Providers>
          <SignUp />
        </Providers>
      </BrowserRouter>
    );

    const name = screen.getByPlaceholderText("Neymar Jr");
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Senha");
    const conf_password = screen.getByPlaceholderText("Confirmar senha");
    const button = screen.getByText("Cadastrar");

    act(() => {
      userEvent.type(name, "teste");
      userEvent.type(email, "email3@email.com");
      userEvent.type(password, "123456");
      userEvent.type(conf_password, "123456");
      fireEvent.click(button);
    });

    const dataName = await screen.findByDisplayValue("teste");
    const dataEmail = await screen.findByDisplayValue("email3@email.com");
    const dataPassword = await screen.findAllByDisplayValue("123456");

    waitFor(() => {
      expect(dataName).toBeInTheDocument();
      expect(dataEmail).toBeInTheDocument();
      expect(dataPassword).toBeInTheDocument();

      expect(mockLogin).toHaveBeenCalled;
    });
  });
});
