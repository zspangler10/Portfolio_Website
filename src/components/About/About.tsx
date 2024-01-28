import { FC } from 'react';
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import headshot from '../../media/headshot.jpg'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About Me</Heading>
                    </Fade>
                    <Stack position='relative' alignItems='center' direction={['column', 'row']} textAlign={{base: 'left',  sm: 'justify', lg: 'left'}}>
                        <Image
                            borderRadius='full'
                            boxSize='180px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Zach and I'm an aspiring <b>Project Manager</b> with a passion for <b>Data Analytics</b> and all things technology!
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I hold a Bachelor of Business Administration in <b>Project Management</b> from Liberty University, and I'm a certified <b>Project Management Professional (PMP)</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        Over the course of my career I've worked on many different projects, ranging from <b>software implementations, data analytics, process improvements, digital & in-person events,</b> and many more!
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced with <b>agile and hybrid</b> project management frameworks and <b>data analysis</b> - particularly with <b>SQL, Power BI, and Python</b>. Recently I've been learning frontend web development through personal projects with <b>ReactJS and Typescript</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🕰️</Center>
                                    <Text>
                                        In my spare time, I enjoy many hobbies: In the winter time, I like to play ice hockey and snowboard the slopes of PA. Throughout the year you can find me building household furniture and working on friends'/family's cars!
                                    </Text>
                                </Flex>
                            </Fade>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    );
};

export default About;