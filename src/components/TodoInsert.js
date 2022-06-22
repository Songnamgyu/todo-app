import {MdAddCircle} from "react-icons/md"
const TodoInserts = () => {
    return(
        <form className="TodoInsert">
            <input placeholder="할일을 입력하세요"/>
            <button type='submit'>
                <MdAddCircle/>
            </button>
        </form>
    )
}

export default TodoInserts;