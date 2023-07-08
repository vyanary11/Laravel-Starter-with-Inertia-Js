<template>
    <li :class="['nav-item dropdown', { active: shouldActivateDropdown  }]">
        <a href="#" class="nav-link has-dropdown">
            <slot />
        </a>
        <ul class="dropdown-menu">
            <li v-for="(menuItem, index) in menuItems" :key="index" :class="[{ active: $page.url == menuItem.url}]">
                <Link :href="menuItem.url" class="nav-link">{{ menuItem.label }}</Link>
            </li>
        </ul>
    </li>
</template>

<script>
    import { Link } from '@inertiajs/vue3'
    export default {
        components:{
            Link,
        },
        props: {
            menuItems: {
                type: Array,
                required: true,
            },
        },
        computed: {
            shouldActivateDropdown() {
                return this.menuItems.some((menuItem) =>
                    this.isActive(menuItem.url)
                );
            },
        },
        methods: {
            isActive(url) {
                if (url === '/') {
                    return this.$page.url === '/';
                } else {
                    return this.$page.url.startsWith(url);
                }
            },
        },
    };
</script>
