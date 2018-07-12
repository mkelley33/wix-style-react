import React from 'react';
import {Container, Row, Col, Card} from '../../src/Grid';
import styles from './ExampleGrid.scss';

import TextField from '../../src/TextField';
import Input from '../../src/Input';
import Label from '../../src/Label';
import {Add, ChevronDown} from 'wix-style-react/new-icons';
import Tooltip from '../../src/Tooltip';

function renderStandardInput() {
  return (
    <TextField>
      <Label
        for="textField"
        >
        Text Field
      </Label>
      <Input
        id="textField"
        placeholder="Default text goes"
        />
    </TextField>
  );
}

export default () =>
  <div data-hook="card-example" className={styles.exampleContainer}>
    <Container>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={6}>
              <Card>
                <Card.LinkHeader linkTo="http://www.wix.com/" linkTitle="Link to Wix" title="Card with link"/>
                <Card.Content>
                  <Row>
                    <Col span={12}>
                      {renderStandardInput()}
                    </Col>
                  </Row>
                </Card.Content>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Card.LinkHeader
                  tooltip={<Tooltip placement="top" alignment="center" content="Hi there!"/>}
                  title="Card header"
                  linkTo="http://www.wix.com/"
                  linkTitle="Tooltip link!"
                  subtitle="Subtitle"
                  />
                <Card.Content>
                  <Row>
                    <Col span={6}>
                      {renderStandardInput()}
                    </Col>
                  </Row>
                </Card.Content>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Card>
                <Card.ButtonHeader
                  withNewIcons
                  title="Card header" buttonOnClick={() => {
                    alert('Clicked!');
                  }}
                  buttonPrefix={<Add/>}
                  buttonTitle="Click Me!"
                  />
                <Card.Content>
                  <Row>
                    <Col span={12}>
                      {renderStandardInput()}
                    </Col>
                  </Row>
                </Card.Content>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Card.ButtonHeader
                  withNewIcons
                  title="Card header" buttonOnClick={() => {
                    alert('Clicked!');
                  }}
                  theme="fullblue"
                  buttonSuffix={<ChevronDown/>}
                  buttonTitle="Click Me!"
                  />
                <Card.Content>
                  <Row>
                    <Col span={6}>
                      {renderStandardInput()}
                    </Col>
                  </Row>
                </Card.Content>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Row>
            <Card>
              <Card.ButtonHeader
                title="Card header" subtitle="Card subtitle" buttonOnClick={() => {
                  alert('Clicked!');
                }} buttonTitle="Click Me!"
                   />
              <Card.Content>
                <Row>
                  <Col span={6}>
                    {renderStandardInput()}
                  </Col>
                  <Col span={6}>
                    {renderStandardInput()}
                  </Col>
                </Row>
              </Card.Content>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.ButtonHeader
                withNewIcons
                withoutDivider title="Header" subtitle="No divider" buttonOnClick={() => {
                  alert('Clicked!');
                }}
                theme="fullblue"
                buttonPrefix={<ChevronDown/>}
                buttonTitle="Click Me!"
                />
              <Card.Content>
                <Row>
                  <Col span={6}>
                    {renderStandardInput()}
                  </Col>
                  <Col span={6}>
                    {renderStandardInput()}
                  </Col>
                </Row>
              </Card.Content>
            </Card>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card>
            <Card.ButtonHeader
              withNewIcons
              tooltip={<Tooltip placement="top" alignment="center" content="Hi there!"/>}
              title="Card header no content"
              buttonOnClick={() => {
                alert('Clicked!');
              }}
              buttonPrefix={<Add/>}
              buttonTitle="Tooltip button!"
              />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Card.ButtonHeader
              withNewIcons
              withoutDivider title="Card header no content" subtitle="No divider" buttonOnClick={() => {
                alert('Clicked!');
              }}
              buttonPrefix={<ChevronDown/>}
              buttonTitle="Click Me!"
              />
          </Card>
        </Col>
      </Row>
    </Container>
  </div>;
