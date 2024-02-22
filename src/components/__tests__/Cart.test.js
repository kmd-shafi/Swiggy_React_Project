import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockresmenu.json";
import { Provider } from "react-redux";
import appstore from "../../utils/appstore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load res menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Sandwich (5)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("fooditems").length).toBe(5);

  expect(screen.getByText("🛒 (0 items)")).toBeInTheDocument();

  const addbtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addbtns[0]);

  expect(screen.getByText("🛒 (1 items)")).toBeInTheDocument();

  fireEvent.click(addbtns[1]);

  expect(screen.getByText("🛒 (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("fooditems").length).toBe(5);

  expect(
    screen.getByText("Card is empty. Add Items to the Card 🐶")
  ).toBeInTheDocument();
});
