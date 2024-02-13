// packages/ui-library-demo/index.js

import { createApp } from "../ui-library/index.js";
import { h } from "../../node_modules/snabbdom/build/index.js ";

const template = ({ state, updateState }) =>
  h("div", [
    h("h1", state.count),
    h(
      "button",
      { on: { click: () => updateState({ count: state.count + 1 }) } },
      "Add"
    ),
  ]);

const app = createApp(template, { count: 0 });

app.mount(document.getElementById("app"));
