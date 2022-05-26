//TODO: Add custom render
import App from "./App";
import { render } from "./_shared/testConfig/customRender";

function mockFetch(response?: Object) {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify(response || {}),
    })
  );
}

describe("App", () => {
  mockFetch();
  test("Should be rendered", () => {
    render(<App />);
  });
});
