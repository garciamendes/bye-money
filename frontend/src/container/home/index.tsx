// React
import React, { useState } from 'react'

// Third party
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, Day } from 'react-modern-calendar-datepicker'
import { AiOutlinePlus } from 'react-icons/ai'

// Local
import './home.scss'

export function Home() {
  // Others
  const date = new Date()
  const defaultValue: Day = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }

  // States
  const [selectDay, setSelectDay] = useState(defaultValue)

  const valuesChange = (value: Day) => {
    setSelectDay({
      year: value.year,
      month: value.month,
      day: value.day,
    })
  }

  const renderFooterCalendar = () => {
    return (
      <div className='container_add_point_reminder'>
        <button>
          <AiOutlinePlus size={15} />
          Adicionar uma lembrança
        </button>
      </div>
    )
  }

  return (
    <div className='container_main_home'>
      <div className='content_left'>
        <div className='container_info_status_money'>
          <p>informações do status do money</p>
        </div>

        <div className='container_table'>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
              </tr>
              <tr>
                <th>Nome</th>
              </tr>
              <tr>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Netflix</td>
              </tr>
              <tr>
                <td>Netflix</td>
              </tr>
              <tr>
                <td>Netflix</td>
              </tr>
            </tbody>
          </table>

          <div className='pagination'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </div>
      <div className='content_right'>
        <Calendar
          value={selectDay}
          onChange={valuesChange}
          calendarClassName='calender_content'
          calendarTodayClassName='current_day'
          calendarSelectedDayClassName='selected_day'
          colorPrimary='#081A51'
          shouldHighlightWeekends
          renderFooter={renderFooterCalendar}
        />

        <div className='content_date_reminder'>
          <div className='item_date_reminder'>
            <span>{selectDay.day}</span>
            <p>Pagamento para o cartao da nubank</p>
          </div>
        </div>
      </div>
    </div>
  )
}