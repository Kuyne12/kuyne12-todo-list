import react, { USEState, useState }from "react";

// useState: When to use the state?
//

const Home = () => {
    const { inputValue, setInputValue } = useState
    const [todos, setTodos] = useState[()]

    const saveTodos

    return (
        <div className="container">
            <h1>My Todos</h1>
            <ul>
                <li>
                    <input
                        type="text"\
                        onchange{(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => e.key == 13 setTodos(todos.concat(inputValue)) : null}
                        placeholder="what do you need to do></input>
                </li>
                <li>
                    Make the bed <i class="fa-solid fa-trash-can"></i>
                </li>
                <li>
                    Fold the laundry <i class="fa-solid fa-trash-can"></i>
                </li>
                <li>
                    take out the trash <i class="fa-solid fa-trash-can"></i>
                </li>
                <li>
                    Charge the phone <i class="fa-solid fa-trash-can"></i>
                </li>
            </ul>
            <div>23 tasks</div>
        </div>
    );
);

export default Home;
