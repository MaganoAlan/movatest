<template>
  <div v-if="pager.pages && pager.pages.length" class="pagination">
    <div class="page-item previous">
      <a class="button" @click="setPage(pager.currentPage - 1)">
        <img class="arrows" src="../assets/left.png" />
      </a>
    </div>
    <div
      v-for="page in pager.pages"
      :key="page"
      class="page-item"
      :class="{ active: pager.currentPage === page }"
    >
      <a class="button" @click="setPage(page)">{{ page }}</a>
    </div>
    <div class="page-item next">
      <a class="button" @click="setPage(pager.currentPage + 1)">
        <img class="arrows" src="../assets/right.png" />
      </a>
    </div>
  </div>
</template>

<script>
import paginate from "../utilities/paginate";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 12,
    },
    maxPages: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      pager: {},
    };
  },
  created() {
    this.setPage(this.initialPage);
  },
  methods: {
    setPage(page) {
      const { items, pageSize, maxPages } = this;
      const pager = paginate(items.length, page, pageSize, maxPages);
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      this.pager = pager;
      this.$emit("changePage", pageOfItems);
    },
  },
  watch: {
    items() {
      this.setPage(this.initialPage);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.page-item {
  width: 34px;
  height: 34px;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #8d8d8d;
}
.active {
  background-color: #6d2080;
  color: white;
}
.next,
.previous {
  width: 28px;
  height: 28px;
}
.arrows {
  width: 7px;
  height: 12px;
  background-size: contain;
}
.button {
  cursor: pointer;
  padding: 6px 12px;
  display: block;
}
</style>
