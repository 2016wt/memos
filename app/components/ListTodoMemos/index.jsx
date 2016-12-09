import React, {Component} from 'react';
class ListTodoMemos extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        let delindex = e.target.getAttribute("data-key");
        this.props.onDel(delindex);
    }
    handleChange(e) {
        let changeIndex = e.target.getAttribute("data-key");
        this.props.onTodoToDoing(changeIndex);
    }
    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.istodo) {
                number++;
            }
        })
        return (
            <main>
                <h2>
                    <span>
                        新建事项
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>
                <ul>
                    {this.props.todolist.map((item, i) => {
                        if (item.istodo) {
                            return (
                                <li key={i} style={{
                                    opacity: item.istodo
                                        ? "0.7"
                                        : ''
                                }}>
                                    <input type="checkbox" checked={!item.istodo} onChange={this.handleChange.bind(this)} data-key={i}/>
                                    <p>{item.todo}</p>
                                    <button className="destroy" data-key={i} onClick={this.handleDel.bind(this)}>-</button>
                                </li>
                            )
                        }
                    })
}
                </ul>
            </main>
        )
    }
}
export default ListTodoMemos;
