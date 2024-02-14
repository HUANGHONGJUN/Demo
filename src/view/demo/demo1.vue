<template>
  <input type="file" @change="readfile" />
  <div class="cvas"></div>
</template>

<script>
import { nextTick, onMounted, ref } from 'vue'
import demo2 from './demo2.vue'
export default {
    name:"demo1",
    components:{ demo2 },
    setup(props,{expose}) {

      // 思路: 通过读取视频文件, 获取视频的宽高, 通过视频创建canvas,然后利用canvas的drawImage方法将视频绘制到canvas中，
      //再获取Blob，然后赋值在图片上
      
      //我的看法是将一个视频文件拆成多个视频片段,然后将视频片段创建canvas,再通过canvas的toBlob方法将视频片段转换成图片

      const drawVideo = (vdo) => {
        return new Promise((resolve,reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = vdo.videoWidth;
        canvas.height = vdo.videoHeight;
        ctx.drawImage(vdo, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          resolve({
            url:window.URL.createObjectURL(blob),
            blob
          })
        })
        })
      }

      //  vdoFile 视频文件
      //  time 视频播放的时间
      const readvideo = (vdoFile, time = 0) => {
        return new Promise((resolve,reject) => {
        const vdo = document.createElement('video');
        vdo.currentTime = time;
        vdo.autoplay = true;
        vdo.muted = true;
        vdo.oncanplay = async() => {
         let frame =  await drawVideo(vdo);
         resolve(frame);
        }
        vdo.src = window.URL.createObjectURL(vdoFile);
        })
        
      }

      const createPriview = (src) => {
        const img = document.createElement('img');
        img.src = src
        const cvas = document.getElementsByClassName('cvas')[0];
        cvas.appendChild(img);
      }

      const readfile = async(e) => {
       for (let i = 0; i < 5; i++) {
         const frame = await readvideo(e.target.files[0], i*0.5);
         createPriview(frame.url);
       }
      }

      



      return { readfile }
    }
}
</script>

<style>

</style>