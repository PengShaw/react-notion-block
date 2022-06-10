import React from "react";
import { render } from "@testing-library/react";

import Paragraph, { Props } from "./Paragraph";


describe("Text Component", () => {
    let props: Props;

    beforeEach(() => {
        props = {
            block: {
                type: "paragraph",
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
                paragraph: {
                    rich_text: [
                        {
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
                    ],
                    color: "brown",
                },
            }
        };
    });

    const renderComponent = () => render(<Paragraph {...props} />);

    it("should render normally", () => {
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("paragraph-component");
        expect(textComponent).toHaveTextContent("rich text");
    });
});
