function toAddRect() {
    hideShowJsonDiffer();

    jQuery('#add_btn_div')[0].style.display = 'none';
    jQuery('#add_rect_div')[0].style.display = '';
    jQuery('#chose_rect_div')[0].style.display = 'none';
    drawRect(0, 0, 0, 0);
    jQuery('#img_cvs').hide();
    jQuery('#jcrop_div')[0].style.display = '';
    var cvs = document.getElementById("img_cvs");
    var imgUrl = cvs.toDataURL("image/png");
    jQuery(".jcrop-holder img").attr("src", imgUrl)
}

function toAddOK() {
    var tb = document.getElementById('data_tb');
    var rect_id = tb.getElementsByClassName('rect_id');
    var the_id = parseInt(rect_id[rect_id.length - 1].innerHTML) + 1;

    var add_id_one = document.getElementById('old_tb').getElementsByTagName('tr').length - 1;
    if (add_id_one == (the_id + 1)) {
        the_id += 1;
    }

    var tr_node = document.createElement('tr');
    tr_node.setAttribute('id', 'rect_' + the_id);
    var td_id = document.createElement('td');
    td_id.setAttribute('class', 'rect_id');
    td_id.innerHTML = the_id;
    tr_node.appendChild(td_id);
    var td_x1 = document.createElement('td');
    td_x1.setAttribute('class', 'rect_x1');
    td_x1.innerHTML = document.getElementById('x1').value;
    tr_node.appendChild(td_x1);
    var td_y1 = document.createElement('td');
    td_y1.setAttribute('class', 'rect_y1');
    td_y1.innerHTML = document.getElementById('y1').value;
    tr_node.appendChild(td_y1);
    var td_x2 = document.createElement('td');
    td_x2.setAttribute('class', 'rect_x2');
    td_x2.innerHTML = document.getElementById('x2').value;
    tr_node.appendChild(td_x2);
    var td_y2 = document.createElement('td');
    td_y2.setAttribute('class', 'rect_y2');
    td_y2.innerHTML = document.getElementById('y2').value;
    tr_node.appendChild(td_y2);
    var td_content = document.createElement('td');
    td_content.setAttribute('class', 'rect_content');
    var add_content = document.getElementById('add_rect_text');
    td_content.innerHTML = add_content.value;
    tr_node.appendChild(td_content);
    var td_right_content = document.createElement('td');
    td_right_content.setAttribute('class', 'rect_right_content');
    td_right_content.innerHTML = document.getElementById('add_rect_text').value;
    tr_node.appendChild(td_right_content);
    tb.appendChild(tr_node);

    add_content.value = '';

    jQuery('#img_cvs').show();
    jQuery('#jcrop_div')[0].style.display = 'none';
    var cvs = $.getId("img_cvs");
    var ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var imgObj = new Image();
    imgObj.src = 'img/fapiao.jpg';
    imgObj.onload = function () {
        cvs.width = imgObj.naturalWidth;
        cvs.height = imgObj.naturalHeight;
        ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
        ctx.strokeStyle = "#FF0000";
        var tb = document.getElementById('data_tb');
        var all_rows = tb.rows;
        for (var i = 0; i < all_rows.length; i++) {
            var x1 = all_rows[i].cells[1].innerHTML;
            var y1 = all_rows[i].cells[2].innerHTML;
            var w = all_rows[i].cells[3].innerHTML - x1;
            var h = all_rows[i].cells[4].innerHTML - y1;
            ctx.strokeRect(x1, y1, w, h)
        }
    };

    document.getElementById('chose_rect_id').innerHTML = the_id;
    var select = $.getId('chose_rect_text_sel');
    select.innerHTML = '';

    var tr = document.getElementById('rect_' + the_id);
    var content = tr.getElementsByClassName('rect_content');
    for (var i = 0; i < content.length; i++) {
        var option = document.createElement('option');
        jQuery(option).val(content[i].innerHTML);
        jQuery(option).text(content[i].innerHTML);
        select.append(option);
    }

    jQuery('#add_btn_div')[0].style.display = '';
    jQuery('#add_rect_div')[0].style.display = 'none';
    jQuery('#chose_rect_div')[0].style.display = '';

    var all_radio = document.getElementsByName('rd_category');
    for (var t = 0; t < all_radio.length; t++) {
        all_radio[t].checked = false;
    }
}

