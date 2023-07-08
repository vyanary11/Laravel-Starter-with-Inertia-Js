<template>
    <AuthLayout>
        <Head title="Dashboard" />
    </AuthLayout>
</template>

<script>
import { Head } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/Authenticated.vue'

export default {
    components: {
        Head,
        AuthLayout
    },
}
</script>
