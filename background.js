function handleInstalled(reason) {
	chrome.storage.sync.get(['BTConfig'], function(result) {
		if (Object.keys(result).length > 0 && !result.BTConfig.showChangelog) {
			return;
		} 
		else if (reason != "browser_update") {
			chrome.tabs.create({
				url: `./changelog.html#${reason}`
			});
		}
	});
}

chrome.runtime.onInstalled.addListener(reason => {
	handleInstalled(reason.reason);
});