function toAddNo() {
    var add_content = document.getElementById('add_rect_text');
    add_content.value = '';

    jQuery('#img_cvs').show();
    jQuery('#jcrop_div')[0].style.display = 'none';
    var cvs = $.getId("img_cvs");
    var ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var imgObj = new Image();
    imgObj.src = 'img/fapiao.jpg';
    imgObj.onload = function () {
        cvs.width = imgObj.naturalWidth;
        cvs.height = imgObj.naturalHeight;
        ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
        ctx.strokeStyle = "#FF0000";
        var tb = document.getElementById('data_tb');
        var all_rows = tb.rows;
        for (var i = 0; i < all_rows.length; i++) {
            var x1 = all_rows[i].cells[1].innerHTML;
            var y1 = all_rows[i].cells[2].innerHTML;
            var w = all_rows[i].cells[3].innerHTML - x1;
            var h = all_rows[i].cells[4].innerHTML - y1;
            ctx.strokeRect(x1, y1, w, h)
        }
    };

    document.getElementById('chose_rect_id').innerHTML = '无';
    var select = $.getId('chose_rect_text_sel');
    select.innerHTML = '';

    jQuery('#add_btn_div')[0].style.display = '';
    jQuery('#add_rect_div')[0].style.display = 'none';
    jQuery('#chose_rect_div')[0].style.display = '';

    var all_radio = document.getElementsByName('rd_category');
    for (var t = 0; t < all_radio.length; t++) {
        all_radio[t].checked = false;
    }
}

function toEditRect() {
    hideShowJsonDiffer();
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    if (rectid == '无') {
        alert('请选择一个框！');
    }
    else {
        var con;
        con = confirm("确定修改？");
        if (con == true) {
            var tr = document.getElementById('rect_' + rectid);
            var x1 = tr.getElementsByClassName('rect_x1')[0].innerHTML;
            var y1 = tr.getElementsByClassName('rect_y1')[0].innerHTML;
            var x2 = tr.getElementsByClassName('rect_x2')[0].innerHTML;
            var y2 = tr.getElementsByClassName('rect_y2')[0].innerHTML;

            jQuery('#add_btn_div')[0].style.display = 'none';
            jQuery('#chose_rect_div')[0].style.display = 'none';
            jQuery('#edit_div')[0].style.display = '';

            drawRect(x1, y1, x2, y2);
            jQuery('#img_cvs').hide();
            jQuery('#jcrop_div')[0].style.display = '';
            var cvs = document.getElementById("img_cvs");
            var imgUrl = cvs.toDataURL("image/png");
            jQuery(".jcrop-holder img").attr("src", imgUrl)
        }
    }
}

function toEditOK() {
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    var tr = document.getElementById('rect_' + rectid);
    var td_x1 = tr.getElementsByClassName('rect_x1')[0];
    var td_y1 = tr.getElementsByClassName('rect_y1')[0];
    var td_x2 = tr.getElementsByClassName('rect_x2')[0];
    var td_y2 = tr.getElementsByClassName('rect_y2')[0];
    td_x1.innerHTML = document.getElementById('x1').value;
    td_y1.innerHTML = document.getElementById('y1').value;
    td_x2.innerHTML = document.getElementById('x2').value;
    td_y2.innerHTML = document.getElementById('y2').value;

    jQuery('#add_btn_div')[0].style.display = '';
    jQuery('#chose_rect_div')[0].style.display = '';
    jQuery('#edit_div')[0].style.display = 'none';

    jQuery('#img_cvs').show();
    jQuery('#jcrop_div')[0].style.display = 'none';
    var cvs = $.getId("img_cvs");
    var ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var imgObj = new Image();
    imgObj.src = 'img/fapiao.jpg';
    imgObj.onload = function () {
        cvs.width = imgObj.naturalWidth;
        cvs.height = imgObj.naturalHeight;
        ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
        ctx.strokeStyle = "#FF0000";
        var tb = document.getElementById('data_tb');
        var all_rows = tb.rows;
        for (var i = 0; i < all_rows.length; i++) {
            var x1 = all_rows[i].cells[1].innerHTML;
            var y1 = all_rows[i].cells[2].innerHTML;
            var w = all_rows[i].cells[3].innerHTML - x1;
            var h = all_rows[i].cells[4].innerHTML - y1;
            ctx.strokeRect(x1, y1, w, h)
        }
    }
}

