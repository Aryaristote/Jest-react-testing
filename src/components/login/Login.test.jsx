import { toHaveTextContent } from "@testing-library/jest-dom/matchers";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
    __esModule: true,

    default: {
        get: () => ({
            data: { id: 1, name: "John" }
        })
    }
}))

test("Username input should be rendered", () => {
    render(<Login />);
    const username = screen.getByPlaceholderText("Username");
    expect(username).toBeInTheDocument();
});

test("Password input should be rendered", () => {
    render(<Login />);
    const username = screen.getByPlaceholderText("Password");
    expect(username).toBeInTheDocument();
});

test("Button should be rendered", () => {
    render(<Login />);
    const username = screen.getByRole("button");
    expect(username).toBeInTheDocument();
});

test("Loading should not be rendered", () => {
    render(<Login />);
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).not.toHaveTextContent(/Loading/i);
});

test("Button should be disabled", () => {
    render(<Login />);
    const disableBtn = screen.getByRole("button");
    expect(disableBtn).toBeDisabled();
})

test("Error messsage should be visibled", () => {
    render(<Login />);
    const errorMsg = screen.getByTestId("error");
    expect(errorMsg).not.toBeVisible();
})

test("Username input should change", () => {
    render(<Login />);
    const username = screen.getByPlaceholderText("Username");
    const testValue = "Kalume";

    fireEvent.change(username, { target: { value: testValue } });
    expect(username.value).toBe(testValue);
});

test("Password input should change", () => {
    render(<Login />);
    const passwoord = screen.getByPlaceholderText("Password");
    const testValue = "111";

    fireEvent.change(passwoord, { target: { value: testValue } });
    expect(passwoord).toBeInTheDocument();
});

test("Button should not be disable when input are field", () => {
    render(<Login />);
    const disableBtn = screen.getByRole("button");
    const passwoord = screen.getByPlaceholderText("Password");
    const username = screen.getByPlaceholderText("Username");
    const testValue = "test";

    fireEvent.change(username, { target: { value: testValue } });
    fireEvent.change(passwoord, { target: { value: testValue } });
    expect(disableBtn).not.toBeDisabled();
});

test("Loading should be render when click submit", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    expect(buttonEl).toHaveTextContent(/Loading/i);
});

test("Loading should be render after fetching request", async () => {
    render(<Login />);
    const submitBtn = screen.getByRole("button");
    const passwoord = screen.getByPlaceholderText("Password");
    const username = screen.getByPlaceholderText("Username");
    const testValue = "test";

    fireEvent.change(username, { target: { value: testValue } });
    fireEvent.change(passwoord, { target: { value: testValue } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
        expect(submitBtn).not.toHaveTextContent(/Loading/i);
    })
});