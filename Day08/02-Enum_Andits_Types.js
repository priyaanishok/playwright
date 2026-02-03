//Enums
//NUmeric enum / String Enum
var TestResultsNumeric;
(function (TestResultsNumeric) {
    TestResultsNumeric[TestResultsNumeric["Pass"] = 0] = "Pass";
    TestResultsNumeric[TestResultsNumeric["Fail"] = 1] = "Fail";
    TestResultsNumeric[TestResultsNumeric["Skip"] = 2] = "Skip";
})(TestResultsNumeric || (TestResultsNumeric = {}));
var TestResultsString;
(function (TestResultsString) {
    TestResultsString["Pass"] = "Passed";
    TestResultsString["Fail"] = "Failed";
    TestResultsString["Skip"] = "Skipped";
})(TestResultsString || (TestResultsString = {}));
function logTestResult(result, resultString) {
    console.log("Test result Numeric: ".concat(result) + ", Test result String: ".concat(resultString));
}
logTestResult(TestResultsNumeric.Fail, TestResultsString.Fail);
logTestResult(TestResultsNumeric.Pass, TestResultsString.Pass);
logTestResult(TestResultsNumeric.Skip, TestResultsString.Skip);
//Heterogenous
var BrowserStatus2;
(function (BrowserStatus2) {
    BrowserStatus2[BrowserStatus2["OOpen"] = 0] = "OOpen";
    BrowserStatus2[BrowserStatus2["Incognito"] = 1] = "Incognito";
    BrowserStatus2["crash"] = "Crashed";
    BrowserStatus2[BrowserStatus2["Close"] = 100] = "Close";
    BrowserStatus2[BrowserStatus2["freeze"] = 101] = "freeze";
})(BrowserStatus2 || (BrowserStatus2 = {}));
function reportBrowserStatus2(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus2(BrowserStatus2.freeze);
// //NUmeric enum / String Enum
// enum TestResults {
//     Pass="Passed",
//     Fail="Failed",
//     Skip="Skipped"
// }
// function logTestResult(result : TestResults){
//     console.log(`Test result : ${result}`);   
// }
// logTestResult(TestResults.Fail);
//Heterogenous
var BrowserStatus1;
(function (BrowserStatus1) {
    BrowserStatus1[BrowserStatus1["OPen"] = 0] = "OPen";
    BrowserStatus1[BrowserStatus1["Incognite"] = 1] = "Incognite";
    BrowserStatus1[BrowserStatus1["crash"] = 2] = "crash";
    BrowserStatus1[BrowserStatus1["Close"] = 5] = "Close";
    BrowserStatus1[BrowserStatus1["freeze"] = 6] = "freeze";
})(BrowserStatus1 || (BrowserStatus1 = {}));
function reportBrowserStatus1(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus1(BrowserStatus1.freeze);
// //NUmeric enum / String Enum
// enum TestResults {
//     Pass="Passed",
//     Fail="Failed",
//     Skip="Skipped"
// }
// function logTestResult(result : TestResults){
//     console.log(`Test result : ${result}`);   
// }
// logTestResult(TestResults.Fail);
//Heterogenous
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["OPen"] = 0] = "OPen";
    BrowserStatus[BrowserStatus["Incognite"] = 1] = "Incognite";
    BrowserStatus[BrowserStatus["crash"] = 2] = "crash";
    BrowserStatus[BrowserStatus["Close"] = 5] = "Close";
    BrowserStatus[BrowserStatus["freeze"] = 6] = "freeze";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus(BrowserStatus.freeze);
reportBrowserStatus(BrowserStatus.OPen);
reportBrowserStatus(BrowserStatus.Incognite);
reportBrowserStatus(BrowserStatus.crash);
reportBrowserStatus(BrowserStatus.Close);
