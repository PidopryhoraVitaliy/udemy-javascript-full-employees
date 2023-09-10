import './app-filter.css'

const AppFilter = (props) => {
    const { riseFiltet, salaryFiltet, onChangeFilter } = props;
    const classNameIsActive = "btn btn-light";
    const classNameNotActive = "btn btn-outline-light";
    return (
        <div className="btn-group">
            <button
                name='AllEmployees'
                className={(!riseFiltet && !salaryFiltet) ? classNameIsActive : classNameNotActive}
                type="button"
                onClick={onChangeFilter}>
                All employees
            </button>
            <button
                name='riseFiltet'
                className={(riseFiltet) ? classNameIsActive : classNameNotActive}
                type="button"
                onClick={onChangeFilter}>
                на повышение
            </button>
            <button
                name='salaryFiltet'
                className={(salaryFiltet) ? classNameIsActive : classNameNotActive}
                type="button"
                onClick={onChangeFilter}>
                з/п больше 1000
            </button>
        </div>
    )
}

export default AppFilter;