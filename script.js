$(document).ready(function () {

    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);

    // WHEN I scroll down
    // THEN I am presented with timeblocks for standard business hours
    // WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
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


    // WHEN I click into a timeblock
    // THEN I can enter an event
    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist   


})