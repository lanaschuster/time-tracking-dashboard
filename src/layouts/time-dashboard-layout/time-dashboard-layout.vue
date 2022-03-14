<template>
  <section>
    <div class="side-column">
      <slot name="side-column"></slot>
    </div>
    <div class="main-grid">
      <slot name="main-grid"></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: $grid-gap;
  flex-wrap: wrap;
  width: 100%;
}

@media screen and (max-width: 768px) {
  section {
    row-gap: $grid-gap;
    overflow-y: scroll;
  }
  .side-column, .main-grid {
    padding: 0 16px;
  }
}
</style>
