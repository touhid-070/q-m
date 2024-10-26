import { DateValue, useCalendarGrid, useLocale } from 'react-aria';
import { DateDuration, endOfMonth, getWeeksInMonth } from '@internationalized/date';
import { CalendarState } from 'react-stately';
import { CAlendarCell } from './CalendarCell';



export function CalendarGrid({ state, offset = {}, isDateUnavailabel }: { state: CalendarState, offset?: DateDuration ,  isDateUnavailabel?: (date: DateValue)=> boolean }) {
    const startDate = state.visibleRange.start.add(offset)
    const endDate = endOfMonth(startDate)
    let { locale } = useLocale();
    let { gridProps, headerProps, weekDays } = useCalendarGrid({
        startDate,
        endDate,
        weekdayStyle: 'short'
    }, state);

    const weeksInMonth = getWeeksInMonth(startDate, locale)

    return (
        <table {...gridProps} cellPadding={0} className='flex-1'>
            <thead {...headerProps} className='text-sm font-medium'>
                <tr>
                    {weekDays.map((day, index) => <th key={index}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
                    <tr key={weekIndex}>
                        {state.getDatesInWeek(weekIndex).map((date, i) => (
                            date
                                ? (
                                    <CAlendarCell currentMonth={startDate}
                                        key={i}
                                        state={state}
                                        date={date}
                                        isUnavailable={isDateUnavailabel?.(date)}
                                    />
                                )
                                : <td key={i} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}