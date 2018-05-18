function toAddRect() {
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
    td_content.innerHTML = document.getElementById('add_rect_text').value;
    tr_node.appendChild(td_content);
    var td_right_content = document.createElement('td');
    td_right_content.setAttribute('class', 'rect_right_content');
    td_right_content.innerHTML = document.getElementById('add_rect_text').value;
    tr_node.appendChild(td_right_content);
    tb.appendChild(tr_node);

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
}

function toAddNo() {
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
}

function toEditRect() {
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
    console.log(td_x1)
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
    }
}

function toSelectContent() {
    var rectid = document.getElementById('chose_rect_id').innerHTML;
    var tr = document.getElementById('rect_' + rectid);
    var right_content = tr.getElementsByClassName('rect_right_content')[0];
    var select = $.getId('chose_rect_text_sel');
    var select_index = select.selectedIndex
    var select_content = select.options[select_index].text;
    right_content.innerHTML = select_content;
    var td_cotent = tr.getElementsByClassName('rect_content');
    td_cotent[select_index].remove();
    var td_select = document.createElement('td');
    td_select.setAttribute('class', 'rect_content');
    td_select.innerHTML = select_content;
    tr.insertBefore(td_select, td_cotent[0]);
    select.innerHTML='';
    var content = tr.getElementsByClassName('rect_content');
    for (var i = 0; i < content.length; i++) {
        var option = document.createElement('option');
        jQuery(option).val(content[i].innerHTML);
        jQuery(option).text(content[i].innerHTML);
        select.append(option);
    }
}

function toAddNewContent() {
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
            right_content.innerHTML=new_content;
            var td_cotent = tr.getElementsByClassName('rect_content');
            var td_new_content = document.createElement('td');
            td_new_content.setAttribute('class', 'rect_content');
            td_new_content.innerHTML = new_content;
            tr.insertBefore(td_new_content, td_cotent[0]);
            var select = $.getId('chose_rect_text_sel');
            select.innerHTML='';
            document.getElementById('chose_rect_text_new').value=''
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
    var json_data=new Array();

    var tb = document.getElementById('data_tb');
    var all_rows = tb.rows;
    for (var i = 0; i < all_rows.length; i++) {
        // console.log(all_rows)
        var id=all_rows[i].getElementsByClassName('rect_id')[0].innerHTML;
        var x1=all_rows[i].getElementsByClassName('rect_x1')[0].innerHTML;
        var y1=all_rows[i].getElementsByClassName('rect_y1')[0].innerHTML;
        var x2=all_rows[i].getElementsByClassName('rect_x2')[0].innerHTML;
        var y2=all_rows[i].getElementsByClassName('rect_y1')[0].innerHTML;
        var x3=all_rows[i].getElementsByClassName('rect_x1')[0].innerHTML;
        var y3=all_rows[i].getElementsByClassName('rect_y2')[0].innerHTML;
        var x4=all_rows[i].getElementsByClassName('rect_x2')[0].innerHTML;
        var y4=all_rows[i].getElementsByClassName('rect_y2')[0].innerHTML;
        var content=all_rows[i].getElementsByClassName('rect_right_content')[0].innerHTML;
        // console.log(id,x1,y1,x2,y2,x3,y3,x4,y4,content)
        json_data[i]={"id":parseInt(id),"bbox":[[parseInt(x1),parseInt(x2)],[parseInt(x2),parseInt(y2)],[parseInt(x3),parseInt(y3)],[parseInt(x4),parseInt(y4)]],"predicts": [{"content": content, "score": 1.0}]};
        // console.log(json_data[i])
    }
    var finall_json_data=[];
    for(var j=0;j<json_data.length;j++){
        finall_json_data.push(json_data[j])
    }
    var jsonstr =JSON.stringify(finall_json_data);
    // console.log(jsonstr)

    var blob = new Blob([jsonstr], { type: "" });
    saveAs(blob, "finally_data.json");
}