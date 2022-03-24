---
title: Images, Link, Files
description: 'Images and Link'
category: Doc tutorial
position: 10
# version: 1.5
fullscreen: false
menuTitle: Images, Link, Files
---

## Include an image
<img src="/logoHouches.jpg" alt="logo les Houches">
<article-image src="logoHouches.jpg" alt="logo les Houches" size="25" :center="false"></article-image>

```html
<article-image src="logoHouches.jpg" alt="logo les Houches" 
size="25" :center="false">
</article-image>
```

- ```src``` = path to image (inside /assets/images/)
- ```alt``` = for google and old browser (if image cannot be shown)
- ```size``` = size in %
- ```center``` = true/false to center the image

## Include a Link
Both techniques are fine.

### Nuxt Link
<NuxtLink to="/Members/marianna"> Link Name </NuxtLink>

```html
<NuxtLink to="/Members/marianna"> Link Name </NuxtLink>
```

The path is relative to the /content/en/ folder


### Markdown Link

[Link Name](/Members/marianna)

```md
[Link Name](/Members/marianna)
```
The path is relative to the /content/en/ folder


## Include a file to download

<pdf-link src="PDFvide.pdf" label="My label" > </pdf-link>


```md
<pdf-link src="PDFvide.pdf" label="My label" > </pdf-link>
```
Put the file in the ```/static/pdf/``` \
The path is relative to the ```/static/pdf/``` folder (even if its a .doc, .xls .whatever)


