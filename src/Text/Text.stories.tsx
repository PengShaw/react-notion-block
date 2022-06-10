import React from "react";
import Text, { Props } from "./Text";

import "../react-notion-block.scss";

export default {
    title: "TextComponent"
};

const normalProps: Props = {
    text: {
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
};

export const NormalRichText = () => <Text {...normalProps} />;
