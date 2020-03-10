<template>

  <section class="h100b">

    <Row
      class="h100b "
      :gutter='20'
    >
      <Col
        span="4"
        class="h100b base_fgLine"
      >

      <ul class="h100b base_ul base_tb_frame_auto overflowAuto">
        <div class="pdtb20">
          <Button
            type="default"
            size='small'
            @click="addRole=1"
          >添加角色</Button>
          <div
            class="mart20 pdtb20 "
            v-if="addRole==1"
          >
            <Input
              type="text"
              placeholder="请输入角色名"
            ></Input>
            <Button
              type="primary"
              size='small'
              class="mart20"
            >添加</Button>
            <Button
              type="default"
              size='small'
              class="mart20"
              @click="addRole=0"
            >取消</Button>
          </div>
        </div>
        <li
          :class="{base_li:1, base_li_hover:1,  on8:select_role.id==v.id , base_xx:1,pdl10:1}"
          v-for="(v,i) in roleList"
          :key='i'
          @click="select_role=v;role_edit=v.name"
        >
          <div class="base_li_l">{{v.name}}</div>
        </li>

      </ul>

      </Col>
      <Col
        span="20"
        class="h100b "
      >
      <section class="h100b base_tb_frame">

        <li class="base_li pdtb20   ">
          <div class="base_li_l" style="max-width:400px;">
            <span class="base_page_title" v-if="!showEdit">

              {{select_role.name||"请选择一个角色"}}
            </span>
            <span v-if="showEdit">

              <Input v-model="role_edit" style="width:160px"></Input>
              <Button type="primary"  >保存</Button>
              <Button type="default"  @click="showEdit=false">取消</Button>

            </span>


          </div>
          <div class="base_li_l">

            <Button
              type="default"
              size='small'
              :disabled='!select_role.name'
              class="marr10"
              @click="showEdit=true"
            >修改角色名称</Button>

            <Button
              type="default"
              size='small'
              :disabled='!select_role.name'
              class="marr10"
            >删除角色</Button>

          </div>
        </li>

        <aside class="base_tb_frame_auto overflowAuto   pdtb20">

          <h3 class="h40 mart20">订单管理</h3>

          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>

          <h3 class="h40 mart20">报表管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">评价管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">商城管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">物料管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">报修管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">员工管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">房间管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">房间管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">房间管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>
          <h3 class="h40 mart20">房间管理</h3>
          <CheckboxGroup>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
            <Checkbox label="twitter">权限1</Checkbox>
          </CheckboxGroup>

        </aside>

        <div class=" ">
          <Button
            type="primary"
            class="mart20"
          >保存权限({{select_role.name}})</Button>
        </div>
      </section>
      </Col>
    </Row>

  </section>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      roleList: [
        { name: "管理员", id: 1 },
        { name: "大堂经理", id: 2 },
        { name: "前台", id: 3 },
        { name: "电工", id: 4 },
        { name: "清洁员", id: 5 }
      ],
      select_role: {},
      addRole: 0,
      showEdit:false,

    };
  },
  computed: {
    store() {
      return this.$store.state;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>>
