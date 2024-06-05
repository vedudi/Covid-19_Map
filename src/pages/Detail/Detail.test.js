import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Detail from ".";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { storeData } from "../../utils/api";

const mockStore = configureStore([thunk]);

it("loader bileşenlerinin ekrana basılma testi", () => {
  const store = mockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );
  screen.getByTestId("header-loader");
  screen.getAllByTestId("card-loader");
});

it("ülke bilgisi ve kartların ekrana basılma testi", () => {
  const store = mockStore(storeData);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );
  const img= screen.getByRole("img");
  expect(img).toHaveProperty("src",storeData.data.country.flags.png)
  screen.getByText(storeData.data.country.altSpellings[1])
  const arr=Object.entries(storeData.data.covid)
  arr.forEach((item)=>{
    screen.getByText(item[0].split("_").join("-"));
    screen.getAllByText(item[1]);
  })

});

it("error bileşeninin ekrana basılma testi", () => {
  const store = mockStore({
    isLoading: false,
    error: "404 not found",
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );
  screen.getByText(/404 not found/i);

});

