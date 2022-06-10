import React from "react";
import List, { Props } from "./List";

import "../../react-notion-block.scss";
import { RichTextItemResponse } from "../../notion.types";


export default {
    title: "ListComponent"
};


const getProps = (type: "bulleted_list_item" | "numbered_list_item") => {
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
    var baseProps: any = {
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

    switch (type) {
        case "numbered_list_item":
            baseProps.block.type = "bulleted_list_item";
            baseProps.block.bulleted_list_item = {
                rich_text: rich_text,
                color: "brown",
            };
            break;
        case "numbered_list_item":
        default:
            baseProps.block.type = "numbered_list_item";
            baseProps.block.numbered_list_item = {
                rich_text: rich_text,
                color: "brown",
            };
            break;
    }
    return (baseProps as Props)
}


export const BulletedList = () => <ul><List {...getProps("bulleted_list_item")} /></ul>;
export const NumberedList = () => <ol><List {...getProps("numbered_list_item")} /></ol>;
