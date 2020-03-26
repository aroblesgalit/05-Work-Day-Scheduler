$(document).ready(function () {


    // Use moment.js to get the current date
    var currentDay = moment().format("dddd, MMMM Do");
    // Display current date inside the currentDay div
    $("#currentDay").text(currentDay);

   
    // Target each time block where the textarea is
    var currentTime = moment().format("HH");
    var allBlocks = $(".rowBlock");
    var blockNine = $("[data-time='nine']");
    var blockTen = $("[data-time='ten']");
    var blockEleven = $("[data-time='eleven']");
    var blockTwelve = $("[data-time='twelve']");
    var blockOne = $("[data-time='one']");
    var blockTwo = $("[data-time='two']");
    var blockThree = $("[data-time='three']");
    var blockFour = $("[data-time='four']");
    var blockFive = $("[data-time='five']");
    // Base on the time, remove and add classes for color code
    if (currentTime >= 9 && currentTime < 10) {
        blockNine.removeClass("future").addClass("present");
    } else if (currentTime >= 10 && currentTime < 11) {
        blockNine.removeClass("present").addClass("past");
        blockTen.removeClass("future").addClass("present");
    } else if (currentTime >= 11 && currentTime < 12) {
        blockTen.removeClass("present").addClass("past");
        blockEleven.removeClass("future").addClass("present");
    } else if (currentTime >= 12 && currentTime < 13) {
        blockEleven.removeClass("present").addClass("past");
        blockTwelve.removeClass("future").addClass("present");
    } else if (currentTime >= 13 && currentTime < 14) {
        blockTwelve.removeClass("present").addClass("past");
        blockOne.removeClass("future").addClass("present");
    } else if (currentTime >= 14 && currentTime < 15) {
        blockOne.removeClass("present").addClass("past");
        blockTwo.removeClass("future").addClass("present");
    } else if (currentTime >= 15 && currentTime < 16) {
        blockTwo.removeClass("present").addClass("past");
        blockThree.removeClass("future").addClass("present");
    } else if (currentTime >= 16 && currentTime < 17) {
        blockThree.removeClass("present").addClass("past");
        blockFour.removeClass("future").addClass("present");
    } else if (currentTime >= 17 && currentTime < 18) {
        blockFour.removeClass("present").addClass("past");
        blockFive.removeClass("future").addClass("present");
    } else if (currentTime >= 18) {
        blockFive.removeClass("present").addClass("past");
    } else if (currentTime > 0 && currentTime < 9) {
        allBlocks.addClass("future");
    } else if (currentTime < 24) {
        allBlocks.addClass("past").removeClass("future");
    }


    // Target the save buttons
    var saveBtn = $(".saveBtn");
    // Add an event listener on the save buttons and store the tasks
    saveBtn.on("click", storeTasks);

    // Function to store the tasks into the local storage
    function storeTasks() {
        var selectedBlock = $(this).prev("div");
        var timeBlock = selectedBlock.data("time");
        var textAreaValue = selectedBlock.find("textarea").val();
        if (timeBlock == "nine") {
            localStorage.setItem("blockNine", textAreaValue);
        } else if (timeBlock == "ten") {
            localStorage.setItem("blockTen", textAreaValue);
        } else if (timeBlock == "eleven") {
            localStorage.setItem("blockEleven", textAreaValue);
        } else if (timeBlock == "twelve") {
            localStorage.setItem("blockTwelve", textAreaValue);
        } else if (timeBlock == "one") {
            localStorage.setItem("blockOne", textAreaValue);
        } else if (timeBlock == "two") {
            localStorage.setItem("blockTwo", textAreaValue);
        } else if (timeBlock == "three") {
            localStorage.setItem("blockThree", textAreaValue);
        } else if (timeBlock == "four") {
            localStorage.setItem("blockFour", textAreaValue);
        } else if (timeBlock == "five") {
            localStorage.setItem("blockFive", textAreaValue);
        }
    }

    // Run the init function
    init();

    // Create an init function that renders the tasks on the DOM
    function init() {
        renderTasks();
    }

    // Render the tasks on the DOM  
    function renderTasks() {
        var blockNineValue = localStorage.getItem("blockNine");
        blockNine.find("textarea").val(blockNineValue);
        var blockTenValue = localStorage.getItem("blockTen");
        blockTen.find("textarea").val(blockTenValue);
        var blockElevenValue = localStorage.getItem("blockEleven");
        blockEleven.find("textarea").val(blockElevenValue);
        var blockTwelveValue = localStorage.getItem("blockTwelve");
        blockTwelve.find("textarea").val(blockTwelveValue);
        var blockOneValue = localStorage.getItem("blockOne");
        blockOne.find("textarea").val(blockOneValue);
        var blockTwoValue = localStorage.getItem("blockTwo");
        blockTwo.find("textarea").val(blockTwoValue);
        var blockThreeValue = localStorage.getItem("blockThree");
        blockThree.find("textarea").val(blockThreeValue);
        var blockFourValue = localStorage.getItem("blockFour");
        blockFour.find("textarea").val(blockFourValue);
        var blockFiveValue = localStorage.getItem("blockFive");
        blockFive.find("textarea").val(blockFiveValue);
    }

})