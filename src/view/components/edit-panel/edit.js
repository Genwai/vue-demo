export default {
  name: 'Edit',
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
      data: {},
    };
  },
  computed: {
    title() {
      return this.isNew ? `新增${this.name}` : `编辑${this.name}`;
    },
    isNew() {
      return this.id === 'new';
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.id !== 'new') {
        this.loading = true;
        this.handleDetDetail()
          .then((res) => {
            this.loading = false;
            this.data = res;
            return res;
          }, (res) => {
            this.loading = false;
            this.$message.error('获取数据失败, 请重试');
            return res;
          });
      }
    },
    save() {
      this.loading = true;
      this.handleSave()
        .then(() => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: `${this.isNew ? '新建' : '更新'}${this.name}成功`,
            type: 'success',
          });
        }, () => {
          this.loading = false;
          this.$message.error(`${this.isNew ? '新建' : '更新'}${this.name}失败, 请重试`);
        });
    },
  },
};
