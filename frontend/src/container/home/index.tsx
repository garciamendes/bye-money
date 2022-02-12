// React
import React, { useEffect, useState } from 'react'

// Third party
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, Day } from 'react-modern-calendar-datepicker'
import { Button, Divider, Grid, Icon, Input, Table } from 'semantic-ui-react'
import { map } from 'lodash'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsHdd } from 'react-icons/bs'
import CurrencyFormat from 'react-currency-format'

// Project
import { TableBody } from '../../components/Table/tableBody'
import { TableFooter } from '../../components/Table/tableFooter'

// Local
import './home.scss'

// Preview
import api from '../../API.json'
import { Loader } from '../../components/Loader'

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
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  })

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

  const renderValuePrice = (value: string) => {
    return (
      <CurrencyFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        format={value.length >= 6 ? 'R$ #.###,##' : 'R$ #,##'}
        prefix={'R$'}
      />
    )
  }

  const renderTable = () => {
    return map(api.results, (item) => {
      return (
        <Table.Row
          key={item.id}
        >
          <Table.Cell width='3'>
            {item.name ? <p>{item.name}</p> : <p>Indisponivel</p>}
          </Table.Cell>
          <Table.Cell width='3'>
            {item.totalValue ? <p>R$ {item.totalValue}</p> : <p>Indisponivel</p>}
          </Table.Cell>
          <Table.Cell width='3'>
            {item.installmentValue ? <p>R$ {item.installmentValue}</p> : <p>Indisponivel</p>}
          </Table.Cell>
          <Table.Cell width='3'>
            {item.purchaseDate ? <p>{item.purchaseDate}</p> : <p>Indisponivel</p>}
          </Table.Cell>
          <Table.Cell width='3'>
            {item.format ? <p>{item.format}</p> : <p>Indisponivel</p>}
          </Table.Cell>
          <Table.Cell width='3'>
            {(item.currentInstallment && item.totalInstallment) ?
              <>
                <span className='current_installment'>{item.currentInstallment}</span>
                /
                <span className='total_installment'>{item.totalInstallment}</span>
              </>
              :
              <p>Indisponivel</p>}
          </Table.Cell>
          <Table.Cell width='2' />
          <Table.Cell width='1' className='action-cell'>
            <FiEdit size={15} />
          </Table.Cell>
          <Table.Cell width='1' className='action-cell'>
            <RiDeleteBinLine size={15} />
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  if (isLoading) {
    return (
      <div className='container_isLoading'>
        <Loader children={'Carregando...'} />
      </div>
    )
  }

  return (
    <div className='container_main_home'>
      <div className='content_left'>
        <div className='container_info_status_money'>
          <div className='container_price'>
            <span className='title_price'>Total bruto</span>
            <span className='price'>{renderValuePrice('256000')}</span>
          </div>

          <div className='container_price'>
            <div className='inss'>
              <span className='title_price'>INSS</span>
              <span className='price'>{renderValuePrice('877')}</span>
            </div>
            <span className='divider' />
            <div className='income_tax'>
              <span className='title_price'>Imposto de renda</span>
              <span className='price'>{renderValuePrice('750')}</span>
            </div>
          </div>

          <div className='container_price'>
            <span className='title_price'>Total líquido</span>
            <span className='price'>{renderValuePrice('230000')}</span>
          </div>

        </div>

        <div className='container_table'>
          <div className='search-bar-container'>
            {/* <ModalFilters /> // TODO: Pensa os campos e layout */}
            <Input
              icon='search'
              iconPosition='left'
              name='search'
              className='i-search-bar'
              placeholder='Procurar pelo nome'
              transparent />

            <Button circular type='submit' className='i-search-btn'>
              Buscar
            </Button>
          </div>

          <Grid.Row className='table-content'>
            <Grid.Column className='grid'>
              <Table className='table'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Nome</Table.HeaderCell>
                    <Table.HeaderCell>Valor total</Table.HeaderCell>
                    <Table.HeaderCell>Valor da parcela</Table.HeaderCell>
                    <Table.HeaderCell>Data da compra</Table.HeaderCell>
                    <Table.HeaderCell>Formato</Table.HeaderCell>
                    <Table.HeaderCell>Parcelamento</Table.HeaderCell>
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <TableBody
                  colSpan={7}
                  data={api}
                  isLoading={isLoading}
                  search={search}
                  icon={<BsHdd size={30} />}
                  header={'Nenhum item cadstrado'}
                >
                  {renderTable()}
                </TableBody>

                <TableFooter
                  colSpan={7}
                  data={api}
                  className='footer-highlight'
                />
              </Table>
            </Grid.Column>
          </Grid.Row>

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
    </div >
  )
}