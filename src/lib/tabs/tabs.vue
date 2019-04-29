<template>
    <div class="uview-tabs-default-wrap">
        <div class="uview-tabs-wrap clearFloat">
            <Tab @selectTab="onSelectTab" :name="value" v-for="(item, index) in list " :key="index" :item="item" ></Tab>
        </div>
        <slot name="tabs-content"></slot>
    </div>
</template>
<script>
import Tab from './tab'
export default {
    name: 'UTabs',
    components: {
        Tab
    },
    props: {
        value: {
            type: String,
            require: true
        },
        list: {
            type: Array,
            default: []
        }
    },
    methods: {
        onSelectTab (name) {
            this.$emit('onSelectTab', name)
        }
    }
}
</script>
<style lang="scss">
.uview-tabs-default-wrap {
    // padding: 16px 16px 0px 16px;
    .uview-tabs-wrap {
        .uview-tab-item {
            float: left;
            background: #F4F4F4;
            border: 1px solid #E8E8E8;
            // border-bottom: none;
            width: 72px;
            height: 32px;
            text-align: center;
            line-height: 32px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            margin-right: 1px;
            cursor: pointer;
            color: rgba(0,0,0,0.45);
        }
        .active {
            background: #F5F8FF;
            border-bottom: none;
            color: rgba(0,0,0,0.65);
        }

    }
}
</style>


