import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./Hello";


let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("renders with or without a name", () => {
    act(() => {
        render(<Hello/>, container);
    });
    expect(container.textContent).toBe("Hey stranger!");

    act(() => {
        render(<Hello name="Calin"/>, container);
    });
    expect(container.textContent).toBe("Hello, Calin!");

    act(() => {
        render(<Hello name="Bogdan"/>, container);
    });
    expect(container.textContent).toBe("Hello, Bogdan!");
})
