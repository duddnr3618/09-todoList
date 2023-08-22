import TodoItem from "./TodoItem";
import './TodoList.css'; 
import {useState} from 'react'; 

const TodoList = ({todo, onUpdate, onDelete}) => {

    // 검색 처리 블락 
    const [search , setSearch] = useState(""); 

    //input 박스의 내용이 수정되면 호출 
    const onChangeSerch = (e) => {
        setSearch (e.target.value); 
    } 

    // 검색어를 처리하는 함수 
    const getSearchResult = () => {
        return search ===""  ? 
            todo : 
            todo.filter ((it) => 
                it.content.toLowerCase().includes(search.toLowerCase())

        ); 
    }


    return (
    <div className ="TodoList">
        <h4> Todo List 🧞‍♂️🧞‍♀️</h4>

        <input
            value = {search}
            onChange = {onChangeSerch}
            className ="searchbar"
            placeholder="검색어를 입력하세요" /> 

        <div className = "list_wrapper">
            
            {   // 검색 기능 없이 직접 출력 
            
                // todo : 배열 [{객체}, {객체}, {객체}]
                // todo의 배열의 객체를 map을 사용해서 가져와서 출력 
                // 검색 기능을 같이 처리하면서 루프 

                /*
                todo.map( (it) => (

                <TodoItem 
                    key = {it.id}

                    id = {it.id} 
                    content = {it.content}
                    isDone = {it.isDone}
                    createDate = {it.createDate}

                    onUpdate = {onUpdate}
                    onDelete = {onDelete}
                /> 

                ))
                */ }

            {   // 검색 기능을 사용하면서 TodoItem 컴포넌트를 출력 
                // getSearchaResult : 검색어가 없으면 todo 
                //                    검색어가 있으면 검색어로 필터된 todo 
                getSearchResult().map( (it) => (
                    <TodoItem 
                        key = {it.id}
                        {...it}
                        onUpdate = {onUpdate}
                        onDelete = {onDelete}
                    /> 
                )
                )

            }


        </div>



    </div>
    );
}

export default TodoList; 