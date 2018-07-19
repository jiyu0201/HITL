function sRect_show(data_i, data_j) {
    hideShowJsonDiffer();

    var is_edit = document.getElementById('is_edit').innerHTML;
    if (is_edit != '无') {
        alert('您正在编辑其他内容，请先退出！');
    }
    else {
        var lbl_i = document.getElementById('select_i');
        lbl_i.innerHTML = data_i;
        var lbl_j = document.getElementById('select_j');
        lbl_j.innerHTML = data_j;

        var cvs = $.getId('data_cvs');
        var ctx = cvs.getContext('2d');
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        var imgObj = new Image();
        imgObj.src = 'img/fapiao.jpg';
        imgObj.onload = function () {
            cvs.width = imgObj.naturalWidth;
            cvs.height = imgObj.naturalHeight;
            ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
            var tb = document.getElementById('data_tb');
            var all_rows = tb.rows;
            for (var i = 0; i < all_rows.length; i++) {
                var rect_td = all_rows[i].getElementsByClassName('rect')[0];
                var rect_x1 = rect_td.getElementsByClassName('rect_x1')[0].innerHTML;
                var rect_y1 = rect_td.getElementsByClassName('rect_y1')[0].innerHTML;
                var rect_x4 = rect_td.getElementsByClassName('rect_x4')[0].innerHTML;
                var rect_y4 = rect_td.getElementsByClassName('rect_y4')[0].innerHTML;
                ctx.strokeStyle = "#FF0000";
                ctx.strokeRect(rect_x1, rect_y1, rect_x4 - rect_x1, rect_y4 - rect_y1);
                // ctx.beginPath();
                // ctx.moveTo(rect_x1, rect_y1);
                // ctx.lineTo(rect_x4, rect_y1);
                // ctx.lineTo(rect_x4, rect_y4);
                // ctx.lineTo(rect_x1, rect_y4);
                // ctx.lineTo(rect_x1, rect_y1);
                // ctx.stroke();
            }
            var data_tr = document.getElementById('data_' + data_i);
            var data_td = data_tr.getElementsByClassName('value')[data_j];
            var x1 = data_td.getElementsByClassName('x1')[0].innerHTML;
            var y1 = data_td.getElementsByClassName('y1')[0].innerHTML;
            var x4 = data_td.getElementsByClassName('x4')[0].innerHTML;
            var y4 = data_td.getElementsByClassName('y4')[0].innerHTML;
            ctx.strokeStyle = '#FFFFFF';
            ctx.shadowColor='#FFFF00';
            ctx.shadowOffsetX=0;
            ctx.shadowOffsetY=0;
            ctx.shadowBlur=10;
            ctx.lineWidth = 2;
            ctx.strokeRect(x1, y1, x4 - x1, y4 - y1);
        };
    }
}

function edit_Content() {
    var data_i = document.getElementById('select_i').innerHTML;
    var data_j = document.getElementById('select_j').innerHTML;
    if (data_i == '无' || data_j == '无') {
        alert('您未选择任何内容！');
    }
    else {
        var is_edit = document.getElementById('is_edit');
        is_edit.innerHTML = '有';

        var data_tr = document.getElementById('show_data_' + data_i);

        var data_td = data_tr.getElementsByClassName('value')[0];
        var lbl_content = data_td.getElementsByClassName('lbl_content')[data_j];
        var input_content = data_td.getElementsByClassName('input_content')[data_j];

        var data_btn = data_tr.getElementsByClassName('btn')[0];
        var btn_edit = data_btn.getElementsByClassName('btn_edit')[0];
        var btn_edit_ok = data_btn.getElementsByClassName('btn_edit_ok')[0];
        var btn_edit_cancel = data_btn.getElementsByClassName('btn_edit_cancel')[0];

        lbl_content.style.display = 'none';
        input_content.style.display = '';

        btn_edit.style.display = 'none';
        btn_edit_ok.style.display = '';
        btn_edit_cancel.style.display = '';
    }
}

