        var type = "Click a download type to see how much time you can save with high speed internet from Shentel.";
        var icon = "";
        var print50, print25, print15, print10, printDSL;
        print50 = print25 = print15 = print10 = printDSL = null;
        var speed50, speed25, speed15, speed10, speedDSL;
        speed50 = speed25 = speed15 = speed10 = speedDSL = "";

    function clearOut(){
        //end any animations
        $("div[id^='loader']").stop();

        //reset fields
        $("#description").text(type);
        $("#desc-icon").html(icon);
        $(".load-time").text('');
        $(".holder-bar").width(0);

        //update button row
        $('label').removeClass('active');
        $('label').addClass('');
    }

    function pauseLoad(){
        //Check if 10MBPS is 100%
        if ($('#loader_4').width() == $('#loader_4').parent().width()) {
            $("#loader_5").stop(); //Stop progress on DSL
            $('#modalPop').modal('show');
        };
    };

    function visualize(type, icon, content, timing, pause){
        // update header text, icon
        $("#description").text(type);
        $("#desc-icon").html(icon);

        // increment to build ids, pull data from arrays
        var i;
          for (i = 0; i < 5; i++) {
            var number = (i+1); //get rid of #number_0
            var display = "#time_"+ number;
            var loader = "#loader_"+ number;

            $(display).text(content[i]);
            $(loader).animate({width: "100%"}, {duration: timing[i], easing: "linear"});

            setInterval(pauseLoad, pause);
          };
    };

    $("#musicButton").click(function(){
        clearOut();
        var type = 'Downloading 5MB music file';
        var icon = '<svg class="icon icon-music"><use xlink:href="#icon-file-music"></use></svg>';
        var content = ["less than 1 second", "~ 1 second", "2 seconds", "4 seconds", "54 seconds"];
        var timing = [500, 1000, 2000, 4000, 54000];
        var pause = 8000;

        visualize(type, icon, content, timing, pause);
    });

    $("#gamesButton").click(function(){
        clearOut();
        var type = 'Downloading 15MB game file';
        var icon = '<svg class="icon icon-zip"><use xlink:href="#icon-file-zip"></use></svg>';
        var content = ["2 seconds", "5 seconds", "8 seconds", "12 seconds", "2 minutes, 43 seconds"];
        var timing = [2000, 5000, 8000, 12000, 163000];
        var pause = 3000;

        visualize(type, icon, content, timing, pause);
    });

    $("#moviesButton").click(function(){
        clearOut();
        var type = 'Downloading 3GB HD Movie file. Download speed times simulated at 50x speed';
        var icon = '<svg class="icon icon-video"><use xlink:href="#icon-file-video"></use></svg>';
        var content = ["8 minutes, 35 seconds", "17 minutes, 10 seconds", "28 minutes, 37 seconds", "42 minutes, 56 seconds", "9 hours, 16 minutes, 14 seconds"];
        //var timing = [515000, 1030000, 1717000, 2576000, 33374000]; //actual time
        //time 50x
        var timing = [10300, 20600, 34340, 515200, 667480];
        var pause = 20;

       visualize(type, icon, content, timing, pause);

    });

    $("#photosButton").click(function(){
        clearOut();
        var type = 'Downloading 2MB photo file';
        var icon = '<svg class="icon icon-images"><use xlink:href="#icon-images"></use></svg>';
        var content = ["less than 1 second", "less than 1 second", "1 second", "2 seconds", "21 seconds"];
        var timing = [200, 500, 1000, 2000, 21000];
        var pause = 9000;

        visualize(type, icon, content, timing, pause);
    });
