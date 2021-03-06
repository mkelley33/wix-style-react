import React from 'react';
import {Table} from 'wix-style-react/Table';
import {
  TableToolbar,
  ItemGroup,
  Item,
  Label,
  SelectedCount,
  Divider
} from 'wix-style-react/Table/Toolbar';

import Dropdown from 'wix-style-react/Dropdown';
import Search from 'wix-style-react/Search';
import Checkbox from 'wix-style-react/Checkbox';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import {Edit, Duplicate, Upload} from 'wix-style-react/new-icons';
import Highlighter from '../../src/Highlighter/Highlighter';

const createDataSet = setIndex => [
  {id: `${setIndex}-1`, name: `Apple Towels ${setIndex}`, SKU: '111222', price: '$2.00', inventory: 'In stock', collectionId: 1},
  {id: `${setIndex}-2`, name: `Cyan Towels ${setIndex}`, SKU: '222333', price: '$2.00', inventory: 'In stock', collectionId: 1, filterId: 2},
  {id: `${setIndex}-3`, name: `Marble Slippers ${setIndex}`, SKU: '333444', price: '$14.00', inventory: 'In stock', collectionId: 2},
  {id: `${setIndex}-4`, name: `Red Slippers ${setIndex}`, SKU: '444555', price: '$14.00', inventory: 'Out of stock', collectionId: 2, filterId: 1}
];

const allData = [1, 2, 3, 4, 5].reduce((accum, index) => accum.concat(createDataSet(index)), []);

export class TablePageExample extends React.Component {
  state = {
    data: allData,
    collectionId: 0,
    filterId: 0,
    searchTerm: '',
    inStock: false
  }

  renderMainToolbar() {
    const collectionOptions = [
      {id: 0, value: 'All'},
      {id: 1, value: 'Towels'},
      {id: 2, value: 'Slippers'}
    ];

    const filterOptions = [
      {id: 0, value: 'All'},
      {id: 1, value: 'Red'},
      {id: 2, value: 'Cyan'}
    ];

    return (
      <Card>
        <TableToolbar>
          <ItemGroup position="start">
            <Item>
              <Label>
            Product
            <span style={{width: '150px'}}>
              <Dropdown
                options={collectionOptions}
                selectedId={this.state.collectionId}
                onSelect={selectedOption => {
                  this.setState({collectionId: selectedOption.id});
                }}
                roundInput
                />
            </span>
              </Label>
            </Item>
            <Item>
              <Label>
            Color
            <span style={{width: '86px'}}>
              <Dropdown
                options={filterOptions}
                selectedId={this.state.filterId}
                onSelect={selectedOption => this.setState({filterId: selectedOption.id})}
                roundInput
                />
            </span>
              </Label>
            </Item>
            <Item>
              <Checkbox checked={this.state.inStock} onChange={e => this.setState({inStock: e.target.checked})}>
                In Stock only
              </Checkbox>
            </Item>
          </ItemGroup>
          <ItemGroup position="end">
            <Item>
              {this.renderSearch(false)}
            </Item>
          </ItemGroup>
        </TableToolbar>
      </Card>
    );
  }

  renderBulkActionsToolbar(props) {
    return (
      <TableToolbar>
        <ItemGroup position="start">
          <Item>
            <SelectedCount>{`${props.selectedCount} Selected`}</SelectedCount>
          </Item>
        </ItemGroup>
        <ItemGroup position="end">
          <Item layout="button">
            <Button
              withNewIcons
              theme="whiteblueprimary" prefixIcon={<Upload/>}
              onClick={() => window.alert(`Exporting selectedIds=${props.getSelectedIds()}`)}
              >
            Export
          </Button>
          </Item>
          <Item layout="button">
            <Button
              withNewIcons
              theme="whiteblueprimary" prefixIcon={<Duplicate/>}
              onClick={() => window.alert(`Duplicating selectedIds=${props.getSelectedIds()}`)}
              >
            Duplicate
          </Button>
          </Item>
          <Item layout="button">
            <Button
              withNewIcons
              theme="whiteblueprimary" prefixIcon={<Edit/>}
              onClick={() => window.alert(`Editing selectedIds=${props.getSelectedIds()}`)}
              >
            Edit
          </Button>
          </Item>
          <Divider/>
          <Item>
            {this.renderSearch(true)}
          </Item>
        </ItemGroup>
      </TableToolbar>
    );
  }

  renderSearch(expandable) {
    return (<Search
      expandable={expandable}
      onChange={e => {
        this.setState({searchTerm: e.target.value});
      }}
      value={this.state.searchTerm}
      />);
  }

  render() {
    return (
      <div
        style={{
          height: '800px',
          paddingBottom: '16px',
          display: 'flex',
          flexFlow: 'column',
          minWidth: '966px'
        }}
        >
        <Table
          withWrapper={false}
          dataHook="story-table-example"
          data={this.getFilteredData()}
          itemsPerPage={20}
          columns={[
              {title: 'Name', render: row => <Highlighter match={this.state.searchTerm}>{row.name}</Highlighter>, width: '30%', minWidth: '150px'},
              {title: 'SKU', render: row => row.SKU, width: '20%', minWidth: '100px'},
              {title: 'Price', render: row => row.price, width: '20%', minWidth: '100px'},
              {title: 'Inventory', render: row => row.inventory, width: '20%', minWidth: '100px'}
          ]}
          onSelectionChange={selectedIds => console.log('Table.onSelectionChange(): selectedIds=', selectedIds)}
          showSelection
          showLastRowDivider
          >
          <Page>
            <Page.Header title="My Table Title"/>
            <Page.FixedContent>
              <Card>
                <Table.ToolbarContainer>
                  { selectionContext => selectionContext.selectedCount === 0 ?
                      this.renderMainToolbar() :
                      this.renderBulkActionsToolbar(selectionContext)
                  }
                </Table.ToolbarContainer>
                <Table.Titlebar/>
              </Card>
            </Page.FixedContent>
            <Page.Content>
              <Card>
                <Table.Content titleBarVisible={false}/>
              </Card>
            </Page.Content>
          </Page>
        </Table>
      </div>
    );
  }

  getFilteredData() {
    let data = allData;
    if (this.state.collectionId > 0) {
      data = data.filter(row => row.collectionId === this.state.collectionId);
    }
    if (this.state.filterId > 0) {
      data = data.filter(row => row.filterId === this.state.filterId);
    }
    if (this.state.inStock) {
      data = data.filter(row => row.inventory === 'In stock');
    }
    if (this.state.searchTerm !== '') {
      data = data.filter(row => row.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()));
    }
    return data;
  }
}
