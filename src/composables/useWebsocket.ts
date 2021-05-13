import { ref } from "vue";
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
  reconnectLimit?: number;
  reconnectInterval?: number;
  onOpen?: (event: WebSocketEventMap["open"]) => void;
  onClose?: (event: WebSocketEventMap["close"]) => void;
  onMessage?: (message: WebSocketEventMap["message"]) => void;
  onError?: (event: WebSocketEventMap["error"]) => void;
}

interface Result {
  latestMessage?: WebSocketEventMap["message"];
  sendMessage?: WebSocket["send"];
  disconnect?: () => void;
  connect?: () => void;
  readyState: ReadyState;
  webSocketIns?: WebSocket;
}

export default function useWebsocket(url: string, options: Options): Result {
  const {
    reconnectLimit = 3,
    reconnectInterval = 3 * 1000,
    onOpen,
    onClose,
    onMessage,
    onError,
  } = options;
  const reconnectTimesRef = ref(0);
  const latestMessage = ref("");
  const readyState = ref(ReadyState.Closed);
  const reconnectTimerOut = ref();

  /**
   * 重连
   */
  const reconnect = () => {
    var that = this;
    if (reconnectTimesRef < reconnectLimit && readyState !== ReadyState.Open) {
      reconnectTimerOut = clearTimeout(reconnectTimerOut);
      reconnectTimerOut = setTimeout(() => {
        that.connectWs();
        reconnectTimesRef.value++;
      }, reconnectInterval);
    }
  };

  const connectWs = usePersistFn(() => {
    reconnectTimerRef.current && clearTimeout(reconnectTimerRef.current);

    if (websocketRef.current) {
      websocketRef.current.close();
    }

    try {
      websocketRef.current = new WebSocket(socketUrl);
      websocketRef.current.onerror = (event) => {
        reconnect();
        onError && onError(event);
        setReadyState(websocketRef.current?.readyState || ReadyState.Closed);
      };
      websocketRef.current.onopen = (event) => {
        onOpen && onOpen(event);
        reconnectTimesRef.current = 0;
        setReadyState(websocketRef.current?.readyState || ReadyState.Closed);
      };
      websocketRef.current.onmessage = (
        message: WebSocketEventMap["message"]
      ) => {
        onMessage && onMessage(message);
        setLatestMessage(message);
      };
      websocketRef.current.onclose = (event) => {
        reconnect();
        onClose && onClose(event);
        setReadyState(websocketRef.current?.readyState || ReadyState.Closed);
      };
    } catch (error) {
      throw error;
    }
  });

  /**
   * 发送消息
   * @param message
   */
  const sendMessage: WebSocket["send"] = usePersistFn((message) => {
    if (readyState === ReadyState.Open) {
      websocketRef.current?.send(message);
    } else {
      throw new Error("WebSocket disconnected");
    }
  });

  /**
   * disconnect websocket
   */
  const disconnect = usePersistFn(() => {
    reconnectTimerRef.current && clearTimeout(reconnectTimerRef.current);

    reconnectTimesRef.current = reconnectLimit;
    websocketRef.current?.close();
  });

  useEffect(() => {
    // 初始连接
    if (!manual) {
      connect();
    }
  }, [socketUrl, manual]);

  useUnmount(() => {
    disconnect();
  });

  return {
    latestMessage,
    sendMessage,
    connect,
    disconnect,
    readyState,
    webSocketIns: websocketRef.current,
  };
  const initWebSocket = function () {
    console.log("------------WebSocket引入成功------------");
    var url = "ws://192.168.3.249:9098/saas/websocket";
    this.websock = new WebSocket(url);
    this.websock.onopen = this.websocketOnopen;
    this.websock.onerror = this.websocketOnerror;
    this.websock.onmessage = this.websocketOnmessage;
    this.websock.onclose = this.websocketOnclose;
  };
  const websocketOnopen = function () {
    console.log("WebSocket连接成功");
    // this.websock.send("客户端发送的数据");
  };
  const websocketOnerror = function (e) {
    console.log("WebSocket连接发生错误");
    this.reconnect();
  };
  const websocketOnclose = function (e) {
    this.reconnect();
  };
  const websocketSend = function (text) {
    // 数据发送
    try {
      this.websock.send(text);
    } catch (err) {
      console.log("send failed (" + err.code + ")");
    }
  };
  const reconnect = function () {
    var that = this;
    if (that.lockReconnect) return;
    that.lockReconnect = true;
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(function () {
      console.info("尝试重连...");
      that.initWebSocket();
      that.lockReconnect = false;
    }, 5000);
  };

  return {
    initWebSocket,
    websocketOnopen,
    websocketOnerror,
    websocketOnclose,
    websocketSend,
    reconnect,
  };
}