function toEditNo() {
    jQuery('#add_btn_div')[0].style.display = '';
    jQuery('#chose_rect_div')[0].style.display = '';
    jQuery('#edit_div')[0].style.display = 'none';

    jQuery('#img_cvs').show();
    jQuery('#jcrop_div')[0].style.display = 'none';
    var cvs = $.getId("img_cvs");
    var ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var imgObj = new Image();
    imgObj.src = 'img/fapiao.jpg';
    imgObj.onload = function () {
        cvs.width = imgObj.naturalWidth;
        cvs.height = imgObj.naturalHeight;
        ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
        ctx.strokeStyle = "#FF0000";
        var tb = document.getElementById('data_tb');
        var all_rows = tb.rows;
        for (var i = 0; i < all_rows.length; i++) {
            var x1 = all_rows[i].cells[1].innerHTML;
            var y1 = all_rows[i].cells[2].innerHTML;
            var w = all_rows[i].cells[3].innerHTML - x1;
            var h = all_rows[i].cells[4].innerHTML - y1;
            ctx.strokeRect(x1, y1, w, h)
        }
    }
}

function toDelRect() {
    hideShowJsonDiffer();

    var cvs = $.getId("img_cvs");
    var ctx = cvs.getContext("2d");
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    if (rectid == '无') {
        alert('请选择一个框！');
    }
    else {
        var con;
        con = confirm("确定删除？");
        if (con == true) {
            jQuery('#rect_' + rectid).remove();
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            var imgObj = new Image();
            imgObj.src = 'img/fapiao.jpg';
            imgObj.onload = function () {
                cvs.width = imgObj.naturalWidth;
                cvs.height = imgObj.naturalHeight;
                ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
                ctx.strokeStyle = "#FF0000";
                var tb = document.getElementById('data_tb');
                var all_rows = tb.rows;
                for (var i = 0; i < all_rows.length; i++) {
                    var x1 = all_rows[i].cells[1].innerHTML;
                    var y1 = all_rows[i].cells[2].innerHTML;
                    var w = all_rows[i].cells[3].innerHTML - x1;
                    var h = all_rows[i].cells[4].innerHTML - y1;
                    ctx.strokeRect(x1, y1, w, h)
                }
            }
        }

        document.getElementById('chose_rect_id').innerHTML = '无';
        var select = $.getId('chose_rect_text_sel');
        select.innerHTML = '';

        var all_radio = document.getElementsByName('rd_category');
        for (var t = 0; t < all_radio.length; t++) {
            all_radio[t].checked = false;
        }
    }
}

function toSelectContent() {
    hideShowJsonDiffer();
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    var tr = document.getElementById('rect_' + rectid);
    var right_content = tr.getElementsByClassName('rect_right_content')[0];
    var select = $.getId('chose_rect_text_sel');
    var select_index = select.selectedIndex;
    var select_content = select.options[select_index].text;
    right_content.innerHTML = select_content;
    var td_cotent = tr.getElementsByClassName('rect_content');
    td_cotent[select_index].remove();
    var td_select = document.createElement('td');
    td_select.setAttribute('class', 'rect_content');
    td_select.innerHTML = select_content;
    tr.insertBefore(td_select, td_cotent[0]);
    select.innerHTML = '';
    var content = tr.getElementsByClassName('rect_content');
    for (var i = 0; i < content.length; i++) {
        var option = document.createElement('option');
        jQuery(option).val(content[i].innerHTML);
        jQuery(option).text(content[i].innerHTML);
        select.append(option);
    }
}

function toAddNewContent() {
    hideShowJsonDiffer();
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    if (rectid == '无') {
        alert('请选择一个框！');
    }
    else {
        var new_content = document.getElementById('chose_rect_text_new').value;
        if (new_content == '') {
            alert('您未填写任何内容！');
        }
        else {
            var rectid = document.getElementById('chose_rect_id').innerHTML;
            var tr = document.getElementById('rect_' + rectid);
            var right_content = tr.getElementsByClassName('rect_right_content')[0];
            right_content.innerHTML = new_content;
            var exit_td_content = tr.getElementsByClassName('new_rect_content')[0];
            if (exit_td_content != null) {
                exit_td_content.remove()
            }
            var td_content = tr.getElementsByClassName('rect_content');
            var td_new_content = document.createElement('td');
            td_new_content.setAttribute('class', 'rect_content new_rect_content');
            td_new_content.innerHTML = new_content;
            tr.insertBefore(td_new_content, td_content[0]);
            var select = $.getId('chose_rect_text_sel');
            select.innerHTML = '';
            document.getElementById('chose_rect_text_new').value = '';
            var content = tr.getElementsByClassName('rect_content');
            for (var i = 0; i < content.length; i++) {
                var option = document.createElement('option');
                jQuery(option).val(content[i].innerHTML);
                jQuery(option).text(content[i].innerHTML);
                select.append(option);
            }
        }
    }
}

