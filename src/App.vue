
<template>
  <main>
    <TimeDashboardLayout>
      <template #side-column>
        <ReportPresentationCard />
      </template>
      <template #main-grid>
        <div>
          main grid
        </div>
      </template>
    </TimeDashboardLayout>
  </main>
</template>

<script>
import TimeDashboardLayout from '@/layouts/time-dashboard-layout/time-dashboard-layout.vue'
import ReportPresentationCard from '@/components/report-presentation-card/report-presentation-card.vue'

export default {
  components: {
    TimeDashboardLayout,
    ReportPresentationCard
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
</style>
