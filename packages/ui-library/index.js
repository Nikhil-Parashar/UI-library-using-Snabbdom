// packages/ui-library/index.js

import {
  init,
  propsModule,
  eventListenersModule,
} from "../../node_modules/snabbdom/build/index.js ";

const patch = init([propsModule, eventListenersModule]);

export const createApp = (template, initialState) => {
  let state = initialState;
  let vnode;

  const updateState = (newState) => {
    state = { ...state, ...newState };
    render();
    console.log("State updated:", state);
  };

  const render = () => {
    const newVnode = template({ state, updateState });
    vnode = patch(vnode || document.getElementById("app"), newVnode);
  };

  const mount = (element) => {
    vnode = patch(element, template({ state, updateState }));
    console.log("Component mounted");
  };

  return { render, mount };
};
