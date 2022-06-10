import { LanguageRequest, RichTextItemResponse } from "../../notion.types";
import SyntaxHighlighter from 'react-syntax-highlighter';

export type BlockProps = {
    type: "code";
    code: {
        rich_text: Array<RichTextItemResponse>;
        caption: Array<RichTextItemResponse>;
        language: LanguageRequest;
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

const Code: React.FC<Props> = ({ block, strict }) => {
    var code = "";
    for (let index = 0; index < block.code.rich_text.length; index++) {
        const element = block.code.rich_text[index];
        code += element.plain_text;
    }

    return <SyntaxHighlighter data-testid='code-component' language={block.code.language}>
        {code}
    </SyntaxHighlighter>;
};

export default Code;
