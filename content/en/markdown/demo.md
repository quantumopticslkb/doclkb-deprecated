---
title: Components
description: ''
position: 10
category: Markdown
items:
  - Item1
  - Item2
  - Item3
---
# Titre 1: Very Large
## Titre 2: First level
### Titre 3 : second level
#### Titre 4 : not in the menu

``` markdown
# Titre 1: Very Large
## Titre 2: First level
### Titre 3 : second level
#### Titre 4 : not in the menu
```


## Alert


### Blue
<alert type="info">Info</alert> (info is the default value)
```markdown 
<alert type="info">Info</alert> (info is the default value)
```

### Other colors
<alert type="warning">Warning</alert>
<alert type="success">Success</alert>
<alert type="danger">Danger</alert>

```markdown 
<alert type="warning">Warning</alert>
<alert type="success">Success</alert>
<alert type="danger">Danger</alert>
```


## Items
<list :items="items" type="info"></list>
<list :items="items" type="success"></list>
```markdown
<list :items="items" type="info"></list>
<list :items="items" type="success"></list>
```

## Badge
<badge>v1.2+</badge>

```markdown
<badge>v1.2+</badge>
```

## Code

<code-group>
  <code-block label="Bash" active>

  ```bash
  Mon code bash
  ```

  </code-block>
  <code-block label="Python">

  ```python
  for item in items:
    pass 
  ```

  </code-block>
</code-group>

## Markdown

```markdown
normal text 
**bold text**
*italic text*
~~The world is flat.~~
```

normal text 

**bold text**

*italic text*

~~The world is flat.~~

---

> Citation 

```markdown
> Citation 
```

---

1. First item
2. Second item
3. Third item

```markdown
1. First item
2. Second item
3. Third item
```
---


- First item
- Second item
- Third item
    - indented item

```markdown
- First item
- Second item
- Third item
    - indented item
```
---
## Link

[arxiv](https://www.arxiv.org)

```markdown
[arxiv](https://www.arxiv.org)
```


## a bit more complex

### Tableau


| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |

```markdown
| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |
```
### Footnote 
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.

```markdown
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.
```

### Task list
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

