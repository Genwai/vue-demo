export default {
  name: 'List',
  data() {
    return {
      query: {},
      loading: false,
      pagination: {
        index: 1,
        max: 10,
        records: 0,
        total: 0,
      },
      data: [],
      sort: {
        prop: 'name',
        order: 'descending',
      },
    };
  },
  computed: {
  },
  methods: {
    search() {
      this.loading = true;
      const query = _.cloneDeep(this.query);
      query.pagination = this.pagination;
      query.sort = this.sort;
      /* eslint-disable */
      query.sort.asc = query.sort.order === 'descending' ? false : true;
      delete query.sort.order;
      this.getData(query)
        .then((res) => {
          this.data = res.data;
          this.pagination = res.pagination;
          this.loading = false;
        }, () => {
          this.loading = false;
        });
    },
    // 页码变化
    currentChange(newV) {
      console.log('hagga');
      this.pagination.index = newV;
      this.search();
    },
    // 排序变化
    sortChange(newV) {
      this.sort.order = newV.order;
      this.sort.prop = newV.prop;
      this.search();
    },
    countMethod(index) {
      return (this.pagination.index - 1) * this.pagination.max + index + 1;
    },
  },
};
