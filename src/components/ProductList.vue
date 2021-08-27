<template>
  <div class="carousel__container">
    <div class="titles">
      <span class="titles__text">{{title}}</span>
    </div>
    <div class="carousel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style scoped>
.carousel__container {
  
  display: block;
  overflow: hidden;
}
.carousel {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: white;
  margin: 0;
}

.titles {
  display: flex;
  justify-content: space-between;
  margin: 12px;
}

.titles__text {
  font-weight: bold;
}

.titles__link {
  color: inherit;
  text-transform: capitalize;
}

* {
  scrollbar-width: auto;
  scrollbar-color: #b1b1b1 #ffffff;
}

*::-webkit-scrollbar {
  width: 18px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #b1b1b1;
  border-radius: 7px;
  border: 6px solid #ffffff;
}



</style>
