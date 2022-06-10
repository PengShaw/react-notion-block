# react-notion-block
A react library to render notion block, support Notion [Official API](https://developers.notion.com/).

## Description

There are many examples to build personal blog by using Notion as CMS. Most of them use [notion-client](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-client) to query Notion data and [react-notion-x](https://github.com/NotionX/react-notion-x) to render pages. This is a reliable and effective solution.

Last year, Notion published its own [Official API](https://developers.notion.com/), which can be used to query Notion data. However, a library to render pages in this solution is necessary. This lib is designed to solve this problem.

## Installation

```sh
npm install react-notion-block
```

## Usage

### Quick Start

Here is an example for nextjs.
```typescript
import type { NextPage } from 'next'

import { Client } from "@notionhq/client";
import { Block } from "react-notion-block";
import { BlockObjectResponse, PartialBlockObjectResponse, ListBlockChildrenResponse } from 'react-notion-block/build/notion.types';

const notion = new Client({ auth: process.env.NOTION_TOKEN })

const getBlocks = async (blockId: string) => {
  var blocks: Array<PartialBlockObjectResponse | BlockObjectResponse> = [];
  var has_more = true;
  var start_cursor: string | undefined = undefined;
  while (has_more) {
    const response: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
      start_cursor
    });
    has_more = response.has_more;
    start_cursor = response.next_cursor ? response.next_cursor : undefined;
    blocks.push(...response.results);
  }
  return blocks;
}


interface Props {
  blocks: Array<PartialBlockObjectResponse | BlockObjectResponse>;
}

export async function getServerSideProps() {
  const blocks = await getBlocks('4c9f9730-61a6-408d-9a4e-210cab203782');

  return {
    props: { blocks },
  }
}

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      {
        props.blocks.filter(item => "type" in item).map((item, index) => (
          <Block key={index} block={item} strict={true} />
        ))
      }
    </div>
  )
}

export default Home
```

## Supported blocks

### Rich Text

| Type | Supported | Element |
| --------- | ------------- | ------------- |
| text	| ✅ | `span` without link <br/> `a` without link |
| mention	| ❌ | |
| equation	| ❌ | |

### Blocks

| Type | Supported | Element |
| --------- | ------------- | ------------- |
| paragraph	| ✅ | `p` |
| heading_1	| ✅ | `h1` |
| heading_2	| ✅ | `h2` |
| heading_3	| ✅ | `h3` |
| bulleted_list_item	| ✅ | `li` |
| numbered_list_item	| ✅ | `li` |
| to_do	| ✅ | `<div> <input /> <Tetx /> </div>` |
