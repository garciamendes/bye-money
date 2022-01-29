// React
import React, { useState } from 'react'

// Third party
import { Button, Modal } from 'semantic-ui-react'
import { FaFilter } from 'react-icons/fa'

export function ModalFilters() {
  // state
  const [isOpenFilterBar, setIsOpenFilterBar] = useState(false)

  return (
    <>
      <Modal
        dimmer='blurring'
        open={isOpenFilterBar}
        onClose={() => setIsOpenFilterBar(false)}
        size='mini'
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setIsOpenFilterBar(false)}>
            Cancelar
          </Button>
          <Button positive onClick={() => setIsOpenFilterBar(false)}>
            Aplicar
          </Button>
        </Modal.Actions>
      </Modal>

      <Button className='btn-filter' onClick={() => setIsOpenFilterBar(true)}>
        <FaFilter color='#FFF' size={16} />
      </Button>
    </>
  )
}