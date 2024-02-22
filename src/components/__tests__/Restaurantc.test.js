import { render, screen } from "@testing-library/react";
import Restaurantc from "../Restaurantc";
import MOCK_DATA from "../mocks/rescardmock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<Restaurantc resData={MOCK_DATA} />);

  const name = screen.getByText("Rambharose - Bhattad Ki Idli");

  expect(name).toBeInTheDocument();
});
