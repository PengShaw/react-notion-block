import React from "react";
import { render } from "@testing-library/react";

import Text, { Props } from "./Text";


describe("Text Component", () => {
    let props: Props;

    beforeEach(() => {
        props = {
            text: {
                type: "text",
                text: {
                    content: "rich text",
                    link: {
                        url: "http://github.com",
                    },
                },
                annotations: {
                    bold: true,
                    italic: true,
                    strikethrough: true,
                    underline: true,
                    code: true,
                    color: "orange",
                },
                plain_text: "rich text",
                href: "http://github.com",
            }
        };
    });

    const renderComponent = () => render(<Text {...props} />);

    it("should render normally", () => {
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("text-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toHaveClass("rnb-text");
        expect(textComponent).toHaveClass("rnb-text-bold");
        expect(textComponent).toHaveClass("rnb-text-italic");
        expect(textComponent).toHaveClass("rnb-text-strikethrough");
        expect(textComponent).toHaveClass("rnb-text-underline");
        expect(textComponent).toHaveClass("rnb-text-code");
        expect(textComponent).toHaveClass("rnb-text-color-orange");
    });

    it("should render empty div", () => {
        props.text.type = "equation";
        const { getByTestId } = renderComponent();
        const _ = getByTestId("text-component");
    });

    it("should throw error", () => {
        const originalError = console.error;
        console.error = jest.fn();

        props.text.type = "equation";
        props.strict = true;
        expect(renderComponent).toThrowError("not implement: type equation");

        console.error = originalError;
    });
});
