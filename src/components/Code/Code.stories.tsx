import React from "react";
import Code, { Props } from "./Code";

import "../../react-notion-block.scss";


export default {
    title: "CodeComponent"
};

const normalProps: Props = {
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

export const NormalCode = () => <Code {...normalProps} />;
