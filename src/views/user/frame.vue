<template>
  <Layout class="h100b">
    <Sider
      hide-trigger
      :style="{background: '#fff'}"
      class="h100b"
    >
      <Menu
        active-name="1-2"
        theme="light"
        width="auto"
        :open-names="['1']"
        class="h100b"
      >
        
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            组织架构
          </template>
          <MenuItem name="2-1" to='/user/class'>部门设置</MenuItem>
          <MenuItem name="2-2"  to='/user/user'>员工管理</MenuItem>
          <MenuItem name="2-3"  to='/user/role'>角色管理</MenuItem>
        </Submenu>
        
      </Menu>
    </Sider>
    
    <Layout :style="{padding: '0 24px 24px'}"  class="h100b">
      <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem to='/'>首页</BreadcrumbItem>
        <BreadcrumbItem to='/system'>系统</BreadcrumbItem>
      </Breadcrumb>
      <Content class="h100b" :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>

</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
