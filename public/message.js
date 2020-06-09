
var timeoutID;

timeoutID = window.setInterval(checkMessage, 4*1000);

function anErrorOccurred() {
    console.error('an error occurred)');
}

function checkMessage() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var msg = document.getElementById("msg-btr");
            if (msg) {
                msg.innerHTML = this.responseText;
            } else {
                document.body.innerHTML += '<div id="msg-btr" style="position:absolute;width:100%;height:30px;z-index:1000;background:#000;color:#fff;text-align: center;padding-top: 10px;">' + xhr.responseText + '</div>';
            }
        }
    }
    xhr.addEventListener("error", anErrorOccurred, false);
    xhr.open('GET', '/message.txt', true);
    xhr.send(null);
}
