import React from "react";
import { render } from "@testing-library/react";

import List, { Props } from "./List";
import { RichTextItemResponse } from "../../notion.types";


describe("Text Component", () => {
    var props: any
    var rich_text: Array<RichTextItemResponse> = [
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
    ];

    beforeEach(() => {
        props = {
            block: {
                object: "block",
                id: "list",
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

    const renderComponent = () => render(<List {...(props as Props)} />);

    it("should render bulleted_list_item normally", () => {
        props.block.type = "bulleted_list_item";
        props.block.bulleted_list_item = {
            rich_text: rich_text,
            color: "brown",
        };
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("list-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toContainHTML("li");
    });

    it("should render numbered_list_item normally", () => {
        props.block.type = "numbered_list_item";
        props.block.numbered_list_item = {
            rich_text: rich_text,
            color: "brown",
        };
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("list-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toContainHTML("li");
    });
});
