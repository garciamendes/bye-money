// React
import React from 'react'

// Third party
import {
  Grid,
  GridColumn,
  Header,
  Icon,
  List,
  Loader,
  Table
} from 'semantic-ui-react'
import { isEmpty } from 'lodash'
import { FiSearch } from 'react-icons/fi'

// Project
import { sizeIcon } from '../../routes'

// Local
import { ITableBody, ITablebodyProps } from './types'

const Body = ({ colSpan, children, }: ITableBody) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell colSpan={colSpan}>
        {children}
      </Table.Cell>
    </Table.Row>
  </Table.Body>
)

export const TableBody = ({
  colSpan,
  isLoading,
  icon,
  header,
  subheader,
  search,
  data,
  action,
  children,
  sizeICons = sizeIcon,
}: ITablebodyProps) => {

  if (isLoading)
    return (
      <Body colSpan={colSpan}>
        <Loader active inline='centered'  />
      </Body>
    )

  if (isEmpty(data.results)) {

    if (isEmpty(search))
      return (
        <Body colSpan={colSpan}>
          <Grid>
            <Grid.Row centered columns={2}>
              <Grid.Column textAlign='center'>
                <Header as='h2' icon>
                  {icon ? icon :
                    <>
                      <FiSearch size={sizeICons} />
                    </>
                  }
                  <Header.Content>
                    {header ? header : <span>Nenhum registro encontrado</span>}
                    <Header.Subheader>{subheader}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>
            {!isEmpty(action) && (
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign='center'>
                  {action}
                </Grid.Column>
              </Grid.Row>
            )}
          </Grid>
        </Body>
      )

    return (
      <Body colSpan={colSpan}>
        <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign='center'>
              <Header as='h2'>
                <Icon name='search' />
                <Header.Content>
                  <span>{`Sua pesquisa ${search} não encontrou nenhum registro correspondete`}</span>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <GridColumn>
              <List>
                <List.Item>
                  <List.Content>
                    <List.Header><span>Sugestões:</span></List.Header>
                    <List.List as='ul'>
                      <List.Item as='li'>
                        <span>Certifique-se de que todas as palavras estejam escritas corretamente</span>
                      </List.Item>
                      <List.Item as='li'><span>Tente palavras-chave diferentes</span></List.Item>
                      <List.Item as='li'><span>Tente palavras-chave mais genéricas</span></List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Body>
    )
  }

  return (
    <Table.Body>
      {children}
    </Table.Body>
  )
}