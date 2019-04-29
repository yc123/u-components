<template>
    <div class="u-form-wrap">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'UForm',
    props: {
        value: {
            type: Object
        },
        rules: {
            type: Object
        }
    },
    created () {
        console.log(this.value)
    },
    methods: {
        validateField (field, callback) {
        },
        validate (callback) {
            
        },
        resetFields () {
            for (let key in this.value) {
                this.value[key] = ''
            }
        }
    }
}
</script>
