import { ApiColor, RichTextItemResponse } from "../../notion.types";
import Text from "../../Text/Text";

export type BlockProps = {
    type: "to_do";
    to_do: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        checked: boolean;
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

const Todo: React.FC<Props> = ({ block, strict }) => {
    return <div data-testid='todo-component' className={`rnb-text-color-${block.to_do.color}`} >
        <input type="checkbox" defaultChecked={block.to_do.checked} />{" "}
        {block.to_do.rich_text.map(
            (item, index) => (
                <Text key={`${block.id}-${index}`} text={item} strict={strict} />)
        )}
    </div>;
};

export default Todo;
