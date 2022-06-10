import React from "react";
import Paragraph from "../components/Paragraph/Paragraph";
import Heading from "../components/Heading/Heading";
import List from "../components/List/List";
import Todo from "../components/Todo/Todo";
import Code from "../components/Code/Code";

import { BlockObjectResponse, PartialBlockObjectResponse } from "../notion.types";

export interface Props {
    block: PartialBlockObjectResponse | BlockObjectResponse;
    strict?: boolean;
};

const Block: React.FC<Props> = ({ block, strict }) => {
    if (block.hasOwnProperty('type')) {
        const blockObject = block as BlockObjectResponse;
        switch (blockObject.type) {
            case "paragraph":
                return <Paragraph block={blockObject} strict={strict} />;
            case "heading_1":
            case "heading_2":
            case "heading_3":
                return <Heading block={blockObject} strict={strict} />;
            case "bulleted_list_item":
            case "numbered_list_item":
                return <List block={blockObject} strict={strict} />;
            case "to_do":
                return <Todo block={blockObject} strict={strict} />;
            case "code":
                return <Code block={blockObject} strict={strict} />;
            default:
                if (strict === true) {
                    throw new Error(`not implement: type ${blockObject.type}`);
                }
                return (<div data-testid='block-component'></div>);
        }
    } else {
        if (strict === true) {
            throw new Error(`not implement: type PartialBlockObjectResponse`);
        }
        return (<div data-testid='block-component'></div>);
    }


};

export default Block;
