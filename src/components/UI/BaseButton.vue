<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  display: block;
  font-size: 0.8em;
  color: #000000;
  line-height: 35px;
  letter-spacing: 1.5px;
  background-color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid black;
  width: 100%;
  cursor: pointer;
}
.btn:hover {
  background: #000000;
  color: #ffffff;
}
button:disabled {
  background: #fafafa;
  color: #d9d9d9;
  cursor: not-allowed;
  border: 1px solid #d9d9d9;
}
button:disabled:hover {
  background: #fafafa;
  color: #d9d9d9;
}

@media screen and (max-width: 800px) {
  .btn {
    font-size: 0.7em;
  }
}

@media screen and (max-width: 375px) {
  .btn {
    height: 36px;
    font-size: 0.7em;
  }
}
</style>
