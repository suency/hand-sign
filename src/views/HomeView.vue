<script setup>
import { ref, reactive, onMounted, onBeforeMount, nextTick } from 'vue'

const height = ref('')
const isCrop = ref(true)
const lineColor = ref('#000000')
const bgColor = ref('')
const lineWidth = ref(6)
const resultImg = ref('')

const esign = ref(null)
function handleReset() {
  esign.value.reset()
  //console.log(esign.value)
}

function handleGenerate() {
  esign.value.generate().then(res => {
    resultImg.value = res
  }).catch(err => {
    alert(err) // 画布没有签字时会执行这里 'Not Signned'
  })
}
</script>

<template>
  <div class="wrap">
    <var-image :src="resultImg" />
    <div class="main">
      <div class="signArea">Sign Area</div>
      <div class="buttonGroup">
        <var-space :size="[10, 10]">
          <var-button type="info" size="small" @click="handleReset()">clear</var-button>
          <var-button type="success" size="small" @click="handleGenerate()">confirm</var-button>
        </var-space>
      </div>
      <vue-esign ref="esign" :width="390" :height="500" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor"
        v-model:bgColor="bgColor" />
    </div>
  </div>
</template>

<style scoped>
.buttonGroup {
  position: absolute;
  bottom: 50px;
  left: -20px;
  transform: rotate(90deg);
}

.signArea {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%) rotate(90deg);
  color: #C4C4C4;
  opacity: 0.9;
  letter-spacing: 5px;
  font-size: 50px;
  z-index: -1;
}

.wrap {
  box-sizing: border-box;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

.main {
  box-sizing: border-box;
  position: relative;
  width: 390px;
  height: 500px;
  background-color: rgb(229, 229, 229, 0.7);
}
</style>