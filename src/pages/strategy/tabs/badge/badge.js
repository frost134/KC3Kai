(function(){
	"use strict";

	KC3StrategyTabs.badge = new KC3StrategyTab("badge");

	KC3StrategyTabs.badge.definition = {
		tabSelf: KC3StrategyTabs.badge,

		/* INIT
		Prepares all data needed
		---------------------------------*/
		init :function(){
		},

		/* EXECUTE
		Places data onto the interface
		---------------------------------*/
		execute :function(){
            var self = this;
            $(".tab_badge .export_method input").change( function() {
                // adjust text accordingly
                var v = $(this).val();

                $(".export_method .desc").empty();
                
                function mkText(text) {
                    $("<div />")
                        .text(text)
                        .appendTo(".export_method .desc");
                }

                var pb,i;
                if (v === 'shiplist') {
                    mkText("Export Data from Current Ship List");
                } else {
                    mkText("Export Data from Picture Book," +
                           "require sync-ing in-game picture book");

                    mkText("Status:");
                    pb = PictureBook.load();
                    for (i=1; i<=5; ++i) {
                        var t = "Vol." + i + ", ";
                        if (pb[i]) {
                            t = t + "Last Update: " + new Date(pb[i].timestamp);
                        } else {
                            t = t + "missing";
                        }
                        mkText(t);
                    }
                }

            });
            $("#radio_sl").prop("checked",true).trigger('change');

            $(".tab_badge .export_control a").on("click", function() {
                var v = $(".tab_badge .export_method input:checked").val();
                $(".tab_badge .export_result").empty();

                function mkText(text) {
                    $("<div />")
                        .text(text)
                        .appendTo(".tab_badge .export_result");
                }

                var result = 
                    v === 'shiplist'
                    ? self.exportFromShipList() 
                    : v === 'picturebook'
                    ? self.exportFromPictureBook()
                    : {};
                result = $.extend(result, self.exportOtherInfo() );

                $.each(result, function(k,v) {
                    mkText(String(k) + "=" + v);
                });
                
            });
		},
        exportFromIdList: function(ids) {
            function setInsert(xs,v) {
                if (xs.indexOf(v) === -1)
                    xs.push(v);
                return xs;
            }

            var originIds = [];
            $.each(ids, function(i,x) {
                setInsert(originIds, RemodelDb.originOf(x));
            });

            var colleIds = originIds.map( function(mid) {
                return K2Badge.mstId2ColleTable[mid];
            });

            var colle = {};
            $.each(colleIds, function(i,x) {
                colle[x] = true;
            });
            
            var colleEncoded = btoa(JSON.stringify(colle));
            
            var k2 = {};

            $.each( K2Badge.k2Template, function(stype, v1) {
                var obj = {};
                $.each(v1, function(bid,v2) {
                    var mid = K2Badge.kaini2MstIdTable[bid];
                    obj[bid] = (ids.indexOf(mid) !== -1);
                });
                k2[stype] = obj;
            });

            var k2Encoded = btoa( JSON.stringify(k2));

            return {
                colle: colleEncoded,
                k2: k2Encoded
            };
        },
        exportFromShipList: function() {
            var ids = [];
            $.each( KC3ShipManager.list, function(k,ship) {
                ids.push( ship.masterId );
            });
            return this.exportFromIdList(ids);
        },
        exportFromPictureBook: function() {
            var pb = PictureBook.load();
            var i;
            var ids = [];
            $.each(pb, function(vol,x) {
                ids = ids.concat( x.ids );
            });
            return this.exportFromIdList(ids);
        },
        exportOtherInfo: function() {
            var result = {};
            result.ttkLvl = PlayerManager.hq.level;
            result.ttkName = PlayerManager.hq.name;
            result.ttkServer = PlayerManager.hq.server;
            return result;
        }
	};

})();
