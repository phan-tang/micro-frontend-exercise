import { createApp } from "vue";

import Search from './index.vue';

export default (el: any, props: any) => {
    createApp(Search, props).mount(el);
};
