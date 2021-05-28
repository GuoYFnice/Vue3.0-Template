<template>
  <div>
    <h2>Websocket</h2>
    <a @click="handleClick">点击发送</a>
    <div>
      {{ latestMessage }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import useWebsocket from '../../composables/useWebsocket'
export default {
  setup() {
    const onOpen = () => {
      console.log('onOpen')
    }
    const onClose = () => {
      console.log('onClose')
    }
    const onMessage = () => {
      console.log('onMessage')
    }
    const onError = () => {
      console.log('onError')
    }
    const { latestMessage, sendMessage, disconnect, connect, readyState } =
      useWebsocket('ws://192.168.3.237:9999', {
        reconnectLimit: 3,
        reconnectInterval: 3 * 1000,
        onOpen,
        onClose,
        onMessage,
        onError,
      })
    // console.log('latestMessage',latestMessage)
    // console.log('sendMessage',sendMessage)
    // console.log('disconnect',disconnect)
    // console.log('readyState',readyState)
    // connect()
    // sendMessage('123123')
    const handleClick = () => {
      sendMessage('123123')
    }
    return {
      ...toRefs(latestMessage),
      handleClick,
    }
  },
}
</script>

<style scoped></style>
