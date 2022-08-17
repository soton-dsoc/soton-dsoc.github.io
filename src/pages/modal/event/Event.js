import React from 'react';
import { Button, Group, Card, Container, Grid, Badge, Paper, Title, Text, Space, TypographyStylesProvider, Image, List } from '@mantine/core';
import { ModalWrapper, TitleWrapper } from './styles';
import { ReactComponent as ArrowRight } from './arrow_right.svg'

class EventModal extends React.Component {
    render() {
        return (
            <Group direction='column' grow>
                <TitleWrapper>
                    <Title order={2} align='left'>Blockchain 101</Title>
                </TitleWrapper>
                <Space h="lg" />
                <Grid gutter={30}>
                    <Grid.Col md={12} lg={8}>
                        <Group direction='column' grow>
                            <Text align="left">
                                <TypographyStylesProvider>
                                    <p>
                                        Whether you have worked with decentralised tools in the past or you have never heard the term blockchain before, our workshops are aimed at everyone! Their purpose is to educate the general public on this field and introduce them to the decentralised world.
                                    </p>
                                    <p>
                                        They will hopefully increase your interest and motivation in these technologies and help you develop some projects in the future.
                                    </p>
                                </TypographyStylesProvider>
                            </Text>
                            <Space h="lg" />
                            <Grid>
                                <Grid.Col md={12} lg={6}>
                                    <Image
                                        radius="xs"
                                        src='https://images.unsplash.com/photo-1640622842924-fb0017b9d786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
                                        alt='old pics'
                                    />
                                </Grid.Col>
                                <Grid.Col md={12} lg={6}>
                                    <Image
                                        radius="xs"
                                        src='https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                                        alt='old pics'
                                    />
                                </Grid.Col>
                            </Grid>
                            <Space h="lg" />
                            <Grid>
                                <Grid.Col span={1}>
                                    <Button
                                        variant='white'>
                                        Register
                                    </Button>
                                </Grid.Col>
                            </Grid>
                        </Group>
                    </Grid.Col>
                    <Grid.Col md={12} lg={4}>
                        <Group direction='column' styles="text-align: right">
                            <Group direction='column'>
                                <Title order={3} align='left'>When and Where</Title>
                                <Text align='left'>
                                    February 8th @ 18:00 <br />
                                    Physics buildng 46 / 2003
                                </Text>
                            </Group>
                            <Group direction='column'>
                                <Title order={3} align='left'>Organisers</Title>
                                <Text align='left'>
                                    Me <br />
                                    You  <br />
                                    Your mum
                                </Text>
                            </Group>
                            <Group direction='column'>
                                <Title order={3} align='left'>Guests</Title>
                                <Text align='left'>
                                    Me <br />
                                    You
                                </Text>
                            </Group>
                            <Group direction='column'>
                                <Title order={3} align='left'>Objectives</Title>
                                <Text align="left">
                                    <List
                                        spacing="xs">
                                        <List.Item>Understand blockchain</List.Item>
                                        <List.Item>Interact with sample chain</List.Item>
                                        <List.Item>Understand how web3 works</List.Item>
                                        <List.Item>Interact with real life decentralised application (dApp) to purchase NFT</List.Item>
                                    </List>
                                </Text>
                            </Group>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Group>
        )
    }
}

export default EventModal;
