<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        {
          title: 'Home',
          to: { name: 'pages-home' },
        },
        { title: '공지사항' },
      ]"
    />
  </div>
  <div
    class="page-title-area d-flex flex-wrap justify-start justify-sm-space-between gap-x-6 mb-6 align-items-center"
  >
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">공지사항</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </div>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="4" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="제목 작성자를 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="3" md="4" sm="12" xs="12" v-show="expanded">
          <DemoDateTimePickerRange />
        </VCol>
        <VCol cols="12" lg="6" md="4" sm="12" xs="12">
          <div class="d-flex gap-2 flex-wrap justify-end w-100">
            <VBtn variant="outlined" color="secondary"
              ><VIcon start icon="tabler-refresh" />초기화</VBtn
            >
            <VBtn color="primary"
              ><VIcon start icon="tabler-search" />조회</VBtn
            >
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="card-table-infinity">
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">10</span></div>
              <div class="item">
                <VChip
                  color="primary"
                  size="x-small"
                  variant="elevated"
                  class="custom-chip"
                >
                  <VIcon icon="tabler-pinned" />
                </VChip>
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
                <VChip color="error" size="x-small" variant="elevated">N</VChip>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">9</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">8</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">7</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">6</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">5</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">4</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">3</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">2</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item"><span class="item-num">1</span></div>
              <div class="item">
                <span class="item-cell-title">
                  공지사항 타이틀이 이렇게 들어갑니다.</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">작성자</span>
                <span class="item-text">김영업</span>
              </div>
              <div class="item">
                <span class="item-title">게시일</span>
                <span class="item-text">2024.12.12</span>
              </div>
              <div class="item">
                <span class="item-title">조회수</span>
                <span class="item-text">74,123</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>

      <div class="d-flex mt-2 flex-wrap justify-center w-100 card-more-btn">
        <VBtn size="small" color="secondary" variant="tonal">
          <VIcon start icon="tabler-plus" />
          더보기
        </VBtn>
      </div>
    </VCol>
  </VRow>
</template>

<script>
export default {
  data() {
    return {
      expanded: true,
      values: "",
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-table-infinity {
  .v-chip .v-icon {
    block-size: 14px;
    font-size: 14px;
    inline-size: 14px;
    width: 20px;
  }
}
.custom-chip {
  padding: 0 !important;
  border-radius: 10px !important;
  min-width: 20px !important;
}
.item-num {
  color: var(--primary-main);
}
.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  width: 50px;
  min-width: 50px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(1) {
  width: 93px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(2) {
  width: 121px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(3) {
  width: 120px;
}
@media (max-width: 960px) {
  .card-table-infinity .data .justify-content-end {
    justify-content: space-between;
  }
}
</style>
