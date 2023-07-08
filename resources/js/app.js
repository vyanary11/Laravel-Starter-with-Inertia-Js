import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp,router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {useLoading,LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(VueSweetalert2)
            .use(plugin)
            .use(LoadingPlugin)
            .use(ZiggyVue, Ziggy);

        // Add SweetAlert to the app
        // app.config.globalProperties.$swal = Swal;
        return app.mount(el);
    },
    progress: false,
});
const $loading = useLoading({
    loader: 'dots',
});
let loader = null;

router.on('start', () => {
    loader = $loading.show();
})

router.on('finish', (event) => {
    if (event.detail.visit.completed) {
        loader.hide()
    } else if (event.detail.visit.interrupted) {
        loader.hide()
    } else if (event.detail.visit.cancelled) {
        loader.hide()
    }
})




