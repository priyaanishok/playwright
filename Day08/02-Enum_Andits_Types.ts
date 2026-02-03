//Enums



//NUmeric enum / String Enum

enum TestResultsNumeric {
    Pass,
    Fail,
    Skip
}

enum TestResultsString {
    Pass="Passed",
    Fail="Failed",
    Skip="Skipped"
}


function logTestResult(result : TestResultsNumeric, resultString : TestResultsString){


    console.log(`Test result Numeric: ${result}` + `, Test result String: ${resultString}`);   


}


logTestResult(TestResultsNumeric.Fail, TestResultsString.Fail);
logTestResult(TestResultsNumeric.Pass, TestResultsString.Pass);
logTestResult(TestResultsNumeric.Skip, TestResultsString.Skip);


//Heterogenous


enum BrowserStatus2{
OOpen,
Incognito,
crash = "Crashed",
Close=100,
freeze
}


function reportBrowserStatus2(status :BrowserStatus2){


    console.log(`Current status of browser is ${status}`);   


}


reportBrowserStatus2(BrowserStatus2.freeze) 


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


enum BrowserStatus1 {
OPen,
Incognite,
crash,
Close=5,
freeze
}


function reportBrowserStatus1(status :BrowserStatus1){


    console.log(`Current status of browser is ${status}`);   


}


reportBrowserStatus1(BrowserStatus1.freeze)


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


enum BrowserStatus {
OPen,
Incognite,
crash,
Close=5,
freeze
}


function reportBrowserStatus(status :BrowserStatus){


    console.log(`Current status of browser is ${status}`);   


}


reportBrowserStatus(BrowserStatus.freeze)
reportBrowserStatus(BrowserStatus.OPen)
reportBrowserStatus(BrowserStatus.Incognite)
reportBrowserStatus(BrowserStatus.crash)
reportBrowserStatus(BrowserStatus.Close)