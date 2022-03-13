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
}
</style>
