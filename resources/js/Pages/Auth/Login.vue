<template>
    <Head title="Log in" />

    <section class="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    <div class="login-brand">
                        <!-- <img src="../assets/img/stisla-fill.svg" alt="logo" width="100" class="shadow-light rounded-circle"> -->
                    </div>

                    <div class="card card-primary">
                        <div class="card-header"><h4>Login</h4></div>

                        <div class="card-body">
                            <form @submit.prevent="submit">
                                <div class="form-group">
                                    <Label for="email" value="Email" />
                                    <Input id="email" type="text" v-model="form.email" autofocus autocomplete="username" :class="{ 'is-invalid': form.errors.email }" />
                                    <div v-if="form.errors.email" class="invalid-feedback">
                                        {{ form.errors.email }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="d-block">
                                        <Label for="password" value="Password" class="control-label" />
                                        <div class="float-right">
                                            <a href="auth-forgot-password.html" class="text-small">
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                    <Input id="password" type="password" v-model="form.password" autocomplete="current-password" :class="{ 'is-invalid': form.errors.password }" />
                                    <div v-if="form.errors.password" class="invalid-feedback">
                                        {{ form.errors.password }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <Checkbox name="remember" v-model:checked="form.remember" />
                                        <Label class="custom-control-label" for="remember-me" value="Remember Me" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4" :disabled="form.processing">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="mt-5 text-muted text-center">
                        Don't have an account? <a href="auth-register.html">Create One</a>
                    </div>
                    <div class="simple-footer">
                        Copyright &copy; Stisla 2018
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import GuestLayout from '@/Layouts/Guest.vue'
    import Checkbox from '@/Components/Checkbox.vue'
    import Input from '@/Components/Input.vue'
    import Label from '@/Components/Label.vue'
    import { Head } from '@inertiajs/vue3';

    export default {
        layout: GuestLayout,
        components: {
            Checkbox,
            Input,
            Label,
            Head,
        },

        props: {
            canResetPassword: Boolean,
            status: String,
            errors: Object
        },

        data() {
            return {
                form: this.$inertia.form({
                    email: '',
                    password: '',
                    remember: false
                })
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('login'), {
                    onFinish: () => this.form.reset('password'),
                })
            }
        }
    }
</script>
