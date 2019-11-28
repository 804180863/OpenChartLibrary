<template>
  <div class="tanchuang">
    <div class="win"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.win {
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(250, 246, 246, 0.9);
}
.tanchuang {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
}
</style>