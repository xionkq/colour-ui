<script setup>
import { CButton, CInput } from '@colour-ui/components'
import '@colour-ui/theme/src/styled/input.css'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="play-container">
    <div>
      <label class="input">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49"
          />
        </svg>
        <input />
      </label>
    </div>
    <div>
      <c-input placeholder="Normal" />
      <c-input placeholder="Password" type="password" />
      <c-input placeholder="Round" round />
      <c-input placeholder="Disabled" disabled />
    </div>
    <div style="margin-top: 10px">
      <c-input placeholder="Blue" status="info" />
      <c-input placeholder="Green" status="success" />
      <c-input placeholder="Yellow" status="warning" />
      <c-input placeholder="Red" status="error" />
    </div>
    <div style="margin-top: 10px">
      <c-input placeholder="Large" size="lg" />
      <c-input placeholder="Medium" />
      <c-input placeholder="Small" size="sm" />
    </div>
    <div style="margin-top: 10px">
      <c-input placeholder="Suffix icon" suffix-icon="tdesign:search" />
      <c-input placeholder="Suffix slot" suffix-icon="tdesign:search">
        <template #suffix>
          <Icon icon="tdesign:search" />
        </template>
      </c-input>
      <c-input placeholder="Prefix icon" prefix-icon="tdesign:search" />
      <c-input placeholder="Prefix slot" prefix-icon="tdesign:search">
        <template #prefix>
          <Icon icon="tdesign:search" />
        </template>
      </c-input>
    </div>
    <div style="margin-top: 10px">
      <c-button>Button</c-button>
      <c-button type="info">Info</c-button>
      <c-button type="success">Success</c-button>
      <c-button type="warning">Warning</c-button>
      <c-button type="error">Error</c-button>
    </div>
    <div style="margin-top: 10px">
      <c-button outline>Button</c-button>
      <c-button type="info" outline>Info</c-button>
      <c-button type="success" outline>Success</c-button>
      <c-button type="warning" outline>Warning</c-button>
      <c-button type="error" outline>Error</c-button>
    </div>
    <div style="margin-top: 10px">
      <c-button size="lg">Large</c-button>
      <c-button>Medium</c-button>
      <c-button size="sm">Small</c-button>
      <c-button size="xs">Tiny</c-button>
    </div>
    <div style="margin-top: 10px">
      <c-button icon="tdesign:search" size="lg" circle></c-button>
      <c-button icon="tdesign:search" circle></c-button>
      <c-button icon="tdesign:search" size="sm" circle></c-button>
      <c-button icon="tdesign:search" size="xs" circle></c-button>
      <c-button icon="tdesign:search" type="info" circle></c-button>
      <c-button icon="tdesign:search" type="success" circle></c-button>
      <c-button icon="tdesign:search" type="warning" circle></c-button>
      <c-button icon="tdesign:search" type="error" circle></c-button>
    </div>
    <div style="margin-top: 10px">
      <c-button icon="tdesign:search"></c-button>
      <c-button icon="tdesign:search">Search</c-button>
      <c-button icon="tdesign:search" icon-placement="right">Search</c-button>
    </div>
    <div style="margin-top: 10px">
      <c-button disabled>Button</c-button>
      <c-button type="info" disabled>Info</c-button>
      <c-button type="success" disabled>Success</c-button>
      <c-button type="warning" disabled>Warning</c-button>
      <c-button type="error" disabled>Error</c-button>
    </div>
    <div style="margin-top: 10px">
      <c-button outline disabled>Button</c-button>
      <c-button type="info" outline disabled>Info</c-button>
      <c-button type="success" outline disabled>Success</c-button>
      <c-button type="warning" outline disabled>Warning</c-button>
      <c-button type="error" outline disabled>Error</c-button>
    </div>
  </div>
</template>

<style scoped>
.play-container {
  --color-bg-100: #ffffff;
  --color-bg-200: #e5e6e6;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--color-bg-100),
    var(--color-bg-100) 13px,
    var(--color-bg-200) 13px,
    var(--color-bg-200) 14px
  );
}

@media (prefers-color-scheme: dark) {
  .play-container {
    --color-bg-100: #1d232a;
    --color-bg-200: #191e24;
  }
}
</style>
