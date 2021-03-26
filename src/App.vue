<template>
  <div id="nav">
    <router-link to="/cart">
      <div class="amount" v-if="itemsInCart">
        <p>{{ itemsInCart }}</p>
      </div>
      <svg
        class="cart"
        width="40"
        height="40"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.61172 33.4947C7.61172 31.9748 8.84215 30.7443 10.3621 30.7443C11.8639 30.7443 13.0944 31.9748 13.0944 33.4947C13.0944 34.9965 11.8639 36.227 10.3621 36.227C8.84215 36.227 7.61172 34.9965 7.61172 33.4947ZM27.9681 33.4947C27.9681 31.9748 29.1985 30.7443 30.7184 30.7443C32.2203 30.7443 33.4507 31.9748 33.4507 33.4947C33.4507 34.9965 32.2203 36.227 30.7184 36.227C29.1985 36.227 27.9681 34.9965 27.9681 33.4947Z"
          fill="#FF0000"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.4511 7.72898C34.5548 7.72898 35.2786 8.10896 36.0024 8.94131C36.7262 9.77366 36.8528 10.9679 36.69 12.0518L34.971 23.9218C34.6453 26.2035 32.6911 27.8845 30.3931 27.8845H10.652C8.24538 27.8845 6.25498 26.0388 6.05594 23.6522L4.39125 3.92732L1.65897 3.45686C0.935189 3.3302 0.428542 2.62451 0.555204 1.90073C0.681866 1.15885 1.38755 0.6703 2.12943 0.778868L6.44498 1.43027C7.06019 1.54065 7.51255 2.04549 7.56684 2.6607L7.91063 6.71388C7.96492 7.29471 8.43538 7.72898 9.0144 7.72898H33.4511ZM22.4858 17.1364H27.498C28.2579 17.1364 28.855 16.5211 28.855 15.7793C28.855 15.0193 28.2579 14.4222 27.498 14.4222H22.4858C21.7258 14.4222 21.1287 15.0193 21.1287 15.7793C21.1287 16.5211 21.7258 17.1364 22.4858 17.1364Z"
          fill="#202020"
        />
      </svg>
    </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  computed: {
    itemsInCart() {
      if (this.$store.state.itemsInCart.length === 0) {
        return false;
      } else return this.$store.state.itemsInCart.length;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Cabin;
  color: #202020;
}
body {
  background-color: #f6f6f6;
}

/* catagories */

/* catagories */

/*  nav stuff / basket amount */
#nav {
  display: flex;
  justify-content: flex-end;
}
.cart {
  position: fixed;
  right: 30px;
  top: 25px;
}
.amount {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  background-color: rgba(255, 153, 153, 0.79);
  width: 20px;
  height: 20px;
  border-radius: 15px;
  top: 20px;
  right: 20px;
  z-index: 1;
}
.amount p {
  color: #202020;
}
/* ^ nav stuff / basket amount ^ */
</style>
