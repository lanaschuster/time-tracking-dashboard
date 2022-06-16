<template>
  <div class="report-presentation-card">
    <div class="presentation">
      <img src="/images/image-jeremy.png" alt="Avatar">
      <div>
        Report for<br/>
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
  height: 100%;
  

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
  row-gap: 2rem;
  width: calc($report-presentation-card-width - 48px);
  background: $primary;
  border-radius: $border-radius;
  padding: 2rem 24px 82px 24px;

  img {
    width: 5rem;
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
  .report-presentation-card {
    position: relative;
    width: 100%;
    height: fit-content;

    .filters {
      width: calc(100% - 48px);
      display: flex;
      flex-direction: row;
      column-gap: $grid-gap;
      justify-content: center;
      align-items: center;
    }
  }
  .report-presentation-card .presentation {
    width: calc(100% - 48px);
    align-items: center;
    flex-direction: row;
    column-gap: 16px;
    padding: 24px;

    div span {
      font-size: 24px;
    }
  }
}
</style>
