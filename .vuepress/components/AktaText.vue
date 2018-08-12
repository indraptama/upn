<template>
  <div class="AktaText">
    
        <slot></slot>
    
  </div>
</template>

<script>
export default {
  props:[],
  mounted() {
    const TextP = this.$el.querySelectorAll('p');
    const TextList = this.$el.querySelectorAll('li');

    for (const Text of TextP) {
      const content = Text.innerHTML
      const newContent = '<span class="AktaText-text">'+ content +'</span>'
      Text.innerHTML = newContent;
    }

    for (const Text of TextList) {
      const content = Text.innerHTML
      const newContent = '<span class="AktaText-text">'+ content +'</span>'
      Text.innerHTML = newContent;
    }
  },
}
</script>

<style>


.AktaText {
  font-family: 'Courier New', Courier, monospace;
  /* font-size: 14px; */
  
  background-color: #f4f4f4;
  padding: 0.1rem 1.5rem;
  border-left: 0.5rem solid #aaa;
}

.AktaText p,
.AktaText li {
  /* background-image: url('/dashline-s.svg'); */
  background: linear-gradient(to bottom, rgba(0,0,0,0) 49%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 52%);
  background-repeat: repeat;
  background-size: 8px 2em;
  background-position: 0 0;
  line-height : 2em;
}

@media (min-width: 1400px) {
  .AktaText {
    font-size: 16px;
  }
  .AktaText p,
  .AktaText li {
    background-size: 5px 2em;
  }
}


.AktaText-text {
  display: inline;
  padding: .35em 0;
  background-color: #f4f4f4;
}

</style>
