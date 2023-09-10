import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'Vasia', salary: 1750, increase: true, rise: false },
                { id: 2, name: 'Sergei', salary: 2200, increase: false, rise: true },
                { id: 3, name: 'Ruslan', salary: 3400, increase: true, rise: false },
                { id: 4, name: 'Dimon', salary: 950, increase: true, rise: false },
            ],
            term: '',
            riseFiltet: false,
            salaryFiltet: false,
        }
    }

    addItem = (name, salary) => {
        this.setState(({ data }) => {
            const newId = data.reduce((maxId, item) => (item.id > maxId) ? item.id : maxId, 0) + 1;
            return {
                data: [...data, { id: newId, name, salary, increase: false, rise: false }]
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }));
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.includes(term));
    }

    filterEmployees = (items, riseFiltet, salaryFiltet) => {
        return items.filter(item => {
            if (riseFiltet && !item.rise) {
                return false;
            }
            if (salaryFiltet && item.salary < 1000) {
                return false;
            }
            return true;
        })
    }

    onChangeFilter = (e) => {
        const buttonName = e.currentTarget.name;
        if (buttonName === 'AllEmployees') {
            this.setState({
                riseFiltet: false,
                salaryFiltet: false,
            });
        } else if (buttonName === 'riseFiltet') {
            this.setState({
                riseFiltet: !this.state.riseFiltet
            });
        } else if (buttonName === 'salaryFiltet') {
            this.setState({
                salaryFiltet: !this.state.salaryFiltet
            });
        }
    }

    render() {
        const { data, term, riseFiltet, salaryFiltet } = this.state;
        const visibleData = this.filterEmployees(this.searchEmployees(data, term), riseFiltet, salaryFiltet);

        return (
            <div className="app">
                <AppInfo
                    count={data.length}
                    increase={data.filter(item => item.increase).length} />

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        riseFiltet={riseFiltet}
                        salaryFiltet={salaryFiltet}
                        onChangeFilter={this.onChangeFilter} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;