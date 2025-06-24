import { db } from './firebase.js';
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const submitBtn = document.getElementById('goalSubmitBtn');
const goal = document.getElementById('goalInput');
const deadline = document.getElementById('dlInput');


submitBtn.addEventListener("click", async ()=>{
	//檢測用戶輸入之目標是否含有合法字元
	if (!goal.value.trim()){
		alert("Please enter at least 1 character.");
		return;
	}
	//若無輸入截止時間則視為無限期
	const gl = goal.value.trim();
	const dl = deadline.value ? deadline.value : "No deadline.";
	//上傳{gl, dl}至firebase
	await addDoc(collection(db, "goals"), {
  		name: gl,
  		deadline: dl,
  		completed: false,
  		timestamp: new Date()
	});
})
//更新To-do list
const toDoList = document.getElementById('toDoList');

onSnapshot(collection(db, "goals"), (snapshot) => {
	toDoList.innerHTML = ""; // 清空再重新渲染

	snapshot.forEach(doc => {
		const item = doc.data();

		const div = document.createElement("div");
		div.classList.add("toDos"); // 可用來加樣式
		div.innerHTML = `
			<h2 class="goalName">${item.name}</h2>
			<h2 class="deadline">${item.deadline}</h2>
			<input type="checkbox" ${item.completed ? "checked" : ""}>
		`;

		toDoList.appendChild(div);
	})
})
