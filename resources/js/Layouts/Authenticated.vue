<template>
    <div class="main-wrapper">
        <sidebar></sidebar>
        <!-- Main Content -->
        <div class="main-content">
            <section class="section" v-if="showSectionHeaderAndBody">
                <div class="section-header">
                    <h1>{{ ucwords(urlSegment(0)) }}</h1>
                    <div class="section-header-breadcrumb">
                        <div class="breadcrumb-item">
                            <Link v-if="urlSegment(1)!=undefined" :href="'/'+urlSegment(0)">Dashboard</Link>
                            <span v-else>Dashboard</span>
                        </div>
                        <div v-if="urlSegment(1)!=undefined" :class="['breadcrumb-item', { active: urlSegment(2)==undefined}]">
                            <Link v-if="urlSegment(2)!=undefined" :href="'/'+urlSegment(0)+'/'+urlSegment(1)">{{ ucwords(urlSegment(1)) }}</Link>
                            <span v-else>{{ ucwords(urlSegment(1)) }}</span>
                        </div>
                        <div v-if="urlSegment(2)!=undefined" class="breadcrumb-item active">{{ ucwords(urlSegment(2)) }}</div>
                    </div>
                </div>
                <div class="section-body">
                    <slot/>
                </div>
            </section>
            <section v-else class="section">
                <slot/>
            </section>

            <slot name="modal"/>
        </div>

        <footer class="main-footer">
            <div class="footer-left">
                Copyright &copy; 2018 <div class="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
            </div>
            <div class="footer-right">
                4343
            </div>
        </footer>
    </div>
</template>

<script>
import { Link, Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Sidebar.vue'
import Navbar from '@/Components/Navbar.vue'

export default {
    components: {
        Link,
        Sidebar,
        Navbar
    },
    props: {
        showSectionHeaderAndBody: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {

        }
    },
    methods: {
        showFlashData() {
            const { flash } = this.$page.props;
            if (flash.message) {
                this.$swal({
                    title: flash.message.title,
                    html: flash.message.content,
                    icon: flash.message.type || 'success',
                    timer: 2000, // Adjust the time you want the flash message to be displayed
                    showConfirmButton: false,
                });
            }
        },
        urlSegment($index){
            return this.$page.url.split('/')[$index+1];
        },
        ucwords(value) {
            if (!value) return '';
            return value.replace(/\b\w/g, function(match) {
                return match.toUpperCase();
            });
        }
    },
    computed: {
        flashData() {
            return this.$page.props.flash;
        },
    },
    watch: {
        'flashData': {
            immediate: true, // Run the handler immediately when the component is mounted
            handler() {
                this.showFlashData();
            }
        }
    },
    mounted() {
        
    },
}
</script>