function edit_OK() {
    var data_i = document.getElementById('select_i').innerHTML;
    var data_j = document.getElementById('select_j').innerHTML;

    var show_data_tr = document.getElementById('show_data_' + data_i);
    var show_data_td = show_data_tr.getElementsByClassName('value')[0];
    var show_lbl_content = show_data_td.getElementsByClassName('lbl_content')[data_j];
    var show_input_content = show_data_td.getElementsByClassName('input_content')[data_j];
    var content = show_data_td.getElementsByClassName('input_content')[data_j].value;

    if(content=='')
    {
        content='[此处内容已删除]';
    }

    show_lbl_content.innerHTML = content;
    show_input_content.setAttribute('value', content);

    var new_data_tr = document.getElementById('new_data_' + data_i);
    var new_data_td = new_data_tr.getElementsByClassName('value')[0];
    var new_lbl_content = new_data_td.getElementsByClassName('content')[data_j];
    new_lbl_content.innerHTML = content;

    var data_tr = document.getElementById('data_' + data_i);
    var data_td = data_tr.getElementsByClassName('value')[data_j];
    var lbl_content = data_td.getElementsByClassName('content')[0];
    lbl_content.innerHTML = content;

    show_lbl_content.style.display = '';
    show_input_content.style.display = 'none';

    var show_data_btn = show_data_tr.getElementsByClassName('btn')[0];
    var show_btn_edit = show_data_btn.getElementsByClassName('btn_edit')[0];
    var show_btn_edit_ok = show_data_btn.getElementsByClassName('btn_edit_ok')[0];
    var show_btn_edit_cancel = show_data_btn.getElementsByClassName('btn_edit_cancel')[0];
    show_btn_edit.style.display = '';
    show_btn_edit_ok.style.display = 'none';
    show_btn_edit_cancel.style.display = 'none';

    var lbl_i = document.getElementById('select_i');
    lbl_i.innerHTML = '无';
    var lbl_j = document.getElementById('select_j');
    lbl_j.innerHTML = '无';
    var is_edit = document.getElementById('is_edit');
    is_edit.innerHTML = '无';

    var cvs = $.getId('data_cvs');
    var ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var imgObj = new Image();
    imgObj.src = 'img/fapiao.jpg';
    imgObj.onload = function () {
        cvs.width = imgObj.naturalWidth;
        cvs.height = imgObj.naturalHeight;
        ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
        var tb = document.getElementById('data_tb');
        var all_rows = tb.rows;
        for (var i = 0; i < all_rows.length; i++) {
            var rect_td = all_rows[i].getElementsByClassName('rect')[0];
            var rect_x1 = rect_td.getElementsByClassName('rect_x1')[0].innerHTML;
            var rect_y1 = rect_td.getElementsByClassName('rect_y1')[0].innerHTML;
            var rect_x4 = rect_td.getElementsByClassName('rect_x4')[0].innerHTML;
            var rect_y4 = rect_td.getElementsByClassName('rect_y4')[0].innerHTML;
            ctx.strokeStyle = "#FF0000";
            ctx.strokeRect(rect_x1, rect_y1, rect_x4 - rect_x1, rect_y4 - rect_y1);
            // ctx.beginPath();
            // ctx.moveTo(rect_x1, rect_y1);
            // ctx.lineTo(rect_x4, rect_y1);
            // ctx.lineTo(rect_x4, rect_y4);
            // ctx.lineTo(rect_x1, rect_y4);
            // ctx.lineTo(rect_x1, rect_y1);
            // ctx.stroke();
        }
    };
}

