// [MITM]
// hostname = api.bilibili.com, app.bilibili.com

var obj = JSON.parse(body);

obj1=obj['data']['tab'];
obj2=obj['data']['bottom'];

obj2.forEach(function (element, index, array) {
    if(element['pos']==4){      
       obj2.splice(index,1)  
    }

   });
obj1.forEach(function (element, index, array) {
  
    if(element['id']!=99&&element['id']!=101&&element['id']!=98){      
       obj1.splice(index,1)  
    }

   });

obj['data']['tab']=obj1
obj['data']['bottom']=obj2
delete obj['data']['top']

JSON.stringify(obj);