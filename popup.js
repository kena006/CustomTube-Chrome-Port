let minVersion = 53;
let storage;
let sect1 = document.querySelector('#sect1');
let sect2 = document.querySelector('#sect2');
let sect3 = document.querySelector('#sect3');
let sect4 = document.querySelector('#sect4');
let sect5 = document.querySelector('#sect5');
let sect6 = document.querySelector('#sect6');
let sect7 = document.querySelector('#sect7');
let sectall = document.querySelector('#sectall');
let shownow = document.querySelector('#shownow');
sect1.onclick = function() {
	document.getElementById("right1").style.display = "block";
	document.querySelector("#lm1").setAttribute("active", "true");
	document.getElementById("right2").style.display = "none";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "none";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "none";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "none";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "none";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "none";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sect2.onclick = function() {
	document.getElementById("right1").style.display = "none";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "block";
	document.querySelector("#lm2").setAttribute("active", "true");
	document.getElementById("right3").style.display = "none";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "none";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "none";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "none";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "none";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sect3.onclick = function() {
	document.getElementById("right1").style.display = "none";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "none";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "block";
	document.querySelector("#lm3").setAttribute("active", "true");
	document.getElementById("right4").style.display = "none";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "none";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "none";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "none";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sect4.onclick = function() {
	document.getElementById("right1").style.display = "none";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "none";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "none";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "block";
	document.querySelector("#lm4").setAttribute("active", "true");
	document.getElementById("right5").style.display = "none";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "none";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "none";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sect5.onclick = function() {
	document.getElementById("right1").style.display = "none";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "none";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "none";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "none";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "block";
	document.querySelector("#lm5").setAttribute("active", "true");
	document.getElementById("right6").style.display = "none";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "none";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sect6.onclick = function() {
	document.getElementById("right1").style.display = "none";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "none";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "none";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "none";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "none";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "block";
	document.querySelector("#lm6").setAttribute("active", "true");
	document.getElementById("right7").style.display = "none";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sect7.onclick = function() {
	document.getElementById("right1").style.display = "none";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "none";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "none";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "none";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "none";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "none";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "block";
	document.querySelector("#lm7").setAttribute("active", "true");
	document.querySelector("#lmall").setAttribute("active", "false");
}
sectall.onclick = function() {
	document.getElementById("right1").style.display = "block";
	document.querySelector("#lm1").setAttribute("active", "false");
	document.getElementById("right2").style.display = "block";
	document.querySelector("#lm2").setAttribute("active", "false");
	document.getElementById("right3").style.display = "block";
	document.querySelector("#lm3").setAttribute("active", "false");
	document.getElementById("right4").style.display = "block";
	document.querySelector("#lm4").setAttribute("active", "false");
	document.getElementById("right5").style.display = "block";
	document.querySelector("#lm5").setAttribute("active", "false");
	document.getElementById("right6").style.display = "block";
	document.querySelector("#lm6").setAttribute("active", "false");
	document.getElementById("right7").style.display = "block";
	document.querySelector("#lm7").setAttribute("active", "false");
	document.querySelector("#lmall").setAttribute("active", "true");
}
shownow.onclick = function() {
	browser.tabs.create({
		url: `./changelog.html#check`
	});
}
if (navigator.userAgent.match(/Firefox\/([^\s]+)/)) {
	if (parseInt(navigator.userAgent.match(/Firefox\/([^\s]+)/)[1]) >= minVersion) {
		storage = browser.storage.sync;
	}
} else {
	storage = chrome.storage.local;
}
let globalURL;
let currentSettings;
let tabs = chrome.tabs;

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
	globalURL = tabs[0].url;
	let fields = document.querySelectorAll('fieldset');
	if (globalURL && (!globalURL.includes("www.youtube.com") && !globalURL.includes("moz-extension://"))) {
		document.querySelector("#disabled-overlay").style.display = "block";
		document.querySelector("#restore-defaults").style.display = "none";
		document.querySelector("#rd-dummy").style.display = "block";
	}
});

let settingsElements = document.querySelectorAll('.settings:not(.slider-control)');
for (let i = 0; i < settingsElements.length; i++) {
	settingsElements[i].addEventListener('change', function() {
		if (this.parentElement.nextElementSibling != null && this.parentElement.nextElementSibling.classList.contains('subsettings-container')) {
			let subsettings = this.parentElement.nextElementSibling.querySelectorAll('.subsetting input[type="checkbox"]');
			if (this.checked) {
				subsettings.forEach(element => {
					element.removeAttribute('disabled');
				});
			} else {
				subsettings.forEach(element => {
					element.setAttribute('disabled', '');
					element.checked = false;
				});
			}
		}
		saveSettings();
	});
}
//reset
document.querySelector('#restore-defaults').addEventListener('click', () => {
	const confirmation = confirm('All settings will be reset to default values. The current tab will also refresh. Are you sure?');
	if (confirmation) {
		browser.storage.sync.clear();
		browser.tabs.reload();
		window.close();
	}
});
function saveSettings() {
	let newSettings = {};
	//save checkboxes
	let itemsCheck = document.querySelectorAll('input[type="checkbox"]');
	for (let i = 0; i < itemsCheck.length; i++) {
		newSettings[itemsCheck[i].name] = itemsCheck[i].checked;
	}
	//save selects
	let selects = document.querySelectorAll('select');
	selects.forEach(element => {
		newSettings[element.name] = element.value;
	});
	//save layout radio buttons
	let layout = document.querySelectorAll('input[type="radio"][name="layoutSelect"]');
	for (let i = 0; i < layout.length; i++) {
		if (layout[i].checked) {
			newSettings[layout[i].name] = layout[i].value;
		}
	}
	//save related radio buttons
	let relatedSize = document.querySelectorAll('input[type="radio"][name="relatedSize"]');
	for (let i = 0; i < relatedSize.length; i++) {
		if (relatedSize[i].checked) {
			newSettings[relatedSize[i].name] = relatedSize[i].value;
		}
	}
	//save searchbar radio buttons
	let searchbarStyle = document.querySelectorAll('input[type="radio"][name="searchbarStyle"]');
	for (let i = 0; i < searchbarStyle.length; i++) {
		if (searchbarStyle[i].checked) {
			newSettings[searchbarStyle[i].name] = searchbarStyle[i].value;
		}
	}
	storage.set({BTConfig: newSettings});
	//save CVDD radio buttons
	let channelVidsDropdown = document.querySelectorAll('input[type="radio"][name="channelVidsDropdown"]');
	for (let i = 0; i < channelVidsDropdown.length; i++) {
		if (channelVidsDropdown[i].checked) {
			newSettings[channelVidsDropdown[i].name] = channelVidsDropdown[i].value;
		}
	}
	if (!currentSettings.showNew) {
		document.querySelector("body").setAttribute("show-new", "false");
	}
	if (currentSettings.showNew) {
		document.querySelector("body").setAttribute("show-new", "true");
	}
	if (newSettings.showNew) {
		document.querySelector("body").setAttribute("show-new", "true");
	}
	if (!newSettings.showNew) {
		document.querySelector("body").setAttribute("show-new", "false");
	}
	storage.set({BTConfig: newSettings});
}
function getSettings() {
	if (currentSettings == null) {return;}
	if (currentSettings.showNew) {
		document.querySelector("body").setAttribute("show-new", "true");
	}
	let itemsCheck = document.querySelectorAll('input[type="checkbox"]');
	//set checkboxes
	for (let i = 0; i < itemsCheck.length; i++) {
		for (let j = 0; j < Object.keys(currentSettings).length; j++) {
			if (itemsCheck[i].name == Object.keys(currentSettings)[j]) {
				itemsCheck[i].checked = Object.values(currentSettings)[j];
			}
		}
	}
	document.querySelector(`input[type="radio"][value="${currentSettings.layoutSelect}"]`).checked = true;
	document.querySelector(`input[type="radio"][value="${currentSettings.relatedSize}"]`).checked = true;
	document.querySelector(`input[type="radio"][value="${currentSettings.searchbarStyle}"]`).checked = true;
	document.querySelector(`input[type="radio"][value="${currentSettings.channelVidsDropdown}"]`).checked = true;
}

//main
storage.get(['BTConfig'], function(result) {
	if (result) {
		currentSettings = result.BTConfig;
		getSettings();
	}
});
