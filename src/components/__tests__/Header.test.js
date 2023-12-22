import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be load on rendring header", () => {
  //render the header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  // Check logo is load or not
  const logo = header.getByTestId("logo");
  console.log(logo);

  expect(logo.src).toBe("http://localhost/dummy.png");
});



test("Online Status should be green  on rendring header", () => {
    //render the header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    console.log(header);
    // Check logo is load or not
    const onlineStatus = header.getByTestId("Online-Status");
    console.log(onlineStatus);
  
    expect(onlineStatus.innerHTML).toBe("✅");
  });

  
test("Cart Should have Zero item on rendring header", () => {
    //render the header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    console.log(header);
    // Check logo is load or not
    const cart = header.getByTestId("cart");
    console.log(cart);
  
    expect(cart.innerHTML).toBe("Cart- 0 Items");
  });
