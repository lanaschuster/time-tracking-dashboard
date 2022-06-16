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
  width: 100%;
  height: $main-section-height;

  .side-column {
    height: 100%;
  }
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 8px;
    height: 100%;
  }
}

@media screen and (max-width: 921px) {
  section {
    height: 100%;
    row-gap: $grid-gap;
    flex-direction: column;
    width: fit-content;
    justify-content: flex-start;
    align-items: center;
    
    .main-grid {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 4px;
      height: 100%;
      width: 100%;
    }

    .side-column, .main-grid {
      padding: 0 16px;
      width: 100%;
    }
  }
}
</style>
