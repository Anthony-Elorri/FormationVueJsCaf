<template>
  <div>
      <div v-for="product in products" :key="product.id" class="produit">
          <div>
              <img :src="product.imgUrl" class="img">
          </div>
          {{product.title}} - {{ product.price}} €
          <br/>
          <button :disabled="!product.inventory" @click="addProductToCart(product)">
              Add to cart
          </button>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
    computed: mapState({
        products: state => state.products.all
    }),
    methods : mapActions("cart", ["addProductToCart"]),
    created(){
        this.$store.dispatch("products/getAllProducts");
    }
};
</script>

<style>
.produit{
    display: inline-block;
    margin: 15px;
}

.img{
    height: 100px;
}
</style>