<template>
  <footer class="flex footer">
    <div class="flex">
      <div class="logo">
        <a href="#"><h1>Gorgeous</h1></a>
      </div>
    </div>

    <div class="flex" width="100%">
      <p color="white" style="display:inline;">
        Created with
        <span class="material-icons" style="">
          favorite
        </span>
        by Mustafa
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}

.logo {
  font-size: 2em;
}
.footer {
  width: 100vw;
  padding: 1rem 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  border-top: 3px solid red;
}

.footer h1 {
  font-family: "DM Serif Display";
  text-decoration: none;
  color: black;
}

a {
  text-decoration: none;
  color: black;
}

.icon-container {
  height: 35px;
  width: 35px;
  position: relative;
}

.icon-container a {
  color: black;
}

.icon-container a:hover {
  color: rgb(48, 48, 48);
}

.circle {
  background-color: red;
  position: absolute;
  font-size: 10px;
  color: white;
  top: 0;
  right: 5px;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  text-align: center;
  z-index: 1;
}
.shop-bag {
  font-size: 28px;
  z-index: 0;
  position: relative;
}

.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

@media screen and (max-width: 1300px) {
  .footer {
    padding: 1em 3em;
  }
}

@media screen and (max-width: 800px) {
  .footer {
    padding: 1em 2rem;
  }
}

@media screen and (max-width: 375px) {
  .footer {
    padding: 1em 1.5em;
  }
  .shop-bag {
    font-size: 1.6em;
  }
  .icon-container {
    width: 26px;
    height: 26px;
  }
  .circle {
    font-size: 10px;
    height: 14px;
    width: 14px;
    right: 0;
  }
}
</style>
