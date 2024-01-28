import { FC } from 'react';
import {
    Container,
    VStack,
    Stack,
    Heading,
    StackDivider,
    useColorModeValue,
    Box
} from '@chakra-ui/react'
import {
    SiHtml5,
    SiPython,
    SiReact,
    SiTypescript,
    SiMysql,
    SiVisualstudiocode,
    SiPostgresql,
    SiPowerbi,
    SiJavascript
} from 'react-icons/si';
import { RiFileExcel2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { BiTransfer } from "react-icons/bi";
import { AiOutlineTeam } from 'react-icons/ai';
import { Element } from 'react-scroll';
import { FaLaptopCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaConfluence } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import Fade from 'react-reveal/Fade';
import SkillSection from './SkillSection';
import SkillItem from './SkillItem';
import Card from '../generics/Card';

const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.5} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Skills</Heading>
                    </Fade>
                    <Fade bottom cascade duration={500}>
                        <Box>
                            <Stack direction={'row'}>
                                <Card>
                                    <Stack
                                        direction={['column', 'row']}
                                        spacing={8}
                                        align={'flex-start'}
                                    >
                                        <SkillSection title={'Project Management'}>
                                            <SkillItem icon={AiOutlineTeam} name='Communication Management' />
                                            <SkillItem icon={BiError} name='Risk Management' />
                                            <SkillItem icon={BiTransfer} name='Change Management' />
                                            <SkillItem icon={FaLaptopCode} name='Technical Liasing' />
                                            <SkillItem icon={FaProjectDiagram} name='Microsoft Project' />
                                            <SkillItem icon={FaConfluence} name='Confluence' />
                                            <SkillItem icon={SiJira} name='Jira' />
                                        </SkillSection>
                                    </Stack>
                                </Card>
                                <Card>
                                    <Stack
                                        direction={['column', 'row']}
                                        divider={
                                            <StackDivider borderColor={useColorModeValue('gray.300', 'gray.600')} />
                                        }
                                        spacing={8}
                                        align={'flex-start'}
                                    >
                                        <SkillSection title={'Data Analysis'}>
                                            <SkillItem icon={SiMysql} name='MySQL' />
                                            <SkillItem icon={SiPostgresql} name='PostgreSQL' />
                                            <SkillItem icon={SiPowerbi} name='Power BI' />
                                            <SkillItem icon={RiFileExcel2Fill} name='Excel' />
                                            <SkillItem icon={SiPython} name='Python' />
                                        </SkillSection>
                                        <SkillSection title={'Web Dev'}>
                                            <SkillItem icon={SiHtml5} name='HTML/CSS' />
                                            <SkillItem icon={SiJavascript} name='Javascript' />
                                            <SkillItem icon={SiReact} name='React' />
                                            <SkillItem icon={SiTypescript} name='Typescript' />
                                            <SkillItem icon={SiVisualstudiocode} name='VS Code' />
                                        </SkillSection>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Box>
                    </Fade>
                </VStack>
            </Container>
        </Element>
    );
};

export default Skills;