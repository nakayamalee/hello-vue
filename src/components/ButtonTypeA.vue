<script>
    export default {
        props: {
            type: {
                type: String,
                required: true,
                default: '',
            },
        },
    };
</script>

<template>
    <button class="btn" type="button">
        <img v-if="this.type === 'record'" src="@/assets/image/button-record.svg">
        <img v-else-if="this.type === 'export'" src="@/assets/image/button-export.svg">
        <img v-else-if="this.type === 'next'" src="@/assets/image/button-next.svg">
        <img v-else-if="this.type === 'prev'" src="@/assets/image/button-prev.svg">
        <img v-else-if="this.type === 'add'" src="@/assets/image/button-add.svg">
        <img v-else src="@/assets/image/button-save.svg">
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<style lang="scss" scoped>
    .btn{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 165px;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        background-color: transparent;
        border-color: $mainColor;
        border-radius: 10px;
        color: $mainColor;
        user-select: none;

        transition: 0.5s;
        &:hover{
            background-color: $secondColor;
            color: #FFF;
        }
        .content{
            flex-grow: 1;
            text-align: center;
        }
    }
</style>