<template>
  <section class="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-5">
          <Sidebar @navigate="navigate" :setColor="setColor" :color="color" />
        </div>
        <div class="col-lg-9 col-md-7">
          <div class="product__discount">
            <div class="section-title product__discount__title">
              <h2>Sale Off</h2>
            </div>
            <div class="row">
              <ProductSlider :data="saleItems" />
            </div>
          </div>
          <Filter :count="items?.length" :setSortOrder="setSortOrder" />
          <ProductList :data="items" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import API from "@/api";
import { defineComponent, PropType } from "vue";
import Sidebar from "@components/Sidebar/index.vue";
import ProductSlider from "@components/Slider/ProductSlider.vue";
import Filter from "@components/Filter/index.vue";
import ProductList from "@components/Product/ProductList.vue";
//@ts-ignore
import { IProduct } from "@components/Product/product.type.ts";
import { sortByKey, filterByColor } from "@/helper/product.helper";

export default defineComponent({
  name: "Shop",
  components: {
    Sidebar,
    ProductSlider,
    Filter,
    ProductList,
  },
  provide() {
    return {
      categoryId: this.searchParams?.categoryId,
      searchValue: this.searchParams?.searchValue,
      navigate: this.navigate,
    };
  },
  props: {
    navigate: {
      type: Function
    },
    searchParams: Object as PropType<Record<string, any>>
  },
  data() {
    return {
      saleItems: null,
      items: null as IProduct[] | null,
      sortOrder: "",
      color: ""
    };
  },
  async created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const categoryId = this.searchParams?.categoryId;
      const searchValue = this.searchParams?.searchValue !== 'null' ? this.searchParams?.searchValue : '';
      if (categoryId) {
        this.getProductsByCategorySearch(categoryId, searchValue);
      } else {
        this.getProductsBySearch(searchValue);
      }
    },
    async getProductsByCategorySearch(id: IProduct['id'], search: string) {
      const { data } = await API.getProductsByCategorySearch(id, search);
      this.items = sortByKey(data.product, 'price', this.sortOrder);
      this.items = filterByColor(this.items, this.color);
      this.saleItems = data.product.filter((el: IProduct) => el.discount);
    },
    async getProductsBySearch(search: string) {
      const { data } = await API.getProductsBySearch(search);
      this.items = sortByKey(data.product, 'price', this.sortOrder);
      this.items = filterByColor(this.items, this.color);
      this.saleItems = data.product.filter((el: IProduct) => el.discount);
    },
    async setSortOrder(order: string) {
      this.sortOrder = order;
    },
    async setColor(newColor: string) {
      this.color = newColor;
    }
  },
  watch: {
    sortOrder: {
      handler() {
        this.fetchProducts();
      },
      immediate: true
    },
    color: {
      handler() {
        this.fetchProducts();
      },
      immediate: true
    }
  }
});
</script>