document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("content-top");

    btn.addEventListener("click", function() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
});
