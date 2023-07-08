<template>
    <li :class="['nav-item', { active: $page.url == href }]">
        <Link :href="href" class="nav-link"><slot/></Link>
    </li>
</template>

<script>
    import { Link } from '@inertiajs/vue3'
    export default {
        components:{
            Link,
        },
        props: {
            href: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                url: null,
                isActive: false,
            };
        },
        mounted() {
        },
    };
</script>
