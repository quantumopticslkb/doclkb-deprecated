<template>
  <a :href="pdfSrc"> {{label}}  </a>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  },
  computed: {
    pdfSrc() {
        return "/pdf/" + this.src
      }
    },
}
</script>

