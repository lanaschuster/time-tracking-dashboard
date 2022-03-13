<template>
  <div class="report-presentation-card">
    <div class="presentation">
      <img src="/images/image-jeremy.png" alt="Avatar">
      <div>
        Report for
        <span>Jeremy Robson</span>
      </div>
    </div>
    <div class="filters">
      <a href="#">Daily</a>
      <a href="#">Weekly</a>
      <a href="#">Monthly</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.report-presentation-card {
  width: $report-presentation-card-width;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  background: $theme-dark-color;
  border-radius: $border-radius;
  

  .filters {
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: $grid-gap;
    
    a {
      text-decoration: none;
      color: $theme-light-color;
    }

    a:hover {
      text-decoration: none;
      color: white;
    }
  }

}
.report-presentation-card .presentation {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: calc($report-presentation-card-width - 48px);
  background: $primary;
  border-radius: $border-radius;
  padding: 24px 24px 64px 24px;

  img {
    width: 64px;
    border-radius: 500px;
    border: solid white 2px;
  }

  div {
    font-size: 14px;
    line-height: 120%;
    color: $theme-lightest-color;
  }

  div span {
    color: white;
    font-size: 36px;
    font-weight: 300;
    line-height: 120%;
  }
}
@media screen and (max-width: 768px) {
  // TODO
}
</style>
