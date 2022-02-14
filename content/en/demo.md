---
title: Demo Page
description: ''
position: 3
category: Elements
items:
  - Item1
  - Item2
  - Item3
---
# Titre 1: Elements

## Titre 2: Alert

### Titre 3 : bleu
<alert type="info">Info</alert> (info is the default value)
### Titre 3 : les autres
<alert type="warning">Warning</alert>
<alert type="success">Success</alert>
<alert type="danger">Danger</alert>

## Items

<list :items="items" type="info"></list>
<list :items="items" type="success"></list>

## Badge
<badge>v1.2+</badge>


## Code

<code-group>
  <code-block label="Bash" active>

  ```bash
  Mon code bash
  ```

  </code-block>
  <code-block label="Python">

  ```python
  for item in items 
  ```

  </code-block>
</code-group>

## Markdown

normal text 

**bold text**

*italic text*

~~The world is flat.~~

---

> Citation 

---

1. First item
2. Second item
3. Third item

---


- First item
- Second item
- Third item
    - indented item

---

[arxiv](https://www.arxiv.org)

## a bit more complex

### Tableau


| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |

### Footnote 
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.

### Task list
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

