<template>

  <section class="h100b">

    <Row
      class="h100b "
      :gutter='20'
    >
      <Col
        span="4"
        class="h100b base_fgLine base_tb_frame"
      >

      <section
        style="height:100%"
        class="base_tb_frame_auto overflowAuto"
      >
        <h4>部门选择</h4>
        <Tree
          :data="role_list"
          @on-select-change='(v)=>select_Arr=v'
        ></Tree>

      </section>
      </Col>
      <Col
        span="4"
        class="h100b base_fgLine base_tb_frame"
      >

     
      <section
        style="max-height:50%"
        class="base_tb_frame_auto overflowAuto"
      >
        <h4>角色选择</h4>
        <li
          :class="{base_li:1, base_li_hover:1,  on8:select_role.id==v.id , base_xx:1,pdl10:1}"
          v-for="(v,i) in roleList"
          :key='i'
          @click="select_role=v"
        >
          <div class="base_li_l">{{v.name}}</div>
        </li>
      </section>
      
      </Col>


      <Col
        span="16"
        class="h100b base_fgLine"
      >
      <section class="h100b base_tb_frame">

        <div class="base_li">
          <div
            class="base_li_l "
            style="max-width:400px;"
            v-if="select_node.title"
          >
            <span class="base_page_title">
              {{select_node.title}}
            </span>

            <Button
              type="default"
              @click="btnClick(1)"
              :disabled='!select_node.title'
              style="margin-left:100px"
            >添加员工</Button>

          </div>
          <div class="base_li_l">

            <span class="b marr20">已选择{{selectUserArr.length}}人</span>
            <Button
              type="default"
              class="marr10"
              @click="btnClick(2)"
              :disabled='!selectUserArr.length'
            >设置角色</Button>
            <Button
              type="default"
              class="marr10"
              @click="btnClick(3)"
              :disabled='!selectUserArr.length'
            >转移部门</Button>

          </div>
        </div>

        <div
          class="base_tb_frame_auto overflowAuto mart20"
          ref="tableBox"
        >

          <Table
            border
            ref="userTabe"
            :columns="columns"
            :data="userAjaxList"
            :max-height='tableHeight'
            @on-selection-change='tableSelect'
          ></Table>

        </div>

      </section>
      </Col>

    </Row>

    <Drawer
      v-model="openRightDrawer"
      width='600'
      style="padding:20px"
    >

      <section v-if="drawer_type==1">

        <Row>
          <!-- =================================== -->
          <div
            class="base_page_title"
            style="height:60px;"
          >添加员工到 {{select_node.title}}</div>

          <Row class="base_form_row">
            <Col
              span="5"
              class="base_form_label"
            >
            姓名<span class="bt">*</span>
            </Col>
            <Col span="19">
            <Input />

            </Col>
          </Row>
          <Row class="base_form_row">
            <Col
              span="5"
              class="base_form_label"
            >
            登陆账号(手机号)
            </Col>
            <Col span="19">
            <Input /></Input>

            </Col>
          </Row>
          <Row class="base_form_row">

            <Col
              span="5"
              class="base_form_label"
            >
            住址<span class="bt">*</span>
            </Col>
            <Col span="19">
            <Input />

            </Col>
          </Row>
          <Row class="base_form_row">

            <Col
              span="5"
              class="base_form_label"
            >
            身份证号码<span class="bt">*</span>
            </Col>
            <Col span="19">
            <Input /></Input>

            </Col>
          </Row>
          <Row class="base_form_row">
            <Col
              span="5"
              class="base_form_label"
            >
            登陆状态<span class="bt">*</span>
            </Col>
            <Col span="19">
            <RadioGroup>
              <Radio label="1">正常登陆</Radio>
              <Radio label="0">禁止登陆</Radio>
            </RadioGroup>

            </Col>

          </Row>

        </Row>
        <Button
          type="primary"
          class="marr10"
        >添加</Button>
      </section>
      <section v-if="drawer_type==2">

        <div class="base_page_title">请选择一个角色</div>
        <li
          :class="{base_li:1, base_li_hover:1,  on8:select_role_new.id==v.id , base_xx:1,pdl10:1}"
          v-for="(v,i) in roleList"
          :key='i'
          @click="select_role_new=v"
        >
          <div class="base_li_l">{{v.name}}</div>
        </li>

        <Button
          type="primary"
          class="mart20"
        >保存</Button>

      </section>

      <section v-if="drawer_type==3">
        <div class="base_page_title"> {{moveTips}} 从 {{select_node.title}} 转移到</div>
        <Tree
          :data="role_list"
          @on-select-change='(v)=>{select_Arr2=v}'
        ></Tree>
        <Button
          type="primary"
          class="mart20"
          :disabled='!selectUserArr.length'
        >保存</Button>
      </section>

    </Drawer>

  </section>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableHeight: 600,
      select_role: {},
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
      select_Arr: [], //选中的部门(数组)
      select_Arr2: [], //选中的部门-转移部门(数组)

      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          width: 60,
          title: "id",
          key: "id"
        },
        {
          title: "角色",
          key: "role"
        },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "联系方式",
          key: "age"
        },
        {
          title: "住址",
          key: "address"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "查看",
          key: "view"
        }
      ],
      userAjaxList: [
        {
          id: "1",
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
          view: "详情 编辑 删除",
          status: "正常",
          role: "前台"
        },
        {
          id: "2",
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
          view: "详情 编辑 删除",
          status: "正常",
          role: "前台"
        },
        {
          id: "3",
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
          view: "详情 编辑 删除",
          status: "正常",
          role: "前台"
        },
        {
          id: "4",
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
          view: "详情 编辑 删除",
          status: "禁止登陆",
          role: "前台"
        }
      ],
      selectUserArr: [],
      openRightDrawer: false,
      drawer_type: 0, //1=添加员工,2=设置角色,3=编辑员工,4=转移部门
      roleList: [
        { name: "全部", id: 0 },
        { name: "管理员", id: 1 },
        { name: "大堂经理", id: 2 },
        { name: "前台", id: 3 },
        { name: "电工", id: 4 },
        { name: "清洁员", id: 5 }
      ],

      select_role: { name: "全部", id: 0 },
      select_role_new: {},
      role_edit:'',//编辑角色名字
    };
  },
  computed: {
    store() {
      return this.$store.state;
    },
    select_node() {
      //选中的部门
      return this.select_Arr[0] || {};
    },
    moveTips() {
      let selectUserArr = this.selectUserArr;
      if (selectUserArr.length == 1) {
        return selectUserArr[0].name;
      } else {
        return selectUserArr.length + "位员工";
      }
    }
  },
  methods: {
    tableSelect(selection) {
      this.selectUserArr = selection;
    },
    btnClick(type) {
      this.drawer_type = type;
      this.openRightDrawer = true;
    }
  },
  mounted() {
    function getStyle(element, attr) {
      if (element.currentStyle) {
        return element.currentStyle[attr];
      } else {
        return getComputedStyle(element, false)[attr];
      }
    }

    let tableBox = this.$refs.tableBox;
    let h = getStyle(tableBox, "height");
    h = parseInt(h);
    this.tableHeight = h - 20;
  }
};
</script>

<style scoped>
</style>>
