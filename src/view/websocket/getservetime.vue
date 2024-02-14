<template>
    <div>
        <span>得闲饮茶!</span>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        // 创建一个WebSocket连接  
        const socket = new WebSocket('ws://192.168.101.8:3000');

        // 监听连接事件  
        socket.onopen = function (event) {
            console.log('WebSocket连接已建立');
        };

        // 监听消息事件  
        socket.onmessage = function (event) {
            console.log('收到消息:', event.data);
        };

        // 监听关闭事件  
        socket.onclose = function (event) {
            console.log('WebSocket连接已断开');
        };

        // 发送消息  
        function sendMessage(message) {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(message);
            } else {
                console.log('WebSocket连接未建立');
            }
        }

        return {}
    }
}

</script>

<style></style>
