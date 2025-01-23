<script setup lang="ts">
import data from "@/views/demos/forms/tables/data-table/datatable";
import type { Data } from "@db/pages/datatable/types";
import { computed, onMounted, onUnmounted, ref } from "vue";

const userList = ref<Data[]>([]);
const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [""],
  sortDesc: [false],
});
const totalItems = computed(() => userList.value.length);
const startItem = computed(
  () => (options.value.page - 1) * options.value.itemsPerPage + 1
);
const endItem = computed(() =>
  Math.min(options.value.page * options.value.itemsPerPage, totalItems.value)
);

// headers
const headers = [
  { title: "이름", key: "fullName" },
  { title: "이메일", key: "email" },
  { title: "날자", key: "startDate" },
  { title: "사번", key: "salary" },
  { title: "나이", key: "age" },
  { title: "상태", key: "status" },
];

const resolveStatusVariant = (status: number) => {
  if (status === 1) return { color: "primary", text: "Current" };
  else if (status === 2) return { color: "success", text: "Professional" };
  else if (status === 3) return { color: "error", text: "Rejected" };
  else if (status === 4) return { color: "warning", text: "Resigned" };
  else return { color: "info", text: "Applied" };
};

// 반응형 total-visible 값 계산
const windowWidth = ref(window.innerWidth);

const totalVisible = computed(() => (windowWidth.value <= 600 ? 1 : 5));

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data));
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span
            class="d-block font-weight-medium text-high-emphasis text-truncate"
          >
            {{ item.fullName }}
          </span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div
          class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"
        >
          <VSelect
            v-model="options.itemsPerPage"
            :items="[5, 10, 25, 50, 100]"
            style="max-inline-size: 4rem; min-inline-size: 5rem"
            density="compact"
          />

          <!-- Current Displayed Items Info -->
          <div
            class="d-flex align-center me-auto pl-2 text-body-2 text-disabled"
          >
            <span
              >전체 {{ totalItems }} 중에 {{ startItem }} - {{ endItem }}</span
            >
          </div>

          <VPagination
            v-model="options.page"
            :total-visible="totalVisible"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
            density="compact"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
