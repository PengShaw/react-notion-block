import React from "react";
import Todo, { Props } from "./Todo";

import "../../react-notion-block.scss";


export default {
    title: "TodoComponent"
};


const props: Props = {
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


export const NormalTodo = () => <Todo {...props} />;
