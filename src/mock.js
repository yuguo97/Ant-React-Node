//引入mockjs
var Mock = require('mockjs');
//使用mockjs模拟数据
export default Mock.mock('/api',{
    'tab|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'key|+1': 1,
        'name': '@name',
        'age|1-100': 20,
        'address': '@city',
        'tags|1-2':['@name']
    }],
    'home|1-10':[{
        'key|+1': 1,
        'name':'@sentence(3, 5)',
        'text':'@sentence()'
    }],
    'about|5-10':[{
        'name':'@city()',
        'value|30-100':30
    }],
    'topics|5-10':[{
        'key|+1': 1,
        'name':'@sentence(3, 5)',
        'date':'@datetime(\'y-M-d H:m:s\')'
    }],
    'setting|5-10':[{
        'name':'@city()',
        'y|30-100':30
    }]
});
