import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Wrap, WrapItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { projectData } from '../../data/projectData';
import ProjectCard from '../../components/Projects/ProjectCard';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import BackButton from './BackButton';

const ProjectsPage = () => {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Your existing content */}
            <BackButton />
            <ColorModeSwitcher
                top={0}
                right={8}
                position={'absolute'}
            />
            <Center pb={0} mt={10}>
                <Breadcrumb
                    spacing='8px'
                    mb={8}
                    fontSize={30}
                    separator={<ChevronRightIcon color='gray.500' />}
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#/projects'>Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>
            <Wrap spacing='20px' justify='center' pb={0}>
                {
                    projectData.map((data, i) => (
                        <WrapItem p={5} key={i}>
                            <ProjectCard
                                name={data['name'] || ''}
                                type={data['type'] || ''}
                                id={data['id'] || ''}
                                tags={data['tags'] || []}
                                imageSrc={data['imageSrc'] || ''}
                                description={data['description'] || ''} 
                                headerLink={''}
                            />
                        </WrapItem>
                    ))
                }
            </Wrap>
            <div />
        </div>
    )
}

export default ProjectsPage;
