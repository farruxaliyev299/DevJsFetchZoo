const tBody = document.querySelector(".table tbody");
console.log(tBody);

interface IData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


function getData(url:string, method: string = "GET"){
    const datas = fetch(url, {method: method}).then(response => response.json());

    return datas;
}

function tableRender(datas){
    datas.then(dataCol => {
        dataCol.forEach(data => {
            tBody!.innerHTML += 
            `<tr class="fw-normal">
                <th>
                <span class="ms-2">${data.userId}</span>
                </th>
                <td class="align-middle">
                <span>${data.title}</span>
                </td>
                <td class="align-middle">
                <h6 class="mb-0"><span class="badge bg-${data.completed ? "success":"danger"}">${data.completed}</span></h6>
                </td>
            </tr>`
        });
    })
}

tableRender(getData("https://jsonplaceholder.typicode.com/todos"));

// console.log(getData("https://jsonplaceholder.typicode.com/todos"));