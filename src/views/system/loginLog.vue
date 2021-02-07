<template>
  <div class="main">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>登录日志</span>
      </div>

      <el-table
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column
          label="序号"
          prop="id"
          sortable="custom"
          align="center"
          width="80"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户名" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="角色" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.account_id === 1" type="info">{{ scope.row.role_name }}</el-tag>
            <el-tag v-else type="success">{{ scope.row.role_name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="登录IP">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.ip }}</span>
          </template>
        </el-table-column>
        <el-table-column label="登录地址" align="center">
          <template slot-scope="{row}">
            <el-tag>{{ row.address }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="时间" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
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
  </div>
</template>

<script>
import { loginLog } from '@/api/gorbac/system/logs'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      list: null,
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
    getList() {
      this.listLoading = true
      loginLog(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total

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
.main {
  padding: 32px;
}
</style>
