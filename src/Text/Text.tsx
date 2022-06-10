import React from "react";

import { RichTextItemResponse } from "../notion.types";

export interface Props {
    text: RichTextItemResponse;
    strict?: boolean;
}

const Text: React.FC<Props> = ({ text, strict }) => {
    if (text.type === "text") {
        const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text: { content, link },
        } = text;
        const className = [
            "rnb-text",
            bold ? "rnb-text-bold" : "",
            code ? "rnb-text-code" : "",
            italic ? "rnb-text-italic" : "",
            strikethrough ? "rnb-text-strikethrough" : "",
            underline ? "rnb-text-underline" : "",
            color ? `rnb-text-color-${color}` : "",
        ].join(" ")

        if (link !== null) {
            return (<a href={link.url} className={className} data-testid='text-component'>{content}</a>);
        }
        else {
            return (<span className={className} data-testid='text-component'>{content}</span>);
        }
    }

    if (strict === true) {
        throw new Error(`not implement: type ${text.type}`);
    }

    return (<div data-testid='text-component'></div>);
};

export default Text;
