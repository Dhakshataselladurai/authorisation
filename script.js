const url="http://localhost:5000/tasks";

function loadTasks(){

fetch(url)
.then(res=>res.json())
.then(data=>{

let output="";

data.forEach(task=>{

output+=`
<div class="card">
<h3>${task.name}</h3>

<button onclick="deleteTask('${task._id}')">
Delete
</button>

</div>
`;

});

document.getElementById("tasks").innerHTML=output;

});

}

function addTask(){

let task=document.getElementById("task").value;

fetch(url,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:task

})

}).then(()=>loadTasks());

}

function deleteTask(id){

fetch(url+"/"+id,{

method:"DELETE"

}).then(()=>loadTasks());

}

loadTasks();
