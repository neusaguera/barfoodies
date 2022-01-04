<template>
  <div class="card price-card">
    <div class="card-content">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ description }}
      </p>
      <p>
        {{ price }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceCard",
  props: {
    title: String,
    description: String,
    price: String,
  },
};
</script>
