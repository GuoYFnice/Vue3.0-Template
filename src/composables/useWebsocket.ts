import { ref, onMounted, onUnmounted } from 'vue'
/**
 *  websocket
 *
 */

export enum ReadyState {
	Connecting = 0,
	Open = 1,
	Closing = 2,
	Closed = 3,
}

interface Options {
	reconnectLimit?: number
	reconnectInterval?: number
	onOpen?: (event: WebSocketEventMap['open']) => void
	onClose?: (event: WebSocketEventMap['close']) => void
	onMessage?: (message: WebSocketEventMap['message']) => void
	onError?: (event: WebSocketEventMap['error']) => void
}

export default function useWebsocket(url: string, options: Options) {
	const {
		reconnectLimit = 3,
		reconnectInterval = 3 * 1000,
		onOpen,
		onClose,
		onMessage,
		onError,
	} = options
	const reconnectTimesRef = ref<number>(0)
	const latestMessage = ref<WebSocketEventMap['message']>()
	const readyState = ref<ReadyState>(ReadyState.Closed)
	const reconnectTimerOut = ref()
	const websocketRef = ref()

	/**
	 * 重连
	 */
	const reconnect = () => {
		if (
			reconnectTimesRef.value < reconnectLimit &&
			readyState.value !== ReadyState.Open
		) {
			reconnectTimerOut.value && clearTimeout(reconnectTimerOut.value)
			reconnectTimerOut.value = setTimeout(() => {
				connectWs()
				reconnectTimesRef.value++
			}, reconnectInterval)
		}
	}

	/**
	 * 创建websocket
	 */
	const connectWs = () => {
		reconnectTimerOut.value && clearTimeout(reconnectTimerOut.value)

		if (websocketRef.value) {
			websocketRef.value.close()
		}

		try {
			websocketRef.value = new WebSocket(url)
			websocketRef.value.onerror = (event: Event) => {
				reconnect()
				onError && onError(event)
				readyState.value = websocketRef.value?.readyState || ReadyState.Closed
			}
			websocketRef.value.onopen = (event: Event) => {
				onOpen && onOpen(event)
				reconnectTimesRef.value = 0
				readyState.value = websocketRef.value?.readyState || ReadyState.Closed
			}
			websocketRef.value.onmessage = (
				message: WebSocketEventMap['message']
			) => {
				onMessage && onMessage(message)
				latestMessage.value = message
			}
			websocketRef.value.onclose = (event: CloseEvent) => {
				reconnect()
				onClose && onClose(event)
				readyState.value = websocketRef.value?.readyState || ReadyState.Closed
			}
		} catch (error) {
			throw error
		}
	}

	/**
	 * 发送消息
	 * @param message
	 */
	const sendMessage: WebSocket['send'] = message => {
		if (readyState.value === ReadyState.Open) {
			websocketRef.value?.send(message)
		} else {
			throw new Error('WebSocket disconnected')
		}
	}

	/**
	 * 手动 connect
	 */
	const connect = () => {
		reconnectTimesRef.value = 0
		connectWs()
	}

	/**
	 * 断开websocket连接
	 */
	const disconnect = () => {
		reconnectTimerOut.value && clearTimeout(reconnectTimerOut.value)

		reconnectTimerOut.value = reconnectLimit
		websocketRef.value?.close()
	}

	/**
	 * mouted生命周期
	 */
	onMounted(() => {
		// 初始连接
		connect()
	})

	/**
	 * unMouted生命周期
	 */
	onUnmounted(() => {
		// 销毁
		disconnect()
	})

	return {
		latestMessage,
		sendMessage,
		connect,
		disconnect,
		readyState,
		webSocketIns: websocketRef,
	}
}
