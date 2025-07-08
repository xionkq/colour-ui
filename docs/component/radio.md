# 单选框

## 基础用法

<div class="flex gap-5">
  <input type="radio" name="radio-1" class="radio" checked />
  <input type="radio" name="radio-1" class="radio" />
</div>

## 禁用状态

<div class="flex gap-5">
  <input type="radio" name="radio-disabled" class="radio" checked disabled />
  <input type="radio" name="radio-disabled" class="radio" disabled />
</div>

## 不同颜色

<div class="flex gap-5">
  <input type="radio" name="radio-color" class="radio radio-info" checked />
  <input type="radio" name="radio-color" class="radio radio-success" />
  <input type="radio" name="radio-color" class="radio radio-warning" />
  <input type="radio" name="radio-color" class="radio radio-error" />
</div>

## 不同尺寸

<div class="flex gap-5 items-center">
  <input type="radio" name="radio-size" class="radio radio-lg" checked />
  <input type="radio" name="radio-size" class="radio radio-md" />
  <input type="radio" name="radio-size" class="radio radio-sm" />
</div>

## 带标签

<div class="flex gap-5 items-center">
  <label class="radio radio-info">
    <input type="radio" name="radio-label" checked />
    <span>很好</span>
  </label>
  <label class="radio radio-success" >
    <input type="radio" name="radio-label" />
    <span>好</span>
  </label>
  <label class="radio radio-error radio-disabled" >
    <input type="radio" name="radio-label" disabled />
    <span>我不好</span>
  </label>
</div>
