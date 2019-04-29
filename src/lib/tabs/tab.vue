<template>
    <div class="uview-tab-item" :class="{active: name === item.value}" @click="selectTab" >{{item.label}}</div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        selectTab () {
            this.$emit('selectTab', this.item.value, this.item)
        }
    }
}
</script>
<style>

</style>


