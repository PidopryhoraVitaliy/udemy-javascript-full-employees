import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
            isInvalidData: false
        }
    }

    onChangeValue = (e) => {
        this.setState({ [e.target.name]: e.target.value, isInvalidData: false })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        if ((name.length <= 3) || (salary <= 0)) {
            this.setState({ isInvalidData: true });
            console.log('incorrect data!');
            return;
        }
        this.props.onAdd(name, salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const { name, salary, isInvalidData } = this.state
        let addClassIsInvalidData = '';
        if (isInvalidData) {
            addClassIsInvalidData = ' is-invalid';
        }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => this.onSubmit(e, name, salary)}>
                    <input type="text"
                        className={"form-control new-post-label" + addClassIsInvalidData}
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onChangeValue}
                        minLength="3" />
                    <input type="number"
                        className={"form-control new-post-label" + addClassIsInvalidData}
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onChangeValue}
                        min="1" />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;