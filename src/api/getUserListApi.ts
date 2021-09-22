// import axios from 'axios';
type obj = {
  name:string;
  value: string;
  id: string;
}
const modelData = [{
  name: 'gby',
  value: '1',
  id: '1'
},{
  name: 'qwe',
  value: '1',
  id: '2'
},{
  name: 'asd',
  value: '1',
  id: '3'
},{
  name: 'zxc',
  value: '1',
  id: '4'
},{
  name: 'rty',
  value: '1',
  id: '5'
},{
  name: 'ghj',
  value: '1',
  id: '6'
}]

export function getUserListApi():obj[]{
  console.log('请求数据===');
  // 模拟数据
  return modelData
}
