/// <reference path="../scripts/jquery-1.7.2.js" />
/// <reference path="../scripts/jquery.signalR-0.5.2.js" />

/*!
SignalR Build Runner Sample
*/

// Crockford's supplant method (poor man's templating)
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

// A simple background color flash effect that uses jQuery Color plugin
jQuery.fn.flash = function (color, duration) {
    var current = this.css('backgroundColor');
    this.animate({ backgroundColor: 'rgb(' + color + ')' }, duration / 2)
        .animate({ backgroundColor: current }, duration / 2);
}

$(function () {

    var runner = $.connection.buildHub, // the generated client-side hub proxy
        $buildTable = $('#buildTable'),
        $buildTableBody = $buildTable.find('tbody'),
        rowTemplate = '<tr data-symbol="{Id}"><td>{Id}</td><td>{ProjectId}</td><td>{Added}</td><td>{AddedBy}</td></tr>';

    function formatTask(build) {
        return $.extend(build, {
            Id: build.Id,
            PrijectId: build.ProjectId,
            Added: build.Added,
            AddedBy: build.AddedBy
        });
    }

    function init() {
        return runner.getBuildQueue().done(function (tasks) {
            loadBuildTable(tasks);
        });
    }

    function loadBuildTable(tasks) {
        $buildTableBody.empty();
        $.each(tasks, function () {
            var task = formatTask(this);
            $buildTableBody.append(rowTemplate.supplant(task));
        });
    }

    // Add client-side hub methods that the server will call
    //    runner.updateBuildPrice = function (build) {
    //        var displayBuild = formatBuild(build),
    //            $row = $(rowTemplate.supplant(displayBuild)),
    //            bg = build.LastChange === 0
    //                ? '255,216,0' // yellow
    //                : build.LastChange > 0
    //                    ? '154,240,117' // green
    //                    : '255,148,148'; // red

    //        $buildTableBody.find('tr[data-symbol=' + build.Symbol + ']')
    //            .replaceWith($row);

    //        $row.flash(bg, 1000);
    //        $li.flash(bg, 1000);
    //    };

    //    runner.marketOpened = function () {
    //        $("#open").prop("disabled", true);
    //        $("#close").prop("disabled", false);
    //        $("#reset").prop("disabled", true);
    //        scrollRunner();
    //    };

    //    runner.marketClosed = function () {
    //        $("#open").prop("disabled", false);
    //        $("#close").prop("disabled", true);
    //        $("#reset").prop("disabled", false);
    //        stopRunner();
    //    };

    // Start the connection
    $.connection.hub.start()
        .done(function () {
            return init();
        });

    //    // Wire up the buttons
    //    $("#open").click(function () {
    //        runner.openMarket();
    //    });

    //    $("#close").click(function () {
    //        runner.closeMarket();
    //    });

    //    $("#reset").click(function () {
    //        runner.reset();
    //    });
});