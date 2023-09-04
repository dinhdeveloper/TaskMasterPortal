<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column v-for="(name, index) in columnName" :key="index" :prop="index" :label="name" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      list: [
        [1, 2, 3, 4, 5],
        [11, 12, 13, 14, 15],
        [21, 22, 23, 24, 25]
      ],
      columnName: ['a', 'b', 'c', 'd', 'e']
    };
  }
};
</script>
