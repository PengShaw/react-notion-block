import React from "react";
import { render } from "@testing-library/react";

import Heading, { Props } from "./Heading";
import { RichTextItemResponse } from "../../notion.types";


describe("Text Component", () => {
    var props: any
    var rich_text: Array<RichTextItemResponse> = [
        {
            type: "text",
            text: {
                content: "rich text in heading",
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
                id: "heading",
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

    const renderComponent = () => render(<Heading {...(props as Props)} />);

    it("should render h1 normally", () => {
        props.block.type = "heading_1";
        props.block.heading_1 = {
            rich_text: rich_text,
            color: "brown",
        };
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("heading-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toContainHTML("h1");
    });

    it("should render h2 normally", () => {
        props.block.type = "heading_2";
        props.block.heading_2 = {
            rich_text: rich_text,
            color: "brown",
        };
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("heading-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toContainHTML("h2");
    });

    it("should render h3 normally", () => {
        props.block.type = "heading_3";
        props.block.heading_3 = {
            rich_text: rich_text,
            color: "brown",
        };
        const { getByTestId } = renderComponent();
        const textComponent = getByTestId("heading-component");
        expect(textComponent).toHaveTextContent("rich text");
        expect(textComponent).toContainHTML("h3");
    });
});
