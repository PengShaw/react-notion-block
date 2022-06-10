import { ApiColor, RichTextItemResponse } from "../../notion.types";
import Text from "../../Text/Text";

export type BlockProps = {
    type: "heading_1";
    heading_1: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
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
} | {
    type: "heading_2";
    heading_2: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
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
} | {
    type: "heading_3";
    heading_3: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    object: "block";
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

const Heading: React.FC<Props> = ({ block, strict }) => {
    switch (block.type) {
        case "heading_1":
            return <h1 data-testid='heading-component' className={`rnb-text-color-${block.heading_1.color}`}>
                {block.heading_1.rich_text.map((item, index) => (
                    <Text key={`${block.id}-${index}`} text={item} strict={strict} />
                ))}
            </h1>;
        case "heading_2":
            return <h2 data-testid='heading-component' className={`rnb-text-color-${block.heading_2.color}`}>
                {block.heading_2.rich_text.map((item, index) => (
                    <Text key={`${block.id}-${index}`} text={item} strict={strict} />
                ))}
            </h2>;
        case "heading_3":
        default:
            return <h3 data-testid='heading-component' className={`rnb-text-color-${block.heading_3.color}`}>
                {block.heading_3.rich_text.map((item, index) => (
                    <Text key={`${block.id}-${index}`} text={item} strict={strict} />
                ))}
            </h3>
    }
};

export default Heading;
