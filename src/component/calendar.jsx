import PropTypes from 'prop-types'

const Calendar = ({date}) => {
    const dayName = [
        {name: "Понедельник", short_name: "Пн"},
        {name: "Вторник", short_name: "Вт"},
        {name: "Среда", short_name: "Ср"},
        {name: "Четверг", short_name: "Чт"},
        {name: "Пятница", short_name: "Пт"},
        {name: "Суббота", short_name: "Сб"},
        {name: "Воскресенье", short_name: "Вс"}
        ]
    const mount_name = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    // const title_day = dayName.map(day => <th scope="col" title={day.name}>{day.short_name}</th>);
    const normDate = (date) => (date>0) ? (date-1):6;
    const CurDate = {
        year: date.getFullYear(),
        day: dayName[normDate(date.getDay())].name,
        date: date.getDate(),
        mount: mount_name[date.getMonth()]
    }
    let firstDate = new Date(date);
    firstDate.setDate(1);
    firstDate.setDate(firstDate.getDate()-firstDate.getDay()+1);
    let dateWeekArray = new Array();
    for (let i=0;i<6;i++){
        let week = new Array();
        for(let j=0;j<7;j++){
            week.push( {
                day: firstDate.getDate(), 
                overMount: (firstDate.getMonth() != date.getMonth()),
                curDate: Number(firstDate) == Number(date)
                })
                firstDate.setDate(firstDate.getDate() + 1);
        }
        dateWeekArray.push(week);
    }
    return (
        <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{CurDate.day}</div>
            <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{CurDate.date}</div>
            <div className="ui-datepicker-material-month">{CurDate.mount}</div>
            <div className="ui-datepicker-material-year">{CurDate.year}</div>
            </div>
        </div>
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{CurDate.mount}</span>&nbsp;<span className="ui-datepicker-year">{CurDate.year}</span>
            </div>
        </div>
        <table className="ui-datepicker-calendar">
            <colgroup>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col className="ui-datepicker-week-end"></col>
            <col className="ui-datepicker-week-end"></col>
            </colgroup>
            <thead>
            <tr>{dayName.map((curDayName, index) => <th key={index} scope="col" title={curDayName.name}>{curDayName.short_name}</th>)}</tr>
            </thead>
            <tbody>
            {dateWeekArray.map((curWeek, index) => (<tr key={index}>{curWeek.map((curDay, index) => (
                curDay.overMount ? <td key={index} className="ui-datepicker-other-month">{curDay.day}</td>
                : curDay.curDate ? <td key={index} className="ui-datepicker-today">{curDay.day}</td>
                : <td key={index}>{curDay.day}</td>
                ))}</tr>))}
            </tbody>
        </table>
        </div>
    )
    }

    Calendar.propTypes = {
        date: PropTypes.instanceOf(Date)
    }
export default Calendar