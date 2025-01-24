<script setup lang="ts">
import { useShepherd } from "vue-shepherd";

const route = useRoute();

// 👉 Hotkey
// eslint-disable-next-line camelcase
const { ctrl_k, meta_k } = useMagicKeys();

// 👉 Tour initialization
let tour: any = null;

// 👉 watch command palette and route change
/* eslint-disable camelcase */
watch([ctrl_k, meta_k, () => route.path], () => {
  if (tour.isActive()) tour.cancel();
});
/* eslint-enable */

onMounted(() => {
  const navbar = document.querySelector(".layout-navbar");

  tour = useShepherd({
    useModalOverlay: true,
    stepsContainer: document.querySelector(".layout-wrapper"),
    modelContainer: document.querySelector(".layout-wrapper"),
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      modalOverlayOpeningPadding: 2,
      modalOverlayOpeningRadius: 5,
    },
  });

  //  👉 Tour steps
  tour.addSteps([
    {
      id: "welcome",
      title: "안녕하세요.",
      arrow: true,
      attachTo: { element: navbar, on: "bottom" },
      text: "메뉴바 사용법입니다.",
      buttons: [
        {
          action: tour.cancel,
          classes: "backBtnClass",
          text: "이전",
        },
        {
          action: tour.next,
          text: "다음",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "notification",
      title: "알림",
      arrow: true,
      attachTo: {
        element: document.querySelector("#notification-btn"),
        on: "bottom",
      },
      text: "읽어야 할 메시지가 있으면 빨간점이 표시됩니다.",
      buttons: [
        {
          label: "Back",
          text: "이전전",
          action: tour.back,
          classes: "backBtnClass",
        },
        {
          label: "Next",
          text: "다음",
          action: tour.next,
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "footer",
      title: "Footer",
      arrow: true,
      attachTo: {
        element: document.querySelector(".layout-footer"),
        on: "bottom",
      },
      text: "이 페이지의 저작권 안내",
      buttons: [
        {
          label: "Back",
          text: "Back",
          action: tour.back,
          classes: "backBtnClass",
        },
        {
          label: "Finish",
          text: "Finish",
          action: tour.complete,
          classes: "nextBtnClass",
        },
      ],
    },
  ]);
});
</script>

<template>
  <div>
    <VCard title="Tour">
      <VCardText>
        <VBtn
          variant="elevated"
          @click="
            () => {
              tour && tour.start();
            }
          "
        >
          Start Tour
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/shepherd.scss";
</style>
