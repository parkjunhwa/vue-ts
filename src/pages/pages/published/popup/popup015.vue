<script lang="ts" setup>
import { ref } from "vue";

const isDialogVisible = ref(false);

const menu00 = [
  ["종병본부장", "tabler-user"],
  ["복합본부장", "tabler-user"],
  ["도매본부장", "tabler-user"],
];
const menu01 = [
  ["종병유통 1지부 1팀", "tabler-folder"],
  ["종병유통 1지부 2팀", "tabler-folder"],
];
const menu02 = [
  ["종병유통 2지부 1팀", "tabler-folder"],
  ["종병유통 2지부 2팀", "tabler-folder"],
  ["종병유통 2지부 3팀", "tabler-folder"],
  ["종병유통 2지부 4팀", "tabler-folder"],
];
</script>

<template>
  <VDialog v-model="isDialogVisible" width="400">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 부서명 검색</VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="부서명 검색">
      <VCardText>
        <AppTextField
          append-inner-icon="tabler-search"
          placeholder="부서코드, 부서명을 선택하세요."
        />
        <VList style="max-height: 400px; min-height: 400px; padding: 0">
          <VListGroup value="총괄본부(사장)">
            <template #activator="{ props }">
              <VListItem
                v-bind="props"
                prepend-icon="tabler-folder"
                title="총괄본부(사장)"
              />
            </template>

            <VListItem
              v-for="([title, icon], i) in menu00"
              :key="i"
              :value="title"
              :title="title"
              :prepend-icon="icon"
            />
          </VListGroup>
          <VListSubheader class="mt-4">지점선택</VListSubheader>
          <VListGroup value="종병본부장">
            <VListItem
              v-bind="props"
              prepend-icon="tabler-user"
              title="종병본부장"
              value="종병본부장"
            />
          </VListGroup>
          <VListGroup value="서울종병">
            <template #activator="{ props }">
              <VListItem
                v-bind="props"
                prepend-icon="tabler-folder"
                title="서울종병"
              />
            </template>

            <VListGroup value="종병유통 1지부">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="tabler-folder"
                  title="종병유통 1지부"
                />
              </template>

              <VListItem
                v-for="([title, icon], i) in menu01"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              />
            </VListGroup>

            <VListGroup value="종병유통 2지부">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="tabler-folder"
                  title="종병유통 2지부"
                />
              </template>

              <VListItem
                v-for="([title, icon], i) in menu02"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              />
            </VListGroup>
          </VListGroup>
        </VList>
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false"> 저장</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
