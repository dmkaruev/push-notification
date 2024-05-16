function notifyMe() {
 var notification = new Notification ("Заголовок уведомления", {
    tag : "ache-mail",
    body : "Описание уведомления.",
    icon : "icon.png"
 });
}

function notify() {
    if (!("Notification" in window)) {
        alert("Браузер не поддерживает push уведомления!");
    }
    else if (Notification.permission === "granted") {
        setTimeout(notifyMe, 2000);
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission (function(permission) {
            if (!('permission' in Notification)) {
                Notification.permission = permission;
            }
            if (permission === "granted") {
                setTimeout(notifyMe, 2000);
            }
        });
    }
}