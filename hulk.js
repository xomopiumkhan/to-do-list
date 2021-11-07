const input = document.querySelector(".input");
const inputBtn = document.querySelector(".btn");
const output = document.querySelector(".output");
const outputBtn = document.querySelector(".dlt-btn");
const outputContainer = document.querySelector(".output-container-col");
const outputCol = document.querySelector(".output-container-col");
const outputMain = document.querySelector(".output-main");


inputBtn.addEventListener("click", function(){
	var cloned = outputContainer.cloneNode(true);
	cloned.style.display = "block"
	cloned.children[0].children[0].disabled = true;
	cloned.children[0].children[0].value = input.value;
	outputMain.appendChild(cloned)
	cloned.children[0].children[1].children[1].addEventListener("click", function(){
		cloned.remove()
	})
	cloned.children[0].children[1].children[0].addEventListener("click", function(){
		if (cloned.children[0].children[0].disabled == true) {
			cloned.children[0].children[0].disabled = false;
		} else {
			cloned.children[0].children[0].disabled = true;
		}
	})

	cloned.children[0].children[0].style.height = cloned.children[0].children[0].scrollHeight+"px"

})


