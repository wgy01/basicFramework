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

      <Tree
        :data="role_list"
        @on-select-change='listClick'
      ></Tree>

      <Alert style='margin-top:300px'>

        部门树,返回格式
        <pre>
          [
            {
              id:1,
              title:'部门1',
              expand: true,//固定格式
              children: [ id,title,expand,children  ]
            },
            ...
           
           
          ]
        </pre>

      </Alert>

      </Col>
      <Col
        span="20"
        class="h100b "
      >
      <section class="h100b base_tb_frame">

        <div class="base_page_title">
          <span v-if="!edit_class">
            {{select_node.title||"请选择部门"}}
            
            <Button
              type="default"
              @click="add_new_class=true"
              :class="{on0:add_new_class==true}"
              :disabled='!select_node.title'
            >添加下属部门</Button>
            <Button
              type="default"
              @click="edit_class=true"
              :class="{on0:edit_class==true}"
              :disabled='!select_node.title'
            >修改部门</Button>
            <Button
              type="default"
              :disabled='!select_node.title'
            >删除部门</Button>
         
          </span>

          <span v-if="edit_class">
            <Input
              v-model="editName"
              style="width:220px"
            ></Input>
            <Button type="primary">保存</Button>
            <Button
              type="default"
              @click="edit_class=false"
            >取消</Button>
          </span>

        </div>

        

        <div
          class="mart20 "
          v-if="add_new_class==1&&select_node.title"
        >
          <Input style="width:200px"></Input>
          <Button type="primary">添加</Button>
          <Button
            type="default"
            @click="add_new_class=0"
          >取消</Button>

        </div>

        </pre>
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
      add_new_class: false,
      edit_class: false,
      role_list: [
        {
          title: "某某某酒店",
          expand: true,
          children: [
            {
              title: "部门1-1",
              expand: true,
              children: [
                {
                  title: "部门1-1-1"
                }
              ]
            }
          ]
        }
      ],
      select_Arr: [],
      editName: "ggg" //修改的部门
    };
  },
  computed: {
    store() {
      return this.$store.state;
    },
    select_node() {
      return this.select_Arr[0] || {};
    }
  },
  methods: {
    listClick(v) {
      console.log(v);
      this.select_Arr = v;
      this.editName = this.select_node.title;
    }
  }
};
</script>

<style scoped>
</style>>
