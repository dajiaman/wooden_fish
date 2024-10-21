<template>
  <div class="container">
    <img class="wooden_fish_img" src="../assets/fish.png" @click="clickFish" />

    <!--手动的棍子-->
    <img class="stick" src="../assets/22.png" />
  </div>
  <div>功德：{{ tikCount ?? 0 }}</div>
</template>

<script lang="ts" setup>
import { useSound } from "@vueuse/sound";
import { storage } from "wxt/storage";
import playSfx from "../assets/1.mp3";
import useStoredValue from "../composables/useStoredValue";

// useSound
const { play, isPlaying, stop } = useSound(playSfx);

// 功德
const { state: tikCount, isLoading } = useStoredValue<number>(
  "local:tikCount",
  0,
  {
    immediate: true,
  }
);

const clickFish = () => {
  tikCount.value += 1;

  if (isPlaying) {
    stop();
  }

  playAnimation();
  play();
};

const playAnimation = () => {
  const dom = document.querySelector(".wooden_fish_img")!;
  dom.classList.add("active");
  setTimeout(() => {
    dom.classList.remove("active");
  }, 2000);
};
</script>

<style lang="scss" scoped>
.container {
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  color: #fff;
  user-select: none;
}

.wooden_fish_img {
  width: 100px;
  position: absolute;
}

.stick {
  height: 20px;
  position: absolute;
  left: 24px;
  top: -10px;
  transform: rotateZ(30deg);
  transition: transform 0.4s cubic-bezier(0.85, 0.1, 0.89, 0.65);
}

.wooden_fish_img:active + .stick {
  transform: rotateZ(6deg);
  transition: 0.05s;
}
</style>
