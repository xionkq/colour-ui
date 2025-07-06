# 滑块

## 基础用法

<div>
  <input type="range" min="0" max="100" value="40" class="slider" />
</div>

## 禁用状态

<div>
  <input type="range" min="0" max="100" value="40" class="slider" disabled />
</div>

## 带刻度（步长）

<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="slider" step="25" />
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</div>

## 带建议值（滑块会微微停顿一下）

<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="slider" list="tickmarks" />

  <!-- Will not be displayed -->
  <datalist id="tickmarks">
    <option value="0"></option>
    <option value="25"></option>
    <option value="50"></option>
    <option value="75"></option>
    <option value="100"></option>
  </datalist>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</div>

## 不同颜色

<div class="flex flex-col gap-4">
  <input type="range" min="0" max="100" value="40" class="slider slider-info" />
  <input type="range" min="0" max="100" value="40" class="slider slider-success" />
  <input type="range" min="0" max="100" value="40" class="slider slider-warning" />
  <input type="range" min="0" max="100" value="40" class="slider slider-error" />
</div>

## 不同尺寸

<div class="flex flex-col gap-4">
  <input type="range" min="0" max="100" value="40" class="slider slider-lg" />
  <input type="range" min="0" max="100" value="40" class="slider slider-md" />
  <input type="range" min="0" max="100" value="40" class="slider slider-sm" />
</div>

## 反向模式

<div>
  <input type="range" min="0" max="100" value="40" class="slider slider-reverse" />
</div>

## 自定义图标（wip）

<div></div>
