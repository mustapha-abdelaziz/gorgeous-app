import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseBadge from './components/UI/BaseBadge.vue'


const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-badge', BaseBadge)

app.use(store).mount('#app')
