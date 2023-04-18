<template>
    <div className="hero__search__form">
        <form>
            <div className="hero__search__categories">
                All Categories
                <span className="arrow_carrot-down" />
            </div>
            <input v-model="searchValue" type="text" placeholder="What are you looking for?" />
            <button @click="handleSearch" type="button" className="site-btn">SEARCH</button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"
export default defineComponent({
    name: "Search",
    provide() {
        return {
            categoryId: this.searchParams?.categoryId,
            navigate: this.navigate,
        }
    },
    props: {
        navigate: Function,
        searchParams: Object as PropType<Record<string, any>>
    },
    data() {
        return {
            searchValue: ""
        }
    },
    methods: {
        async handleSearch() {
            const categoryId = this.searchParams?.categoryId;
            const vm: any = this;
            let category = categoryId ? `category=${categoryId}` : '';
            let search = this.searchValue !== "" ? `search=${this.searchValue}` : "";
            vm.navigate(`/shop?` + [category, search].filter(field => field !== '').join('&'));
            // vm.$parent?.$emit("getProductsByCategory", item.id)
        }
    },
})
</script>