function toDownJson() {
    hideShowJsonDiffer();
    var json_data = new Array();

    var tb = document.getElementById('data_tb');
    var all_rows = tb.rows;
    for (var i = 0; i < all_rows.length; i++) {
        // console.log(all_rows)
        var id = all_rows[i].getElementsByClassName('rect_id')[0].innerHTML;
        var x1 = all_rows[i].getElementsByClassName('rect_x1')[0].innerHTML;
        var y1 = all_rows[i].getElementsByClassName('rect_y1')[0].innerHTML;
        var x2 = all_rows[i].getElementsByClassName('rect_x2')[0].innerHTML;
        var y2 = all_rows[i].getElementsByClassName('rect_y1')[0].innerHTML;
        var x3 = all_rows[i].getElementsByClassName('rect_x1')[0].innerHTML;
        var y3 = all_rows[i].getElementsByClassName('rect_y2')[0].innerHTML;
        var x4 = all_rows[i].getElementsByClassName('rect_x2')[0].innerHTML;
        var y4 = all_rows[i].getElementsByClassName('rect_y2')[0].innerHTML;
        var content = all_rows[i].getElementsByClassName('rect_right_content')[0].innerHTML;
        // console.log(id,x1,y1,x2,y2,x3,y3,x4,y4,content)
        json_data[i] = {
            "id": parseInt(id),
            "bbox": [[parseInt(x1), parseInt(x2)], [parseInt(x2), parseInt(y2)], [parseInt(x3), parseInt(y3)], [parseInt(x4), parseInt(y4)]],
            "predicts": [{"content": content, "score": 1.0}]
        };
        // console.log(json_data[i])
    }
    var finall_json_data = [];
    for (var j = 0; j < json_data.length; j++) {
        finall_json_data.push(json_data[j])
    }
    var jsonstr = JSON.stringify(finall_json_data);
    // console.log(jsonstr)

    var blob = new Blob([jsonstr], {type: ""});
    saveAs(blob, "finally_data.json");
}

function selRadio(id) {
    hideShowJsonDiffer();
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    var sel_radio = document.getElementById(id);
    if (rectid == '无') {
        alert('请选择一个框！');
        sel_radio.checked = false;
    }
    else {
        var content_div = document.getElementById('rect_category_content');
        content_div.style.display = '';
    }
}

function sendCategoryContent() {
    hideShowJsonDiffer();
    var new_content = document.getElementById('category_content').value;
    if (new_content == '') {
        alert('您未填写任何内容！');
    }
    else {
        var content_div = document.getElementById('rect_category_content');
        content_div.style.display = 'none';
    }
}

function hideShowJsonDiffer() {
    var the_btn = document.getElementById('show_json_differ');
    the_btn.innerHTML = '显示对比展示';
    var compare_d = document.getElementById('compare_div');
    compare_d.style.display = 'none';
    var new_tb = document.getElementById('new_tb');
    new_tb.removeAttribute('border');
    new_tb.innerHTML = '';
}

