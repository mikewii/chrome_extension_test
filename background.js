chrome.contextMenus.create({
    "title": "Run test" + "%s",
    "contexts": ["selection"],
    "onclick": fun
});

function fun() {
    var win = window.open(page.html); // change its content
}