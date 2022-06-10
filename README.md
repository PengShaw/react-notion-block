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
