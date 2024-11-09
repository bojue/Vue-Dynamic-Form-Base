import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Input, Radio, Checkbox, CheckboxGroup, Select } from 'ant-design-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Input);
app.use(Select);
app.use(Radio);
app.use(Checkbox);


app.mount('#app')