function toShowJsonDiffer() {
    var the_btn = document.getElementById('show_json_differ');
    if (the_btn.innerHTML == '显示对比展示') {
        the_btn.innerHTML = '取消对比展示';

        var compare_d = document.getElementById('compare_div');
        compare_d.style.display = '';

        // jQuery.getJSON("data/example_original.json", function (data) {
        //     var i = 0;
        //     jQuery.each(data, function (infoIndex, info) {
        //         var tr_node = document.createElement('tr');
        //         tr_node.setAttribute('class', 'tr_rect');
        //         var td_x1y1 = document.createElement('td');
        //         td_x1y1.setAttribute('class', 'rect_x1y1');
        //         td_x1y1.innerHTML = '[' + info['bbox'][0] + ']';
        //         tr_node.appendChild(td_x1y1);
        //         var td_x2y2 = document.createElement('td');
        //         td_x2y2.setAttribute('class', 'rect_x2y2');
        //         td_x2y2.innerHTML = '[' + info['bbox'][1] + ']';
        //         tr_node.appendChild(td_x2y2);
        //         var td_x3y3 = document.createElement('td');
        //         td_x3y3.setAttribute('class', 'rect_x3y3');
        //         td_x3y3.innerHTML = '[' + info['bbox'][2] + ']';
        //         tr_node.appendChild(td_x3y3);
        //         var td_x4y4 = document.createElement('td');
        //         td_x4y4.setAttribute('class', 'rect_x4y4');
        //         td_x4y4.innerHTML = '[' + info['bbox'][3] + ']';
        //         tr_node.appendChild(td_x4y4);
        //         var content = info['predicts'][0]['content'] + ';' + info['predicts'][1]['content'] + ';' + info['predicts'][2]['content'];
        //         var td_content = document.createElement('td');
        //         td_content.setAttribute('class', 'rect_content');
        //         td_content.innerHTML = content;
        //         tr_node.appendChild(td_content);
        //         old_tb.appendChild(tr_node);
        //         i++;
        //     });
        // });

        var new_tb = document.getElementById('new_tb');
        new_tb.setAttribute('border', '1px');
        var tr_node = document.createElement('tr');
        var td_header1 = document.createElement('td');
        td_header1.innerHTML = '坐标';
        td_header1.setAttribute('colspan', '4');
        td_header1.setAttribute('align', 'center');
        tr_node.appendChild(td_header1);
        var td_header2 = document.createElement('td');
        td_header2.innerHTML = '内容';
        td_header2.setAttribute('align', 'center');
        tr_node.appendChild(td_header2);
        new_tb.appendChild(tr_node);

        var tb = document.getElementById('data_tb');
        var old_tb = document.getElementById('old_tb');
        var old_tr_list = old_tb.getElementsByTagName('tr');
        var delete_new_i = 0;

        var change_color_i=0;

        var all_rows = tb.rows;

        var max_len = Math.max(all_rows.length, old_tr_list.length - 1);

        for (var i = 0; i < max_len; i++) {
            try {
                var id = all_rows[i].getElementsByClassName('rect_id')[0].innerHTML;
            }
            catch (error) {
                var tr_node = document.createElement('tr');
                tr_node.setAttribute('class','tr_rect');
                tr_node.setAttribute('onmouseover','new_over_color('+change_color_i+')');
                tr_node.setAttribute('onmouseout','out_color('+change_color_i+')');
                var td_node = document.createElement('td');
                td_node.style.color = 'blue';
                td_node.setAttribute('colspan', '5');
                td_node.innerHTML = '--此框已删除--';
                tr_node.appendChild(td_node);
                new_tb.appendChild(tr_node);
                change_color_i+=1;
                continue;
            }

            while ((id <= old_tr_list.length) && (id != delete_new_i)) {
                var tr_node = document.createElement('tr');
                tr_node.setAttribute('class','tr_rect');
                tr_node.setAttribute('onmouseover','new_over_color('+change_color_i+')');
                tr_node.setAttribute('onmouseout','out_color('+change_color_i+')');
                var td_node = document.createElement('td');
                td_node.style.color = 'blue';
                td_node.setAttribute('colspan', '5');
                td_node.innerHTML = '--此框已删除--';
                tr_node.appendChild(td_node);
                new_tb.appendChild(tr_node);
                change_color_i+=1;
                delete_new_i += 1;
            }

            var x1 = all_rows[i].getElementsByClassName('rect_x1')[0].innerHTML;
            var y1 = all_rows[i].getElementsByClassName('rect_y1')[0].innerHTML;
            var x2 = all_rows[i].getElementsByClassName('rect_x2')[0].innerHTML;
            var y2 = all_rows[i].getElementsByClassName('rect_y1')[0].innerHTML;
            var x3 = all_rows[i].getElementsByClassName('rect_x1')[0].innerHTML;
            var y3 = all_rows[i].getElementsByClassName('rect_y2')[0].innerHTML;
            var x4 = all_rows[i].getElementsByClassName('rect_x2')[0].innerHTML;
            var y4 = all_rows[i].getElementsByClassName('rect_y2')[0].innerHTML;
            var content = all_rows[i].getElementsByClassName('rect_right_content')[0].innerHTML;

            var tr_node = document.createElement('tr');
            tr_node.setAttribute('class', 'tr_rect');
            tr_node.setAttribute('onmouseover','new_over_color('+change_color_i+')');
            tr_node.setAttribute('onmouseout','out_color('+change_color_i+')');
            var td_x1y1 = document.createElement('td');
            td_x1y1.setAttribute('class', 'rect_x1y1');
            td_x1y1.innerHTML = '[' + x1 + ',' + y1 + ']';
            tr_node.appendChild(td_x1y1);
            var td_x2y2 = document.createElement('td');
            td_x2y2.setAttribute('class', 'rect_x2y2');
            td_x2y2.innerHTML = '[' + x2 + ',' + y2 + ']';
            tr_node.appendChild(td_x2y2);
            var td_x3y3 = document.createElement('td');
            td_x3y3.setAttribute('class', 'rect_x3y3');
            td_x3y3.innerHTML = '[' + x3 + ',' + y3 + ']';
            tr_node.appendChild(td_x3y3);
            var td_x4y4 = document.createElement('td');
            td_x4y4.setAttribute('class', 'rect_x4y4');
            td_x4y4.innerHTML = '[' + x4 + ',' + y4 + ']';
            tr_node.appendChild(td_x4y4);
            var td_content = document.createElement('td');
            td_content.setAttribute('class', 'rect_content');
            td_content.innerHTML = content;
            tr_node.appendChild(td_content);
            new_tb.appendChild(tr_node);

            change_color_i+=1;
            delete_new_i += 1;
        }

        var new_tr_list = new_tb.getElementsByTagName('tr');

        for (var o_i = 1; o_i < old_tr_list.length; o_i++) {
            var old_td_list = old_tr_list[o_i].getElementsByTagName('td');
            var new_td_list = new_tr_list[o_i].getElementsByTagName('td');
            // console.log(new_td_list);

            if (new_td_list[0].innerHTML == '--此框已删除--') {
                continue;
            }

            for (var ii = 0; ii < 4; ii++) {
                if (old_td_list[ii].innerHTML != new_td_list[ii].innerHTML) {
                    // new_td_list[ii].setAttribute('bgcolor','red');
                    new_td_list[ii].style.color = 'red';
                }
            }
            if (old_td_list[ii].innerHTML.search(new_td_list[ii].innerHTML) == -1) {
                // new_td_list[ii].setAttribute('bgcolor','red');
                new_td_list[ii].style.color = 'red';
            }
        }
        for (var n_i = o_i; n_i < new_tr_list.length; n_i++) {
            var new_td_list = new_tr_list[n_i].getElementsByTagName('td');
            for (var ii = 0; ii < 5; ii++) {
                new_td_list[ii].style.color = 'orange';
            }
        }
    }
    else {
        hideShowJsonDiffer();
        // the_btn.innerHTML = '显示对比展示';
        // var compare_d = document.getElementById('compare_div');
        // compare_d.style.display = 'none';
        // var new_tb = document.getElementById('new_tb');
        // new_tb.removeAttribute('border');
        // new_tb.innerHTML = '';
    }
}

