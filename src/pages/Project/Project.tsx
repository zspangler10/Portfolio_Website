import { useParams } from "react-router-dom";
import { projectData as allProjectData } from '../../data/projectData';
import { ProjectT } from '../../data/types';
import { useEffect, useState } from "react";
import { Center, Text } from "@chakra-ui/react";
import ProjectContent from "./ProjectContent";
import LoadingIndicator from "./LoadingIndicator";


const Project = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState<ProjectT | null>(null); // Set initial state to null or provide default values

    useEffect(() => {
        const selectedProject = allProjectData.find(project => project.id === id);
        if (selectedProject) {
            setProjectData(selectedProject);
        }
    }, [id]);


    return (
        <>
            {projectData ? (
                Object.keys(projectData).length === 0 &&
                Object.getPrototypeOf(projectData) === Object.prototype ? (
                    <Center>
                        <Text fontSize={60} mt={40}>
                            This project does not exist.
                        </Text>
                    </Center>
                ) : (
                    <ProjectContent projectData={projectData} />
                )
            ) : (
                // Handle the case when projectData is null
                <Center>
                    <LoadingIndicator />
                </Center>
            )}
        </>
    );
    
    
}

export default Project;