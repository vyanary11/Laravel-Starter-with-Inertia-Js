<template>
    <AuthLayout title="Users">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <button data-toggle="modal" type="button" class="btn btn-primary" data-target="#user-modal">
                            <i class="fas fa-plus"></i> Add User
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <DataTable
                                ref="table"
                                :columns="columns"
                                :ajaxUrl="route('users.dataTable')"
                                :enableBulk="true"
                                :bulkActions="[
                                    {
                                        route: route('users.dataTable'),
                                        routeMethod: 'delete',
                                        label: 'Delete Selected'
                                    }
                                ]"
                                :has-action="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #modal>
            <Modal
                name="user"
                ref="user"
                title="Tambah User"
                :use-form="true"
                footer-Class="bg-whitesmoke br"
                :buttons="modalButtons"
                @submit-form="submit"
                @submit-form-update="update"
                @reset-form="reset"
            >
                <div class="form-group">
                    <Label for="name" value="Name" />
                    <Input id="name" type="text" v-model="form.name" autofocus autocomplete="name" :class="{ 'is-invalid': form.errors.name }" />
                    <div v-if="form.errors.name" class="invalid-feedback">
                        {{ form.errors.name }}
                    </div>
                </div>
                <div class="form-group">
                    <Label for="email" value="Email" />
                    <Input id="email" type="email" v-model="form.email" autofocus autocomplete="username" :class="{ 'is-invalid': form.errors.email }" />
                    <div v-if="form.errors.email" class="invalid-feedback">
                        {{ form.errors.email }}
                    </div>
                </div>
            </Modal>
        </template>
    </AuthLayout>
</template>

<script>
    import Checkbox from '@/Components/Checkbox.vue'
    import Input from '@/Components/Input.vue'
    import Label from '@/Components/Label.vue'
    import Modal from '@/Components/Modal.vue'
    import AuthLayout from '@/Layouts/Authenticated.vue'
    import DataTable from '@/Components/DataTable.vue';

    export default {
        components: {
            Checkbox,
            Input,
            Label,
            Modal,
            AuthLayout,
            DataTable
        },
        props: {
        },
        data() {
            return {
                form: this.$inertia.form({
                    update_id: '',
                    email: '',
                    name: '',
                }),
                modalButtons: [
                    {
                        label: "Save",
                        class: "btn btn-primary",
                        type: "submit",
                        action: () => {
                        },
                    },
                ],
                columns : [
                    {
                        data: 'name', name: 'name', title: 'Name',
                        searchable: true,
                    },
                    { data: 'email', name: 'email', title: 'Email' },
                ],
            }
        },
        mounted() {
            const parentElement = document.getElementById('data-table');
            parentElement.addEventListener('click', (event) => {
                if (event.target.matches('.edit-button') || event.target.matches('.edit-button *')) {
                    event.preventDefault();
                    event.stopPropagation();
                    const id = event.target.closest('.edit-button').getAttribute('data-id');
                    this.showUpdate(id);
                }
                if (event.target.matches('.delete-button') || event.target.matches('.delete-button *')) {
                    event.preventDefault();
                    event.stopPropagation();
                    const id = event.target.closest('.delete-button').getAttribute('data-id');
                    const name = event.target.closest('.delete-button').getAttribute('data-name');
                    this.deleteData(id, name);
                }
            });
        },
        methods: {
            submit(){
                this.form.post(route('users.store'), {
                    onSuccess: () => {
                        this.$refs.user.closeModal();
                        this.$refs.table.reload();
                        this.reset();
                    },
                    onError: () => {
                    }
                })
            },
            update(){
                this.form.post(route('users.update'), {
                    onSuccess: () => {
                        this.$refs.user.closeModal();
                        this.$refs.table.reload();
                        this.reset();
                    },
                    onError: () => {
                    }
                })
            },
            reset(){
                this.form.reset();
                this.form.clearErrors();
            },
            showUpdate(id){
                // Get row data
                this.$refs.user.showUpdateModal({
                    title: 'Edit User',
                    buttonSubmitText: 'Update'
                });
                this.$refs.user.startProgress();
                axios.get(route('users.show', [{'id': id}])).then((response) => {
                    const data = response.data;
                    this.form.update_id = data.id;
                    this.form.name = data.name;
                    this.form.email = data.email;
                    this.$refs.user.stopProgress();
                }).catch((error) => {
                    console.log('erorr')
                });

            },
            deleteData(id, name){
                this.$swal.fire({
                    title: 'Confirm Delete',
                    html: 'Are you sure you want to delete data <b>'+name+'</b> ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    backdrop:true,
                    // showLoaderOnConfirm: true,
                    preConfirm: () => {
                        // Return a promise that performs the deletion
                        return new Promise((resolve, reject) => {
                            // Perform the action based on the routeMethod
                            this.$inertia.post(route('users.delete'), { id: id }, {
                                onSuccess: (response) => {
                                    resolve(response);
                                },
                                onError: (error) => {
                                    reject(error);
                                }
                            });
                        });
                    },
                    allowOutsideClick: () => !this.$swal.isLoading()
                }).then((result) => {
                    console.log(result);
                    if (result.isConfirmed) {
                        // Deletion confirmed, perform necessary actions
                        this.$refs.table.reload();
                    }
                }).catch((error) => {
                    // Handle any error during the preConfirm or AJAX request
                    console.error('Error delete :', error);
                });
            }
        }
    }


</script>
