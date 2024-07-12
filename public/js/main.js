const arduinoContainer = document.getElementById("arduino");
const codingContainer = document.getElementById("coding");
const codingProjectOne = document.getElementById("coding_project_one");

arduinoContainer.addEventListener("click", () => {
	fetch("/arduino").then((res) => {
		if (!res.ok) {
			throw new Error("Response not okay");
		}
		window.location.href = "/arduino";
	
	});
});
codingContainer.addEventListener("click", () => {
	fetch("/coding").then((res) => {
		if (!res.ok) {
			throw new Error("Response not okay");
		}
		window.location.href = "/coding";
	
	});
});
codingProjectOne.addEventListener("click", () => {
	fetch("/coding-project-one").then((res) => {
		if (!res.ok) {
			throw new Error("Response not okay");
		}
		window.location.href = "/coding-project";
	
	});
});
