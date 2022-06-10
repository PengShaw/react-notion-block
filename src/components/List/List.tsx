import { ApiColor, RichTextItemResponse } from "../../notion.types";
import Text from "../../Text/Text";

export type BlockProps = {
    type: "bulleted_list_item";
    bulleted_list_item: {
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
    type: "numbered_list_item";
    numbered_list_item: {
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
};

export interface Props {
    block: BlockProps;
    strict?: boolean;
};

const List: React.FC<Props> = ({ block, strict }) => {
    var list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };

    switch (block.type) {
        case "bulleted_list_item":
            list_item = block.bulleted_list_item;
            break;
        case "numbered_list_item":
            list_item = block.numbered_list_item;
            break;
    };


    return <li data-testid='list-component' className={`rnb-text-color-${list_item.color}`}>
        {list_item.rich_text.map((item, index) => (
            <Text key={`${block.id}-${index}`} text={item} strict={strict} />
        ))}
    </li>;
};

export default List;
