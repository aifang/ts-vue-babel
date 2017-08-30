<template>
    <div>
    <div class="search">
        <el-autocomplete
                popper-class="my-autocomplete"
                placeholder="请输入内容"
                icon="search"
        ></el-autocomplete>
    </div>
        <div id="viewDiv" class="big-map"></div>
    </div>
</template>
<style>
.big-map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: #fff;
}
    .search{position: absolute;width:30%;height:30px;left:10px;top:5px;z-index: 2;}
    .my-autocomplete li{line-height: normal;padding: 7px;}
    .my-autocomplete li .name { text-overflow: ellipsis;  overflow: hidden;}
    .my-autocomplete li .addr { font-size: 12px; color: #b4b4b4;}
    .my-autocomplete li .highlighted .addr {color: #ddd;}
</style>
<script lang="ts">
import map from "./GHMap";
export default map;
</script>
