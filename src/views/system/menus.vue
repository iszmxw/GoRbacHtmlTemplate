
<template>
  <BasicLayout>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>菜单配置</span>
        <span style="float:right">
          <router-link to="/role/add">
            <el-button type="primary">添加路由</el-button>
          </router-link>
        </span>
      </div>

      <el-table
        v-loading="listLoading"
        :data="list"
        highlight-current-row
        row-key="id"
        :cell-class-name="cellStyle"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          label="菜单名称"
          prop="name"
          align="left"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="图标"
          align="left"
        >
          <template slot-scope="scope">
            <svg-icon :icon-class="scope.row.icon" />
          </template>
        </el-table-column>
        <el-table-column
          label="排序"
          align="left"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.account_id === 1"
              type="info"
            >{{ scope.row.sort }}</el-tag>
            <el-tag
              v-else
              type="success"
            >{{ scope.row.sort }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="路径"
          align="left"
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.route">{{ scope.row.route }}</el-tag>
            <el-tag v-else>-</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="可见"
          align="left"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.status === 0"
              type="info"
            >未启用</el-tag>
            <el-tag
              v-else
              type="success"
            >已启用</el-tag>
          </template>

        </el-table-column>
        <el-table-column
          label="创建时间"
          align="left"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="left"
        >
          <template slot-scope="scope">
            <el-button
              type="success"
              size="mini"
            >编辑{{ scope.row.id }}</el-button>
            <el-button
              type="danger"
              size="mini"
            >删除{{ scope.row.id }}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
    </el-card>
  </BasicLayout>
</template>

<script>
import { listMenu } from '@/api/gorbac/system/meuns'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (row.children === null && columnIndex === 0) {
        return 'xw-cell'
      }
    },
    getList() {
      this.listLoading = true
      listMenu(this.listQuery).then(response => {
        this.list = response.data

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }
  }
}
</script>

<style scoped>

</style>
