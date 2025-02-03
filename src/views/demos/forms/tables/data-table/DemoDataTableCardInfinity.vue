<script setup lang="ts">
import { ref } from "vue";

const cardData = ref([
  [
    { title: "제목 A1", text: "John Doe" },
    { title: "제목 A2", text: "Jane Doe" },
    { title: "제목 A3", text: "Alice" },
    { title: "제목 A4", text: "Bob" },
    { title: "제목 A5", text: "Charlie" },
  ],
  [
    { title: "제목 B1", text: "David" },
    { title: "제목 B2", text: "Emma" },
    { title: "제목 B3", text: "Frank" },
    { title: "제목 B4", text: "Grace" },
    { title: "제목 B5", text: "Henry" },
  ],
  [
    { title: "제목 C1", text: "Ivy" },
    { title: "제목 C2", text: "Jack" },
    { title: "제목 C3", text: "Kim" },
    { title: "제목 C4", text: "Liam" },
    { title: "제목 C5", text: "Mona" },
  ],
  [
    { title: "제목 D1", text: "Nancy" },
    { title: "제목 D2", text: "Oscar" },
    { title: "제목 D3", text: "Paul" },
    { title: "제목 D4", text: "Quincy" },
    { title: "제목 D5", text: "Rachel" },
  ],
]);
</script>

<template>
  <VCard v-for="(card, index) in cardData" :key="index" class="data">
    <VCardText>
      <div v-for="(item, idx) in card" :key="idx" class="item">
        <span class="item-title">{{ item.title }}</span>
        <span class="item-text">{{ item.text }}</span>
      </div>
    </VCardText>
  </VCard>

  <div class="d-flex mt-2 flex-wrap justify-center w-100 card-more-btn">
    <VBtn size="small" color="secondary" variant="tonal">
      <VIcon start icon="tabler-plus" />
      더보기
    </VBtn>
  </div>
</template>
