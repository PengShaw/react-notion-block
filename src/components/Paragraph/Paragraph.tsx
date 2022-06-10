import React from "react";
import { ApiColor, RichTextItemResponse } from "../../notion.types";
import Text from "../../Text/Text";

export interface BlockProps {
    type: "paragraph";
    object: "block";
    paragraph: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    id: string;
    created_time: string;
    created_by: {
        id: string;
        object: "user";
    };
    last_edited_time: string;
    last_edited_by: {
        id: string;
        object: "user";
    };
    has_children: boolean;
    archived: boolean;
}


export interface Props {
    block: BlockProps;
    strict?: boolean;
};

const Paragraph: React.FC<Props> = ({ block, strict }) => {
    return <p data-testid='paragraph-component' className={`rnb-text-color-${block.paragraph.color}`}>
        {block.paragraph.rich_text.map((item, index) => (
            <Text key={`${block.id}-${index}`} text={item} strict={strict} />
        ))}
    </p>;
};

export default Paragraph;
