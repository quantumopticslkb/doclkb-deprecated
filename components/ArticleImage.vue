<template>
    <img :src="imgSrc()" :alt="alt" :style="cssProps2" class="article-image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    size: {
      type: Number,
    },
    center: {
      type: Boolean,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`../assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  },
  computed: {
    cssProps() {
      return {
        '--image-size': this.size + "%",
        '--margin': this.center,
      }
    },
    cssProps2() {
      if (this.center)
      { return  {
        '--margin': 'auto', 
        '--image-size': this.size + "%"
        }
      }
      return  { '--image-size': this.size + "%"} 
    },
  },

}
</script>

<style scoped>
.article-image {
  /* width: 100%; */
  width: var(--image-size);
  margin: 10px var(--margin);
  /* border: 1px solid #fcfcfc; */
  /* border-radius: 1px; */
  /* margin: 10px auto; */
}
</style>