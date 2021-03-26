<template>
  <router-link to="/">
    <div class="back">
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 492 492"
        style="enable-background:new 0 0 492 492;"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            />
          </g>
        </g>
      </svg>
    </div>
  </router-link>

  <div class="cart-container" v-if="cartItems.length > 0">
    <div class="cart-item" v-for="thing in cartItems" :key="thing.id">
      <img :src="thing.img" alt="" />
      <div class="remove" @click="removeItem(thing)">
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.02079 7.3604L6.64879 4.98973L9.01946 2.61907C9.47546 2.1644 9.47546 1.4244 9.01946 0.969734C8.56346 0.511067 7.82613 0.5124 7.37013 0.9684L4.99813 3.33907L2.62613 0.965734C2.17013 0.509734 1.43146 0.5124 0.97546 0.965734C0.520794 1.42173 0.520794 2.16173 0.97546 2.6164L3.34879 4.98973L0.980794 7.3564C0.524794 7.8124 0.524794 8.5524 0.980794 9.00573C1.20879 9.23507 1.50613 9.3484 1.80479 9.3484C2.10479 9.3484 2.40213 9.23507 2.63013 9.00707L4.99813 6.63907L7.37146 9.01107C7.59946 9.23907 7.89679 9.3524 8.19546 9.3524C8.49413 9.3524 8.7928 9.23773 9.02079 9.01107C9.4768 8.55507 9.4768 7.8164 9.02079 7.3604Z"
            fill="#202020"
          />
        </svg>
      </div>
    </div>
  </div>
  <div class="buy" v-if="cartItems.length > 0">
    <h2>£{{ cartPrice }}</h2>
    <button @click="buyItems">Buy</button>
  </div>
</template>

<script>
export default {
  methods: {
    buyItems() {
      this.$store.commit("buyItems");
    },
    removeItem(thing) {
      this.$store.commit("removeItem", thing);
    },
    log() {
      console.log(this.cartItems);
      console.log(this.cartPrice);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.itemsInCart;
    },
    cartPrice() {
      return this.cartItems.reduce((acc, item) => acc + item.price, 0);
    },
  },
};
</script>

<style scoped>
.remove {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 42px;
  width: 42px;
  background-color: rgba(255, 153, 153, 0.79);
  z-index: 500;
  border-radius: 10px;
  bottom: 5px;
}
.buy h2 {
  margin-bottom: 20px;
}
.buy {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
}
.buy button {
  width: 162px;
  height: 54px;
  border: none;
  font-size: 25px;
  background-color: rgba(255, 153, 153, 0.79);
  border-radius: 42px;
}
.cart-container {
  margin-top: 200px;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
}
.cart-item {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  overflow: hidden;
  justify-content: center;

  margin-right: 14px;
  margin-left: 14px;

  width: 175px;
  height: 252px;
  background-color: #d5d5d7;
  border-radius: 11px;
  align-items: flex-end;
}
.cart-item img {
  width: 200px;
  height: 200px;
}
.back {
  position: fixed;
  width: 35px;
  left: 30px;
  top: 27px;
}
</style>
