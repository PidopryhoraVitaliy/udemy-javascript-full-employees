import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    const elements = data.map(item => {
        return (
            <EmployeesListItem
                key={item.id}
                {...item}
                onDelete={() => { onDelete(item.id) }}
                onToggleProp={onToggleProp} />
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;