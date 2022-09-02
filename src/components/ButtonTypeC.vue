<script>
    export default {
        props: {
            type: {
                type: Object,
                default: function () {
                    return {
                        left: '中止',
                        right: '服務',
                        state: false,
                        toggle: true,
                    };
                },
            },
        },
    };
</script>

<template>
    <div class="btn">
        <div class="left" :class="{ active:!type.state,stop:type.toggle }">
            <slot name="left"></slot>
        </div>
        <div class="right" :class="{ active:type.state }">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
    .btn{
        display: flex;
        width: 150px;
        height: 40px;
        // padding: 0.25rem 0.5rem;
        border: 3px solid $mainColor;
        border-radius: 15px;
        cursor: pointer;
        user-select: none;
        .left,.right{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            text-align: center;
            border-radius: 10px;
            color: gray;

            &.active{
                background-color: $mainColor;
                color: #FFF;
                &.stop{
                    background-color: gray;
                }
            } 
        }
    }
</style>