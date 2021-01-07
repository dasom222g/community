import Vue from 'vue';
import App from './App.vue';
import main from './main';

main();
new Vue({ render: createElement => createElement(App) }).$mount('#app');