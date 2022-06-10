import React from "react";
import { render } from "@testing-library/react";

import Code, { Props } from "./Code";


describe("Code Component", () => {
    let props: Props;

    beforeEach(() => {
        props = {
            block: {
                type: "code",
                object: "block",
                id: "test-id",
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
                code: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: "print('hello')",
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
                            plain_text: "print('hello')",
                            href: "http://github.com",
                        }
                    ],
                    caption: [],
                    language: "python",
                },
            }
        };
    });

    const renderComponent = () => render(<Code {...props} />);

    it("should render normally", () => {
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("code-component");
        expect(textComponent).toHaveTextContent("print('hello')");
    });
});
