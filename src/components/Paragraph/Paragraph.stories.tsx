import React from "react";
import Paragraph, { Props } from "./Paragraph";

import "../../react-notion-block.scss";


export default {
    title: "ParagraphComponent"
};

const normalProps: Props = {
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

export const NormalParagraph = () => <Paragraph {...normalProps} />;
