
<template>
  <main>
    <TimeDashboardLayout>
      <template #side-column>
        <ReportPresentationCard />
      </template>
      <template #main-grid>
        <DashboardItemCard
          variant="work"
          main-text="32hrs"
          description="Last Week - 36hrs"
        />
        <DashboardItemCard
          variant="play"
          main-text="10hrs"
          description="Last Week - 8hrs"
        />
        <DashboardItemCard
          variant="study"
          main-text="4hrs"
          description="Last Week - 7hrs"
        />
        <DashboardItemCard
          variant="exercise"
          main-text="4hrs"
          description="Last Week - 5hrs"
        />
        <DashboardItemCard
          variant="social"
          main-text="5hrs"
          description="Last Week - 10hrs"
        />
        <DashboardItemCard
          variant="self-care"
          main-text="2hrs"
          description="Last Week - 2hrs"
        />
      </template>
    </TimeDashboardLayout>
  </main>
</template>

<script>
import TimeDashboardLayout from '@/layouts/time-dashboard-layout/time-dashboard-layout.vue'
import ReportPresentationCard from '@/components/report-presentation-card/report-presentation-card.vue'
import DashboardItemCard from '@/components/dashboard-item-card/dashboard-item-card.vue'

export default {
  components: {
    TimeDashboardLayout,
    ReportPresentationCard,
    DashboardItemCard
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: $font-family;
}
body, #app {
  height: 100vh;
  background-color: $theme-darkest-color;
}
main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 921px) {
  main {
    height: 100%;
    display: block;
    padding: 32px 0;
  }
}
</style>
