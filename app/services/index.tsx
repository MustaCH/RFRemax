import { projects } from "../constants"

export const getProperty = (id: string) => {
    const property = projects.find(project => project.id === id); 
    return property;  
  };

