
<template>
  <BasicLayout>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>菜单配置</span>
        <span style="float:right">
          <el-button
            type="primary"
            @click="dialogFormVisibleAdd = true"
          >添加路由</el-button>
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
              @click="deleteData(scope.row)"
            >删除</el-button>
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

      <!-- 添加路由表单 -->
      <el-dialog
        title="添加菜单"
        :visible.sync="dialogFormVisibleAdd"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="35%"
      >
        <el-form :model="form">
          <!-- 上级菜单 -->
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="上级菜单"
                prop="parent_id"
                :label-width="formLabelWidth"
              >
                <treeselect
                  v-model="form.parent_id"
                  :options="menuOptions"
                  :normalizer="normalizer"
                  :show-count="true"
                  placeholder="选择上级菜单"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 菜单标题，菜单排序 -->
          <el-row :gutter="60">
            <el-col :span="12">
              <el-form-item
                label="菜单名称"
                prop="name"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="form.name"
                  placeholder="请输入菜单名称"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="菜单类型"
                prop="type"
                :label-width="formLabelWidth"
              >
                <el-radio-group v-model="form.type">
                  <el-radio label="page">页&nbsp;&nbsp;&nbsp;&nbsp;面</el-radio>
                  <el-radio label="api">接&nbsp;&nbsp;&nbsp;&nbsp;口</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 菜单类型 -->
          <el-row :gutter="60">
            <el-col :span="12">
              <el-form-item
                label="显示排序"
                prop="sort"
                :label-width="formLabelWidth"
              >
                <el-input-number
                  v-model="form.sort"
                  controls-position="right"
                  :min="0"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="菜单状态"
                prop="status"
                :label-width="formLabelWidth"
              >
                <el-radio-group v-model="form.status">
                  <el-radio label="1">已启用</el-radio>
                  <el-radio label="2">未启用</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 菜单图标 -->
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="菜单图标"
                prop="icon"
                :label-width="formLabelWidth"
              >
                <el-popover
                  placement="bottom-start"
                  width="460"
                  trigger="click"
                  @show="$refs['iconSelect'].reset()"
                >
                  <IconSelect
                    ref="iconSelect"
                    @selected="selectIcon"
                  />
                  <el-input
                    slot="reference"
                    v-model="form.icon"
                    placeholder="点击选择图标"
                    readonly
                  >
                    <svg-icon
                      v-if="form.icon"
                      slot="prefix"
                      :icon-class="form.icon"
                      class="el-input__icon"
                      style="height: 36px;width: 16px;"
                    />
                    <i
                      v-else
                      slot="prefix"
                      class="el-icon-search el-input__icon"
                    />
                  </el-input>
                </el-popover>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 路由地址 -->
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="路由地址"
                prop="route"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="form.route"
                  placeholder="请输入路由地址"
                />
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
          <el-button
            type="primary"
            @click="addData"
          >确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </BasicLayout>
</template>

<script>
import { listMenu, addMenu, delMenu, updateMenu } from '@/api/gorbac/system/meuns'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import IconSelect from '@/components/IconSelect'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Treeselect, IconSelect, Pagination },
  data() {
    return {
      // 菜单树选项
      menuOptions: [],
      // 数据列表
      list: [],
      // 总条数
      total: 0,
      // 列表加载效果
      listLoading: true,
      // 查询条件
      listQuery: {
        page: 1,
        limit: 10
      },
      // 添加路由表单
      dialogFormVisibleAdd: false,
      // 添加表单
      form: {
        parent_id: 0,
        name: null,
        type: 'page',
        sort: 0,
        status: '1',
        icon: null,
        route: null
      },
      formLabelWidth: '80px'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 菜单名称样式处理
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (row.children === null && columnIndex === 0) {
        return 'xw-cell'
      }
    },
    // 转换菜单数据结构
    normalizer(node) {
      // 去掉children=null的属性
      if (node.children == null || node.children === 'null') {
        delete node.children
      }
      return {
        id: node.id,
        label: node.name,
        children: node.children
      }
    },
    // 选择图标
    selectIcon(name) {
      this.form.icon = name
    },
    // 获取数据列表
    getList() {
      this.listLoading = true
      listMenu(this.listQuery).then(response => {
        // 列表数据
        this.list = response.data

        // 列表上级选项
        this.menuOptions = []
        const menu = { id: 0, name: '顶级目录', children: [] }
        menu.children = response.data
        this.menuOptions.push(menu)
        // 1.5秒后自动关闭加载样式
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    // 添加数据
    addData() {
      addMenu(this.form).then(response => {
        if (response.code === 20000) {
          this.dialogFormVisibleAdd = false
          this.$message.success(response.msg)
          this.getList()
        }
      })
    },
    // 删除数据
    deleteData(row) {
      const that = this
      this.$confirm('是否确认删除名称为"' + row.name + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        delMenu({ id: row.id }).then(response => {
          console.log(response)
          if (response.code === 20000) {
            that.$message.success(response.msg)
            that.getList()
          }
        })
      }).catch(function() { })
    },
    // 修改数据
    aeditData() {
      updateMenu(this.form).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>
