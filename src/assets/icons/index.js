import Vue from 'vue'
import SvgIcon from '../../components/SvgIcon.vue' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
    // console.log(req)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
    // console.log(requireAll(req))