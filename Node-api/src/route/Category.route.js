const category_controller = require("../controller/Category.controller");

const cate= (app) => {
    app.get("/api/cate",category_controller.get_list);
    app.post("/api/cate",category_controller.create);
    app.put("/api/cate",category_controller.update);
    app.delete("/api/cate",category_controller.remove);
}

module.exports = cate;

