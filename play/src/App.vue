<script setup></script>

<template>
  <div class="play-container">
    <c-button />
<!--    <div class="mask-box">-->
<!--      <div class="mask">11111</div>-->
<!--      111111111111111111111111-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.play-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: repeating-linear-gradient(45deg, #ffffff, #ffffff 13px, #e5e6e6 13px, #e5e6e6 14px);
}

.mask-box {
  background: aqua;
  mask: linear-gradient(to right, #ffffffff, #00000000) border-box, linear-gradient(to right, #ffffffff, #00000000) content-box;
  mask-composite: subtract;
  border: 10px solid transparent;
  padding: 10px;
}

.mask {
  width: 100px;
  height: 100px;
  border: 10px solid transparent;
  padding: 10px;
  background: brown;
}
</style>
