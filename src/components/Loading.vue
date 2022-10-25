<template>
  <div class="sectionLoading">
    <div class="loading">
      <img class="logoGamevut" src="../images/Gamevut-logo.png" />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.sectionLoading {
  width: 100%;
  height: 100vh;
  background-image: url("../images/Gamevut_background.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logoGamevut {
  width: 500px;
}
img {
  animation: loading-spin infinite 1s linear;
}

@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
