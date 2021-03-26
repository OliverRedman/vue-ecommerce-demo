<template>
  <div class="home">
    <div class="cata">
      <button @click="animals"><h1>Animals</h1></button>
      <button @click="socks"><h1>Socks</h1></button>
      <button @click="cars"><h1>Cars</h1></button>
    </div>
    <div class="items-wrapper">
      <div
        class="item-holder"
        v-for="item in filterItems"
        :key="item.name"
        @click="selectItem(item)"
      >
        <div class="item-card">
          <img :src="item.img" alt="" />
        </div>
        <div class="item-info">
          <h2>
            <item class="name">{{ item.name }}</item>
          </h2>
          <h3>£{{ item.price }}</h3>
        </div>
      </div>
    </div>

    <section class="recc">
      <h2>Recommended For You</h2>
      <div class="recc-wrapper">
        <div
          class="recc-card"
          v-for="item in recc"
          :key="item.price"
          @click="selectItem(item)"
        >
          <img :src="item.img" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cataSelected: "animals",
      itemIndex: "",
      jeff: [],
    };
  },
  methods: {
    animals() {
      this.cataSelected = "animals";
    },
    socks() {
      this.cataSelected = "socks";
    },
    cars() {
      this.cataSelected = "cars";
    },
    selectItem(item) {
      this.$store.commit("addToCart", item);
    },
  },

  computed: {
    cata() {
      return this.$store.state["products"].cataLog;
    },
    recc() {
      return this.cata.filter((item) => item.recc === true);
    },
    filterItems() {
      return this.cata.filter((item) => item.cata === this.cataSelected);
    },
  },
};
</script>

<style scoped>
/* recc section */
.recc {
  display: flex;
  flex-direction: column;

  margin-top: 56px;
  padding-bottom: 82px;
}
.recc-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
}
.recc-card {
  display: inline-flex;
  flex: 0 0 auto;
  overflow: hidden;

  margin-top: 18px;
  width: 132px;
  height: 186px;
  background-color: #d5d5d7;
  border-radius: 11px;
  margin-right: 14px;
  margin-left: 14px;
}
.recc-card img {
  align-self: flex-end;
  width: 132px;
  height: auto;
}
.recc h2 {
  margin-left: 14px;
}
/* recc section */

/* main item area */

.items-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;

  margin-top: 33px;
}
.item-holder {
  margin-right: 14px;
  margin-left: 14px;
}
.item-card {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #d5d5d7;
  width: 175px;
  height: 252px;
  border-radius: 11px;
  flex: 0 0 auto;

  overflow: hidden;
}
.item-card img {
  margin-top: 20px;
  width: 200px;
  height: auto;
}
.item-info {
  display: flex;
  margin-top: 10px;
  position: relative;
}
.item-info h2 {
  font-size: 23px;
}
.item-info h3 {
  font-size: 23px;
  margin-left: 135px;
  color: #767676;
  position: absolute;
}

.home {
  margin-top: 90px;
  overflow: hidden;
}
h1 {
  font-size: 22px;
}
/* main item area */

/* navigation items */
.cata {
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-evenly;
}
.cata button {
  border: none;
  outline: none;
  background-color: transparent;
  width: 95px;
  height: 36px;
  border-radius: 47px;
  transition: background-color 0.2s;
}
.cata button:hover {
  background-color: rgba(255, 153, 153, 0.5);
}
/* navigation items */
</style>
