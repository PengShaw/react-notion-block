import React from "react";
import Heading, { Props } from "./Heading";

import "../../react-notion-block.scss";
import { RichTextItemResponse } from "../../notion.types";


export default {
    title: "HeadingComponent"
};


const getProps = (type: "heading_1" | "heading_2" | "heading_3") => {
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
    var baseProps: any = {
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

    switch (type) {
        case "heading_1":
            baseProps.block.type = "heading_1";
            baseProps.block.heading_1 = {
                rich_text: rich_text,
                color: "brown",
            };
            break;
        case "heading_2":
            baseProps.block.type = "heading_2";
            baseProps.block.heading_2 = {
                rich_text: rich_text,
                color: "brown",
            };
            break;
        case "heading_3":
        default:
            baseProps.block.type = "heading_3";
            baseProps.block.heading_3 = {
                rich_text: rich_text,
                color: "brown",
            };
            break;
    }
    return (baseProps as Props)
}


export const H1Heading = () => <Heading {...getProps("heading_1")} />;
export const H2Heading = () => <Heading {...getProps("heading_2")} />;
export const H3Heading = () => <Heading {...getProps("heading_3")} />;
