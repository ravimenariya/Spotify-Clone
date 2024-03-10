let play_btn = document.querySelector("#play-btn");
let pause_btn = document.querySelector("#pause-btn");
pause_btn.style.display = "none";
play_btn.addEventListener("click", function () {

    play_btn.style.zIndex = "-1";
    pause_btn.style.display = "inline";
    play_btn.style.display = "none";
    pause_btn.style.zIndex = "3";
});
pause_btn.addEventListener("click", function () {
    pause_btn.style.zIndex = "-1";
    play_btn.style.zIndex = "3";
    pause_btn.style.display = "none";
    play_btn.style.display = "inline";
})