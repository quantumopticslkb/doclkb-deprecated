---
title: Images and Link
description: 'Images and Link'
category: Markdown
position: 10
# version: 1.5
fullscreen: false
menuTitle: Images and Link
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


<a href="/fig1.pdf" download=""> down qlink </a>