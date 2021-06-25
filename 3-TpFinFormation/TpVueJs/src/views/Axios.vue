<template>
  <div>
    <h1>Demo Axios Library</h1>
    <div class="vignette">
      <div class="bitTitre">Index des prix du Bitcoin</div>
      <section v-if="errored">
        <p>
          Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
          informations pour le moment. Veuillez réessayer ultérieurement.
        </p>
      </section>
      <section v-else>
        <div v-if="loading">Chargement...</div>
        <div v-else v-for="currency in info" :key="currency.id" class="monnaie">
          {{ currency.description }} :
          <span class="valeur"
            >{{ currency.rate_float | currencydecimal }}
            <span v-html="currency.symbol"></span
          ></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const fs = require('fs');
export default {
  name: "Axios",
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    setInterval(this.refresh, 60000);
    setInterval(this.parse, 10000); 
  },
  methods: {
    refresh() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.info = response.data.bpi;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    parse(){     
      const coteTmp ={
        rate:this.info.EUR.rate_float.toFixed(2)
      };
      ()=>{
        return fs.writeFile('./data/bitcoin.json', JSON.stringify(coteTmp, null, 2), err => {
          if(err) {
            console.log(err);
          } else {
            console.log('ok');
          }
        });
      };
      console.log(coteTmp);
    }
  },
};
</script>
<style scoped>
.vignette {
  width: 380px;
  background-color: #2c3e50;
  color: lightgray;
  margin-top: 30px;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
}
.bitTitre {
  font-size: 30px;
  margin-bottom: 10px;
}
.monnaie {
  color: rgb(152, 152, 152);
  font-size: 20px;
}
.valeur {
  color: beige;
}
</style>
