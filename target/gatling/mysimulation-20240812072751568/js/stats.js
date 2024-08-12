var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "2128",
        "ok": "-",
        "ko": "2128"
    },
    "maxResponseTime": {
        "total": "11309",
        "ok": "-",
        "ko": "11309"
    },
    "meanResponseTime": {
        "total": "4844",
        "ok": "-",
        "ko": "4844"
    },
    "standardDeviation": {
        "total": "3733",
        "ok": "-",
        "ko": "3733"
    },
    "percentiles1": {
        "total": "2277",
        "ok": "-",
        "ko": "2277"
    },
    "percentiles2": {
        "total": "8486",
        "ok": "-",
        "ko": "8486"
    },
    "percentiles3": {
        "total": "10756",
        "ok": "-",
        "ko": "10756"
    },
    "percentiles4": {
        "total": "11198",
        "ok": "-",
        "ko": "11198"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.83",
        "ok": "-",
        "ko": "0.83"
    }
},
contents: {
"req_post-json-reque-964042391": {
        type: "REQUEST",
        name: "Post JSON Request",
path: "Post JSON Request",
pathFormatted: "req_post-json-reque-964042391",
stats: {
    "name": "Post JSON Request",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "2128",
        "ok": "-",
        "ko": "2128"
    },
    "maxResponseTime": {
        "total": "11309",
        "ok": "-",
        "ko": "11309"
    },
    "meanResponseTime": {
        "total": "4844",
        "ok": "-",
        "ko": "4844"
    },
    "standardDeviation": {
        "total": "3733",
        "ok": "-",
        "ko": "3733"
    },
    "percentiles1": {
        "total": "2277",
        "ok": "-",
        "ko": "2277"
    },
    "percentiles2": {
        "total": "8486",
        "ok": "-",
        "ko": "8486"
    },
    "percentiles3": {
        "total": "10756",
        "ok": "-",
        "ko": "10756"
    },
    "percentiles4": {
        "total": "11198",
        "ok": "-",
        "ko": "11198"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.83",
        "ok": "-",
        "ko": "0.83"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
