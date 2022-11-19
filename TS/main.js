var tBody = document.querySelector(".table tbody");
console.log(tBody);
function getData(url, method) {
    if (method === void 0) { method = "GET"; }
    var datas = fetch(url, { method: method }).then(function (response) { return response.json(); });
    return datas;
}
function tableRender(datas) {
    datas.then(function (dataCol) {
        dataCol.forEach(function (data) {
            tBody.innerHTML +=
                "<tr class=\"fw-normal\">\n                <th>\n                <span class=\"ms-2\">".concat(data.userId, "</span>\n                </th>\n                <td class=\"align-middle\">\n                <span>").concat(data.title, "</span>\n                </td>\n                <td class=\"align-middle\">\n                <h6 class=\"mb-0\"><span class=\"badge bg-").concat(data.completed ? "success" : "danger", "\">").concat(data.completed, "</span></h6>\n                </td>\n            </tr>");
        });
    });
}
tableRender(getData("https://jsonplaceholder.typicode.com/todos"));
// console.log(getData("https://jsonplaceholder.typicode.com/todos"));
