<template>
  <div class="badge">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.badge {
  position: absolute;
  right: 10px;
  font-weight: 700;
  top: 5px;
}

.badge span {
  font-size: 0.7rem;
  padding: 4px 8px;
  background: #ffffff;
  border-radius: 3px;
}
</style>
