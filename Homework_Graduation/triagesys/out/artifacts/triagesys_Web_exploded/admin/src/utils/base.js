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
            projectName: "医院分诊系统"
        } 
    }
}
export default base
