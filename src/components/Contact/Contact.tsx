import { FC } from 'react';
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Card from '../generics/Card';

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Contact Me</Heading>
                    </Fade>
                    <Flip bottom>
                        <Card
                            maxW={'85vw'}
                            w={'xl'}
                            pb={8}
                            overflow={'hidden'}
                        >
                            <Flex textAlign={'center'}>
                                <Container w='50%'>
                                    <Link href="mailto:info@zspangler.com">
                                        <Badge colorScheme='green'>Email</Badge>
                                        <Text textDecoration={'underline'}>info@zspangler.com</Text>
                                    </Link>
                                </Container>
                                <Spacer />
                                <Container w='50%'>
                                    <Link href="https://www.linkedin.com/in/zach-spangler-pmp">
                                        <Badge colorScheme='blue'>LinkedIn</Badge>
                                        <Text textDecoration={'underline'}>Zach Spangler</Text>
                                    </Link>
                                </Container>
                            </Flex>
                        </Card>
                    </Flip>
                </VStack>
            </Container>
        </Element>
    );
};

export default Contact;