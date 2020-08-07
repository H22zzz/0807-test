$(function (){
    if(localStorage.getItem('goods')){
        var goodsArr = JSON.parse(localStorage.getItem('goods'));
        //加载数据
        $.ajax({
            url: './data/goods.json',
            type: 'get',
            dataType: 'json',
            success: function (jsonArr){
                $.each(goodsArr, function (index,item) {
                    $.each(jsonArr,function (i,obj) {
                        if(item.code === obj.code){
                            var goodsDom = `<li>
                                <img src="${obj.imgurl}" alt="">
                                <h3>${obj.title}</h3>
                                <p>${obj.price}</p>
                                <span>${item.num}</span>
                                <em code="${obj.code}">删除</em>
                            </li>`;
                            $('.list').append(goodsDom);
                        }
                    })
                });
            } 
        });
    } else {
        var newLi = '<li style="line-height:80px;text-align:center;color: #999;">购物车暂无数据！</li>';
    }
})