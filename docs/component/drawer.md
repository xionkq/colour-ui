# 抽屉

## 基础用法（参考 [daisyUI](https://daisyui.com/components/drawer/#drawer-sidebar)，很棒的思路）

<div>
  <div class="drawer">
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-1" class="btn drawer-button">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-white min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        something else here
      </div>
    </div>
  </div>
</div>

## 不同方向

<div>
  <div class="drawer drawer-end">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn drawer-button">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-white min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        something else here
      </div>
    </div>
  </div>
</div>

## 自定义宽度

<div>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-3" class="btn drawer-button">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-white min-h-full w-150 p-4">
        <!-- Sidebar content here -->
        something else here
      </div>
    </div>
  </div>
</div>