function edit_Cancel() {
    var lbl_i = document.getElementById('select_i');
    data_i=lbl_i.innerHTML;
    var lbl_j = document.getElementById('select_j');
    data_j=lbl_j.innerHTML;
    var is_edit = document.getElementById('is_edit');

    var cvs = $.getId('data_cvs');
    var ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var imgObj = new Image();
    imgObj.src = 'img/fapiao.jpg';
    imgObj.onload = function () {
        cvs.width = imgObj.naturalWidth;
        cvs.height = imgObj.naturalHeight;
        ctx.drawImage(imgObj, 0, 0, imgObj.naturalWidth, imgObj.naturalHeight);
        var tb = document.getElementById('data_tb');
        var all_rows = tb.rows;
        for (var i = 0; i < all_rows.length; i++) {
            var rect_td = all_rows[i].getElementsByClassName('rect')[0];
            var rect_x1 = rect_td.getElementsByClassName('rect_x1')[0].innerHTML;
            var rect_y1 = rect_td.getElementsByClassName('rect_y1')[0].innerHTML;
            var rect_x4 = rect_td.getElementsByClassName('rect_x4')[0].innerHTML;
            var rect_y4 = rect_td.getElementsByClassName('rect_y4')[0].innerHTML;
            ctx.strokeStyle = "#FF0000";
            ctx.beginPath();
            ctx.moveTo(rect_x1, rect_y1);
            ctx.lineTo(rect_x4, rect_y1);
            ctx.lineTo(rect_x4, rect_y4);
            ctx.lineTo(rect_x1, rect_y4);
            ctx.lineTo(rect_x1, rect_y1);
            ctx.stroke();
        }
    };

    var show_data_tr = document.getElementById('show_data_' + data_i);
    var show_data_btn = show_data_tr.getElementsByClassName('btn')[0];
    var btn_edit = show_data_btn.getElementsByClassName('btn_edit')[0];
    var btn_edit_ok = show_data_btn.getElementsByClassName('btn_edit_ok')[0];
    var btn_edit_cancel = show_data_btn.getElementsByClassName('btn_edit_cancel')[0];
    btn_edit.style.display = '';
    btn_edit_ok.style.display = 'none';
    btn_edit_cancel.style.display = 'none';

    var show_data_td = show_data_tr.getElementsByClassName('value')[0];
    var show_lbl_content = show_data_td.getElementsByClassName('lbl_content')[data_j];
    var show_input_content = show_data_td.getElementsByClassName('input_content')[data_j];
    show_lbl_content.style.display = '';
    show_input_content.style.display = 'none';

    lbl_i.innerHTML = '无';
    lbl_j.innerHTML = '无';
    is_edit.innerHTML = '无';
}

function hideShowJsonDiffer() {
    var the_btn = document.getElementById('show_json_differ');
    the_btn.innerHTML = '显示对比展示';
    var compare_d = document.getElementById('data_comparison_div');
    compare_d.style.display = 'none';
}

function toShowJsonDiffer() {
    var is_edit = document.getElementById('is_edit').innerHTML;
    if (is_edit != '无') {
        alert('您正在编辑其他内容，请先退出！');
    }
    else {
        var the_btn = document.getElementById('show_json_differ');
        var compare_d = document.getElementById('data_comparison_div');
        if (the_btn.innerHTML == '显示对比展示') {
            the_btn.innerHTML = '取消对比展示';

            compare_d.style.display = '';

            var old_tb = document.getElementById('old_data_tb');
            old_tb.setAttribute('border', '1px');
            var new_tb = document.getElementById('new_data_tb');
            new_tb.setAttribute('border', '1px');
            var all_old_rows = old_tb.rows;
            var all_new_rows = new_tb.rows;
            for (var i = 1; i < all_old_rows.length; i++) {
                var old_td_value = all_old_rows[i].getElementsByClassName('value')[0];
                var new_td_value = all_new_rows[i].getElementsByClassName('value')[0];
                var old_td_content = old_td_value.getElementsByClassName('content');
                var new_td_content = new_td_value.getElementsByClassName('content');

                for (var j = 0; j < old_td_content.length; j++) {
                    if (old_td_content[j].innerHTML != new_td_content[j].innerHTML) {
                        old_td_content[j].style.color = 'blue';
                        new_td_content[j].style.color = 'red';
                    }
                    else {
                        old_td_content[j].style.color = '';
                        new_td_content[j].style.color = '';
                    }
                }
            }
        }
        else {
            hideShowJsonDiffer();
        }
    }
}
