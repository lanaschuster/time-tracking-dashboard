<template>
  <div class="dashboard-item-card" :class="[ classes ]">
    <div class="header">
      <img :src="image" alt="item image">
    </div>
    <div class="body">
      <div class="title-section">
        {{ title }}
        <img src="/images/icon-ellipsis.svg" alt="Options" title="Options">
      </div>
      <span class="main-text">{{ mainText }}</span>
      <span class="description">{{ description }}</span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  props: {
    variant: {
      type: String,
      required: true,
      validator: (type) => /work|play|study|exercise|social|self-care/.test(type),
    },
    mainText: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const variant = props.variant
    let classes = ref(`${variant}-card`)

    const image = computed(() => {
      return `/images/icon-${variant}.svg`
    })

    const title = computed(() => {
      return props.variant.charAt(0).toUpperCase() + props.variant.slice(1);
    })
    
    return {
      variant,
      classes,
      image,
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-item-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 256px;

  .header {
    border-radius: $border-radius;
    height: 64px;
    width: calc(100% - 32px);
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    padding: 0 16px;

    img {
      transform: translateY(-6px);
    }
  }

  .body {
    background: $theme-dark-color;
    // height: $dashboard-item-card-width;
    width: calc(100% - 64px);
    border-radius: $border-radius;
    transform: translateY(-20px);
    display: flex;
    flex-direction: column;
    padding: 32px;
    cursor: pointer;
    row-gap: 18px;

    &:hover {
      background: $theme-dark-color-hover;
    }

    .title-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-weight: 500;
      // padding: 32px 0 16px 0;

      img {
        cursor: pointer;
      }
    }

    .main-text {
      color: white;
      font-size: 52px;
      // line-height: 140%;
      font-weight: 100;
    }

    .description {
      color: $theme-lightest-color;
      font-size: 14px;

    }
  }
}
.work-card {
  @extend .dashboard-item-card;
  .header {
    background: $work-color;
  }
}
.play-card {
  @extend .dashboard-item-card;
  .header {
    background: $play-color;
  }
}
.study-card {
  @extend .dashboard-item-card;
  .header {
    background: $study-color;
  }
}
.exercise-card {
  @extend .dashboard-item-card;
  .header {
    background: $exercise-color;
  }
}
.social-card {
  @extend .dashboard-item-card;
  .header {
    background: $social-color;
  }
}
.self-care-card {
  @extend .dashboard-item-card;
  .header {
    background: $self-care-color;
  }
}
</style>