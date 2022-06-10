import React from "react";
import Paragraph from "../components/Paragraph/Paragraph";
import Heading from "../components/Heading/Heading";
import List from "../components/List/List";
import Todo from "../components/Todo/Todo";
import Code from "../components/Code/Code";

import { BlockObjectResponse } from "../notion.types";

export interface Props {
    block: BlockObjectResponse;
    strict?: boolean;
};

const Block: React.FC<Props> = ({ block, strict }) => {
    switch (block.type) {
        case "paragraph":
            return <Paragraph block={block} strict={strict} />;
        case "heading_1":
        case "heading_2":
        case "heading_3":
            return <Heading block={block} strict={strict} />;
        case "bulleted_list_item":
        case "numbered_list_item":
            return <List block={block} strict={strict} />;
        case "to_do":
            return <Todo block={block} strict={strict} />;
        case "code":
            return <Code block={block} strict={strict} />;
        default:
            if (strict === true) {
                throw new Error(`not implement: type ${block.type}`);
            }
            return (<div data-testid='block-component'></div>);
    }
};

export default Block;
