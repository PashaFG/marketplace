import { createApp } from 'vue'
import App from '@/App.vue'
import svg from '@/assets/svg/index.js'
import uiComponents from '@/components/UI/index.js'

const app = createApp(App)

svg.forEach(iconSvg => {
  app.component(iconSvg.name, iconSvg)
})
uiComponents.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')
