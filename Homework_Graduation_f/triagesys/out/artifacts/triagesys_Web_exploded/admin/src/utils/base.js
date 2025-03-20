const base = {
    get() {
        return {
            url : "http://localhost:8080/triagesys/",
            name: "triagesys",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/triagesys/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于智能体的儿科发热分诊对话系统"
        } 
    }
}
export default base
