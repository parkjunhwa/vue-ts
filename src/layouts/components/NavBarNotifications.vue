<script lang="ts" setup>
import type { Notification } from "@layouts/types";

const notifications = ref<Notification[]>([
  {
    id: 1,
    title: "가입을을축하드립니다 🎉",
    subtitle: "가입인사",
    time: "오늘",
    isSeen: true,
  },
  {
    id: 2,
    title: "개인정보 수정.",
    subtitle: "5 시간 전",
    time: "어제",
    isSeen: false,
  },
  {
    id: 3,
    title: "새로운 메시지가 도착했습니다.👋🏻",
    subtitle: "읽지 않은 메시지 10개",
    time: "11월 11일",
    isSeen: true,
  },
  {
    id: 4,
    title: "새로운 메시지가 도착했습니다.👋🏻",
    subtitle: "읽지 않은 메시지 10개",
    time: "11월 11일",
    isSeen: true,
  },
  {
    id: 5,
    title: "새로운 메시지가 도착했습니다.👋🏻",
    subtitle: "읽지 않은 메시지 10개개",
    time: "11월 11일",
    isSeen: true,
  },
]);

const removeNotification = (notificationId: number) => {
  notifications.value.forEach((item, index) => {
    if (notificationId === item.id) notifications.value.splice(index, 1);
  });
};

const markRead = (notificationId: number[]) => {
  notifications.value.forEach((item) => {
    notificationId.forEach((id) => {
      if (id === item.id) item.isSeen = true;
    });
  });
};

const markUnRead = (notificationId: number[]) => {
  notifications.value.forEach((item) => {
    notificationId.forEach((id) => {
      if (id === item.id) item.isSeen = false;
    });
  });
};

const handleNotificationClick = (notification: Notification) => {
  if (!notification.isSeen) markRead([notification.id]);
};
</script>

<template>
  <Notifications
    :notifications="notifications"
    @remove="removeNotification"
    @read="markRead"
    @unread="markUnRead"
    @click:notification="handleNotificationClick"
  />
</template>
