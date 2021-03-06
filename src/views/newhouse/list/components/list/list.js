import { Project } from "@/api";

export default {
  name: 'list',
  props: [ 'data', 'page' ],
  methods: {
    handleCurrentChange(val) {
      this.page.current = val;
      this.$emit('getList');
    },
    concernProject(row) {
      const param = {
        projectId: row.id
      };
      Project.concernProject(param).then(res => {
        if (res.code === 10021) {
          this.$store.dispatch('app/setLogin', true);
        }
      });
    }
  }
};
