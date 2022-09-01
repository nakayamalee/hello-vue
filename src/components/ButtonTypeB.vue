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
        data() {
            return {
                left: this.type.left,
                right: this.type.right,
                isActive: this.type.state,
                isToggle: this.type.toggle,
            };
        },
    };
</script>

<template>
    <div class="btn" @click="isActive = !isActive">
        <div class="left" :class="{ active:!isActive,stop:isToggle }">{{left}}</div>
        <div class="right" :class="{ active:isActive }">{{right}}</div>
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