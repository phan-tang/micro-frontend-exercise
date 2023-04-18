<template>
    <div>
        <h4>Colors</h4>
        <div v-for="option in options" :key="option.value" :class="option.className">
            <button @click="setNewColor(option.value)" :class="{ active: color === option.value }">
                {{ option.text }}
                <input :id="option.value" type="radio">
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ColorSelectbox',
    props: {
        setColor: Function,
        color: String
    },
    data() {
        return {
            options: [
                { text: 'White', value: 'white', className: "sidebar__item__color sidebar__item__color--white" },
                { text: 'Yellow', value: 'yellow', className: "sidebar__item__color sidebar__item__color--yellow" },
                { text: 'Red', value: 'red', className: "sidebar__item__color sidebar__item__color--red" },
                { text: 'Black', value: 'black', className: "sidebar__item__color sidebar__item__color--black" },
                { text: 'Blue', value: 'blue', className: "sidebar__item__color sidebar__item__color--blue" },
                { text: 'Green', value: 'green', className: "sidebar__item__color sidebar__item__color--green" },
            ]
        }
    },
    methods: {
        setNewColor(newColor: string) {
            this.setColor && this.setColor(newColor);
        }
    },
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sidebar__item__color {
    float: left;
    width: 40%;

    &.sidebar__item__color--white {

        button {

            &:after {
                border: 2px solid #333333;
                background: transparent;
            }
        }
    }

    &.sidebar__item__color--yellow {

        button {

            &:after {
                background: #E9A625;
            }
        }
    }

    &.sidebar__item__color--red {

        button {

            &:after {
                background: #D62D2D;
            }
        }
    }

    &.sidebar__item__color--black {

        button {

            &:after {
                background: $heading-color-2;
            }
        }
    }

    &.sidebar__item__color--blue {

        button {

            &:after {
                background: #249BC8;
            }
        }
    }

    &.sidebar__item__color--green {

        button {

            &:after {
                background: #3CC032;
            }
        }
    }

    button {
        font-size: 16px;
        color: #333333;
        position: relative;
        padding-left: 32px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        input {
            position: absolute;
            visibility: hidden;
        }

        &:after {
            position: absolute;
            left: 0;
            top: 5px;
            height: 14px;
            width: 14px;
            background: #222;
            content: '';
            border-radius: 50%;
        }

        &.active {
            font-weight: bold;
        }
    }
}
</style>