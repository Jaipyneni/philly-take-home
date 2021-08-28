import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/assets/styles/main.scss');

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


