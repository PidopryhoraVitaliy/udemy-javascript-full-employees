import './app-info.css'

const AppInfo = (props) => {
    const { count, increase } = props;
    return (
        <div className="app-info">
            <h2>Учет сотрудников</h2>
            <h3>Общее число: {count}</h3>
            <h3>Премии {increase}</h3>
        </div>
    )
}

export default AppInfo;