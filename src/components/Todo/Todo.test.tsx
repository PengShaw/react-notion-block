import React from "react";
import { render } from "@testing-library/react";

import Todo, { Props } from "./Todo";


describe("Text Component", () => {
    var props: Props

    beforeEach(() => {
        props = {
            block: {
                type: "to_do",
                to_do: {
                    rich_text: [{
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
                    }],
                    color: "yellow",
                    checked: true,
                },
                object: "block",
                id: "todo",
                created_time: "20220607T00:00:00Z",
                created_by: {
                    id: "user-id",
                    object: "user",
                },
                last_edited_time: "20220607T00:00:00Z",
                last_edited_by: {
                    id: "user-id",
                    object: "user",
                },
                has_children: false,
                archived: false,
            }
        };
    });

    const renderComponent = () => render(<Todo {...props} />);

    it("should render todo normally", () => {
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("todo-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toContainHTML("div");
        expect(textComponent).toContainHTML("input");
    });
});