function old_over_color(x) {
    var old_tb = document.getElementById('old_tb');
    var new_tb = document.getElementById('new_tb');
    var old_tr = old_tb.getElementsByClassName('tr_rect');
    var new_tr = new_tb.getElementsByClassName('tr_rect');

    for(var i=0;i<old_tr.length;i++){
        old_tr[i].removeAttribute('bgcolor');
    }
    for(var i=0;i<new_tr.length;i++){
        new_tr[i].removeAttribute('bgcolor');
    }

    old_tr[x].setAttribute('bgcolor','aqua');
    if(new_tr.length>x){
        new_tr[x].setAttribute('bgcolor','aqua');
    }
}

function out_color() {
    var old_tb = document.getElementById('old_tb');
    var new_tb = document.getElementById('new_tb');
    var old_tr = old_tb.getElementsByClassName('tr_rect');
    var new_tr = new_tb.getElementsByClassName('tr_rect');

    for(var i=0;i<old_tr.length;i++){
        old_tr[i].removeAttribute('bgcolor');
    }
    for(var i=0;i<new_tr.length;i++){
        new_tr[i].removeAttribute('bgcolor');
    }
}

function new_over_color(x) {
    var old_tb = document.getElementById('old_tb');
    var new_tb = document.getElementById('new_tb');
    var old_tr = old_tb.getElementsByClassName('tr_rect');
    var new_tr = new_tb.getElementsByClassName('tr_rect');

    for(var i=0;i<old_tr.length;i++){
        old_tr[i].removeAttribute('bgcolor');
    }
    for(var i=0;i<new_tr.length;i++){
        new_tr[i].removeAttribute('bgcolor');
    }

    new_tr[x].setAttribute('bgcolor','aqua');
    if(old_tr.length>x){
        old_tr[x].setAttribute('bgcolor','aqua');
    }
}