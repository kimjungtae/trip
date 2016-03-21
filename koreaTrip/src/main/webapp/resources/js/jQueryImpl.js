/*var copyData;
var isCopy = false;*/
$(function() {
	$("#login").click(function() {
		$("#navbar").show("slide", {
			direction : "up"
		}, 1000);
		$("#loginContainer").css("display", "none");
		$('#treeContainer').css('display', 'block');
		$("#timeline").delay(1000).show("fade", 500);
		$("#base").delay(1000).show("fade", 500);
		setTimeout("goImpl()", 2000);
		/*$.getJSON('/user/login', function(data) {
			if (true) {

				$("#navbar").show("slide", {
					direction : "up"
				}, 1000);
				$("#loginContainer").css("display", "none");
				$('#treeContainer').css('display', 'block');
				$("#timeline").delay(1000).show("fade", 500);
				$("#base").delay(1000).show("fade", 500);
				setTimeout("goImpl()", 2000);

			} else {
				$('#exampleInputEmail1').val('');
				$('#exampleInputPassword1').val('');

			}
		})*/

	})

})

$(function() {

	/*
	 * $("#btn_timeline").click(function() { console.log("??");
	 * $("#timeline").toggleClass("timeline-out", 500, "easeOutSine");
	 * $(this).find(".btn_timeline_out").toggleClass("btn_timeline_in", 0,
	 * "easeOutSine"); $("#timelinec").toggle("drop"); });
	 */
	$("#btn_content").click(function() {
		$("#content").toggle("drop");
	});
	$("#btn_mypage").click(function() {
		$("#mypage").toggle("drop");
	});
	$("#btn_userpage").click(function() {
		$("#userpage").toggle("drop");
	});
	$("#btn_tree").click(function() {
		$("#treelist").toggle("drop");
	});
	$("#btn_reply").click(function() {
		$("#reply").toggle("drop");
	});
	$("#btn_friend").click(function() {
		$("#friendlist").toggle("drop");
	});

	$(".nano").nanoScroller({
		preventPageScrolling : true
	});
	$(".nano").nanoScroller();

	/*
	 * copyData = { key : 0, treeNo : 0, keyword : "키워드", ownerUserNo : "0",
	 * parent : 0, collapse : 0, color : "#000000" };
	 */

	/*
	 * $( "#myDiagram" ).droppable({ drop: function( event, ui ) {
	 * //console.log(ui.draggable.context); console.log("drop ::
	 * "+$(ui.draggable.context).find("input[id='data']").val());
	 * copyRemove(copyData); isCopy = false; } });
	 * 
	 * $("#myDiagram").mouseenter(function(){ console.log("canvas enter");
	 * //create if(isCopy) copyCreate(copyData); //console.log(copyData); });
	 */
	autocom();

})
function json(data) {

}
// 페이스북 로그인 버트 클릭시 이벤
function facebookLogin() {

	$("#navbar").show("slide", {
		direction : "up"
	}, 1000);
	$("#loginContainer").css("display", "none");
	$('#treeContainer').css('display', 'block');
	$("#timeline").delay(1000).show("slide", {
		direction : "right"
	}, 500);
	$("#base").delay(1000).show("fade", 500);
	setTimeout("goImpl()", 2000);

}

function setKeyword(keyword) {
	// circleLabel = JSON.parse(data);
	console.log(keyword);
	$("#search").val(keyword);
	jQuery.ajax({
		url : "/keyword/listSearchKeyword",
		method : "POST",
		dataType : "json",
		data : JSON.stringify({
			keyword : keyword,
		}),
		headers : {
			"Accept" : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(JSONData, status) {
			$("#timelinec .keyword").remove();
			var keywordList = JSONData.list;
			for (var i = 0; i < keywordList.length; i++) {
				$("#keywordTop").after($("#keywordTemp").html());
				$($("#timelinec #temp")[0]).attr("id", keywordList[i].key);
				$("#timelinec #" + keywordList[i].key + " #data").attr("value",
						JSON.stringify(keywordList[i]));
				$("#timelinec #" + keywordList[i].key + " #name").text(
						keywordList[i].keyword);
				console.log($("#timelinec #" + keywordList[i].key + " #name")
						.text());
			}
			$("#timelinec .keyword").show();
			$(".btn_add").click(function() {
				console.log($($(this).parent()).find("input").val());
				addKeyword($($(this).parent()).find("input").val());
			});
			$(".btn_copy").click(function() {
				console.log($($(this).parent()).find("input").val());
				changeKeyword($($(this).parent()).find("input").val());
			});
			/*
			 * $("#timelinec .keyword" ).draggable({ helper: "clone", start:
			 * function( event, ui ) { console.log(ui.helper.context);
			 * //console.log("helper :
			 * "+$(ui.helper.context).find("input[id='data']").val()); copyData =
			 * $(ui.helper.context).find("input[id='data']").val();
			 * console.log("drag : "+copyData); isCopy = true; } });
			 */
		}
	})
}

function openDialog() {
	$("#dialog").show().dialog();
}

function autocom() {
	var availableTags;
	jQuery.ajax({
		url : "/keyword/autoComplete",
		method : "GET",
		dataType : "json",
		headers : {
			"Accept" : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(JSONData, status) {
			availableTags = JSONData.autoComplete;
			console.log(availableTags);
			$("#inputText").autocomplete({
				source : availableTags
			});
			$("#search").autocomplete({
				source : availableTags
			});
			$("#search").keydown(function(event) {
				if (event.which == 13) {
					setKeyword($("#search").val());
					$(this).blur();
				}
			});
		}
	})

}

function inputText() {
	var a = "<input type='text' class='form-control'>";
	return $(a);
}
