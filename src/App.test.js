import { render } from '@testing-library/react';
import App from './App';

describe("App Test", function () {
  it("renders without crashing", function () {
    render(<App />);
  });
});
