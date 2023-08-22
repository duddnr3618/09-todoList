import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

import { useRef, useState} from 'react'; 

// Mock Date (Dumy Date) : 프로그램을 작동하기 위한 임시 데이터 (가짜 데이터)

// 객체
// const 로 선언하더라도 객체의 속성값을 수정이나 삭제가 가능 함. 

const mockDate = [
  {
    id : 0,
    isDone : false, 
    content: "1. 운동하기", 
    createDate : new Date().getTime()
  }, 
  {
    id : 1,
    isDone : false, 
    content: "2. 영화보기", 
    createDate : new Date().getTime()
  },
  {
    id : 2,
    isDone : false, 
    content: "3. 독서하기", 
    createDate : new Date().getTime()
  }
]

// new Date().getDate() : UNIX 표준시 1970.1.1 
// new Date().getTime() : 현재 시스템의 날짜  
    // 


function App() {
    // 최 상위 컴포넌트  : root 컴포넌트 
    // useState 선언 : 값이 수정이되면 랜더링이 자동으로 일어남 
    //todo : 배열 [ {객체}, {객체}, {객체}]
    const [todo , setTodo] = useState(mockDate); 

    // 컴포넌트의 라이프사이클 : 생성(mount) ===> 수정 (값이 변경되면 리랜더링)=>삭제(unmount)
    // 컴포넌트가 생성되는 시점에서 객체의 id 값이 : 0, 1, 2 
    // 컴포넌트가 생성시점이 아니라 수정시점에서 초기값 할당 :  id 값을 3번 부터 할당 

    const idRef = useRef(3); 

    // Todo를 생성하는 함수 : onCreate
        //content 를 인풋 받아서 
    const onCreate = (content) => {
      const newItem = {
        id : idRef.current, 
        content , 
        isDone : false , 
        createDate : new Date().getTime(),  
      }; 

      setTodo ([newItem, ...todo]); 
      idRef.current += 1; 

    }; 

    // Todo를 수정하는 함수 : onUpdate
    // 하위 컴포넌트로 받은 값 : targetId
    // 하위 컴포넌트로 부터 객체의 id 값을 부여 받아서 isDone 의 값을 수정
    // it : todo 배열의 객체를 받는 변수  
    const onUpdate = (targetId) => {
      setTodo (
        todo.map((it) => 
          // it.id 와 targetID 가 같은 값을 찾아서 isDone 필드의 값을 수정 
          //   === : 값과 타입이 모두 같을때 
          it.id === targetId ? { ...it, isDone : !it.isDone } : it 
        
          )
      );
    };

    // Todo를 삭제 하는 함수 : onDelete
    // 배열의 값을 filter() 메소드를 사용해서 원하는 값만 검색 
    // 배열 내부의 객체화 삭제할 id가 같이 않은것만 필터링 해서 setTodo를 사용해서 주입
    const onDelete = (targetId) => {

      setTodo ( todo.filter ((it) => 
            it.id !== targetId 
      )) ; 

    }; 

    // 하위 컴포넌트가 App 컴포넌트로 이벤트를 전달 
    // 하위 컴포넌트 호출시 pros를 사용해서 이벤트 전달 
    // TodoEditor : onCreate 
    // TodoList => TodoItem : onUpdate, onDelete 

  return (
    <div className="App">
        <Header /> 
        <TodoEditor onCreate={onCreate} /> 
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}

export default App;