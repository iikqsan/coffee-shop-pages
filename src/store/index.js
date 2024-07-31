import { createStore } from 'vuex'
import { ref } from 'vue'

export default createStore({
  state: {
    isVisible: false,
    count: ref(0)
  }
})
