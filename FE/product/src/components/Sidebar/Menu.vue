<template>
    <div>
        <h4>Department</h4>
        <ul>
            <li>
                <a :class="{ active: !active }" @click="getAllProducts">All</a>
            </li>
            <li v-for="item in items" :key="item.id">
                <a :class="{ active: active === item.id }" @click="handleCategory(item)">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import API from '@/api'
import { defineComponent } from 'vue'
import { ICategory } from '../Category/category.type';
export default defineComponent({
    name: 'Menu',
    inject: ['navigate', 'categoryId'],
    data() {
        return {
            items: null as Array<ICategory> | null,
            active: this.categoryId as unknown
        }
    },
    async created() {
        const { data } = await API.getCategories();
        this.items = data.category;
    },
    methods: {
        getAllProducts() {
            const vm: any = this;
            vm.navigate(`/shop`);
            vm.active = '';
        },
        handleCategory(item: ICategory) {
            const vm: any = this;
            vm.active = item.id;
            vm.navigate(`/shop?category=${item.id}`);
        }
    }
})
</script>