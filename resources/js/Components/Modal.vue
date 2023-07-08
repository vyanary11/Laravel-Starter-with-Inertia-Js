<template>
    <div class="modal fade" ref="modal" tabindex="-1" role="dialog"
        :id="name+'-modal'" :data-backdrop="isStaticModal ? 'static' : true"
        :data-keyboard="isStaticModal ? false : true" :class="modalClasses">
        <div :class="dialogClasses">
            <div class="modal-content" ref="content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ dataUpdate.title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form v-if="useForm" ref="form" @submit.prevent="submitForm">
                        <slot></slot>
                    </form>
                    <div v-else>
                        <slot></slot>
                    </div>
                </div>
                <div v-if="showFooter" :class="footerClass" class="modal-footer">
                    <button v-for="(button, index) in dataUpdate.buttons" :key="index" :class="button.class" :type="button.type" @click="handleButtonClick(button)">{{ button.label }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
            },
            title: {
                type: String,
                default: "Modal Title",
            },
            useForm: {
                type: Boolean,
                default: false,
            },
            staticModal: {
                type: Boolean,
            },
            footerClass: {
                type: String,
                default: "",
            },
            buttons: {
                type: Array,
                default: () => [],
            },
            size: {
                type: String,
                default: "md",
                validator: (value) => ["md", "sm", "lg", "xl"].includes(value),
            },
        },
        data() {
            return {
                modalProgress: false,
                show: false,
                isUpdateForm: false,
                dataUpdate: {
                    title: this.title,
                    buttons: JSON.parse(JSON.stringify(this.buttons))
                }
            };
        },
        computed: {
            isStaticModal() {
                if(this.staticModal){
                    return true;
                }else{
                    return this.useForm;
                }
            },
            showFooter() {
                return this.useForm || this.footerClass !== "" || this.buttons.length>0;
            },
            modalClasses() {
                return {
                    "modal-progress": this.modalProgress,
                    show: this.show,
                };
            },
            dialogClasses() {
                return {
                    "modal-dialog": true,
                    [`modal-${this.size}`]: true,
                };
            },
        },
        methods: {
            startProgress() {
                this.modalProgress = true;
                this.show = true;
            },
            stopProgress() {
                this.modalProgress = false;
                this.show = true;
            },
            closeModal(){
                $(this.$refs.modal).modal('hide');
            },
            showModal(){
                this.show = true;
                $(this.$refs.modal).modal('show');
            },
            showUpdateModal(paramObject){
                const { title, buttonSubmitText } = paramObject;
                this.dataUpdate.title = title;
                if(this.buttons.length>0){
                    this.updateButtonLabelByType('submit', buttonSubmitText);
                }
                this.show = true;
                this.isUpdateForm = true;
                $(this.$refs.modal).modal('show');
            },
            submitForm(event) {
                event.preventDefault();
                // Handle form submission logic here
                if(this.isUpdateForm){
                    this.$emit("submit-form-update");
                }else{
                    this.$emit("submit-form");
                }
            },
            handleButtonClick(button) {
                if (button.type === "submit") {
                    const form = this.$refs.form;
                    if (form) {
                        form.dispatchEvent(new Event('submit'));
                    }
                } else {
                    button.action();
                }
            },
            updateButtonLabelByType(type, newLabel) {
                const button = this.dataUpdate.buttons.find(item => item.type === type);
                if (button) {
                    button.label = newLabel;
                }
            },
            getObjectByKey(data, key, value) {
                return data.find(item => item[key] === value);
            },
        },
        mounted(){
            const modal = this;
            $(modal.$refs.modal).on("hidden.bs.modal", function (event) {
                modal.dataUpdate.title = modal.title;
                if(modal.buttons.length>0){
                    modal.updateButtonLabelByType('submit', modal.getObjectByKey(modal.buttons, 'type', 'submit').label);
                }
                modal.isUpdateForm = false;
                modal.show = false;
                if (modal.useForm) {
                    modal.$emit("reset-form");
                }
            })
            $(modal.$refs.modal).on("shown.bs.modal", function () {
                if(modal.isStaticModal){
                    const parentElement = document.getElementById(modal.$refs.modal.id);
                    parentElement.addEventListener('click', (event) => {
                        const isOutsideModalContent = !modal.$refs.content.contains(event.target);
                        if (isOutsideModalContent) {
                            $(modal.$refs.modal).addClass("modal-static");
                            setTimeout(() => {
                                $(modal.$refs.modal).removeClass("modal-static");
                            }, 200);
                        }
                    });
                }
            });
        }
    };
</script>
