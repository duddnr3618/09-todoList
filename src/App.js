import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import {useRef, useState} from 'react';

// dummy data (mock data) : 프로그램을 작동하기 위한 임시 데이터
// 객체 선언 / const 로 선언하더라도 객체의 속성값을 수정이나 삭제가 가능하다.
const mockData = [
  {
    id : 0,
    isDone : false ,
    content:"React 실습1" ,
    createDate:new Date().getDate()
  },
  {
    id : 1,
    isDone : false ,
    content:"React 실습2" ,
    createDate:new Date().getDate() 
  },
  {
    id : 2,
    isDone : false ,
    content:"React 실습3" ,
    createDate:new Date().getDate()
  }
]



function App() {
  //최상위 컴포넌트 : root 컴포넌트
  // useState : 값이 수정이 되면 랜더링된다.
 const [todo,setTodo] = useState(mockData);   // todo : 배열[{객체},{객체},{객체}]

 // 컴포넌트가 생성되는 시점에서 객체의 id값이 : 0,1,2 
 // id값을 3번부터 할당 -> 텀포넌트가 생성시점이 아니라 수정 시점에서 초기값 할당 : id값을 3번 부터 할당
 const idRef = useRef(3);

 // Todo를 생성하는 함수 : onCreate
 const onCreate = (content) => {  // content를 인풋받아서 
    const newItem = {
      id : idRef.current , 
      content ,
      isDone : false ,
      createDate : new Date().getTime(),
    };

    setTodo ([newItem, ...todo]);
    idRef.current += 1;

 };

 // Todo를 수정하는 함수 : onUpdate

 // Todo를 삭제하는 함수 : onDelete



  return (
    <div className = "App">
      <Header />
      <TodoEditor />
      <TodoList /> 
    </div>
  );
}

export default App;
