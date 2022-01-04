<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container custom-fluid is-fluid">
      <div class="circle-bck two"></div>
      <div class="circle-bck three"></div>
      <div class="circle-bck three reverse"></div>
      <div class="circle-bck four"></div>
      <div class="circle-bck"></div>
      <div class="columns cream-block">
        <div class="column">
          <h1 class="title is-1">
            Mejorar la alimentación de nuestros peludos está al alcance de
            todos.
          </h1>
        </div>
        <div class="column">
          <div class="block-image">
            <picture>
              <img
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-once="false"
                src="@/assets/images/image-home.png"
                alt="logo BARFoodies"
              />
              <caption>
                APROVECHANDO LAS FRUTAS Y VERDURAS QUE TEMOS EN CASA
              </caption>
            </picture>
          </div>
        </div>
      </div>
      <div class="columns pink-block">
        <div class="column">
          <h2 class="title is-2">
            En <b>BARFoodies</b> adaptamos la alimentación de los peludos a
            todas las familias porque creemos que mejorar su calidad de vida no
            debería ser solo para aquellos que tienen dinero y tiempo libre.
          </h2>
        </div>
        <div class="column">
          <div class="block-image">
            <picture>
              <img
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                src="@/assets/images/image-adaptacion.png"
                alt="logo BARFoodies"
              />
              <caption>
                APROVECHAMOS LO QUE NOS REGALAN EN NUESTRA CARNICERIA DE
                CONFIANZA
              </caption>
            </picture>
          </div>
        </div>
      </div>
      <div class="columns cream-block">
        <div class="circle-bck three reverse"></div>
        <div class="column">
          <h2 class="title is-2">
            ¿Jugamos a mejorar la alimentación de nuestro amigo?
          </h2>
          <p>
            ESTE ES UN PEQUEÑO JUEGO DE PREGUNTAS SOBRE VUESTROS PELUDOS, SEGÚN
            LAS RESPUESTAS OS DAREMOS UNA IDEA DE COMO MEJORAR SU ALIMENTACIÓN
          </p>
          <br />
          <button
            class="button is-primary is-medium"
            @click="isComponentModalActive = true"
          >
            Empezar Juego
          </button>

          <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <div class="modal-card" style="width: auto">
              <section class="modal-card-body">
                <Quiz />
              </section>
            </div>
          </b-modal>
        </div>
      </div>
      <div class="columns pink-block">
        <div class="column">
          <h2 class="title is-2">Nuestros servicios</h2>
          <div class="columns">
            <div class="column">
              <PriceCard
                title="price 1"
                description="this is a small description"
                price="20€"
              />
            </div>
            <div class="column">
              <PriceCard
                title="price 2"
                description="this is a small description"
                price="20€"
              />
            </div>
            <div class="column">
              <PriceCard
                title="price 3"
                description="this is a small description"
                price="20€"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceCard from "@/components/PriceCard.vue";
import Quiz from "@/components/quiz/Quiz.vue";
import AOS from "aos";

export default {
  name: "Home",
  components: {
    PriceCard,
    Quiz,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
};

AOS.init();
</script>
