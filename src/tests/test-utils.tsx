import { ComponentType } from "react";
import { render } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";

export function renderWithRouter(
  ui: ComponentType,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: {
    path?: string;
    route?: string;
    history?: MemoryHistory<unknown>;
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    ),
  };
}
