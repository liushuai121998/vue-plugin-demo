import vpay from './pay'

// 定义插件
const myPlugin = {
    // install方法
    install (Vue, options) {
        Vue.component('vpay', vpay)
    }
}

export default myPlugin