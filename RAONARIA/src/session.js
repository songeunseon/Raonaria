// src/plugins/session.js
export default {
    install(app, options) {
      const storage = options?.persist ? window.localStorage : window.sessionStorage
  
      app.config.globalProperties.$session = {
        set(key, value) {
          storage.setItem(key, JSON.stringify(value))
        },
        get(key) {
          const item = storage.getItem(key)
          return item ? JSON.parse(item) : null
        },
        remove(key) {
          storage.removeItem(key)
        },
        clear() {
          storage.clear()
        }
      }
    }
  }
  