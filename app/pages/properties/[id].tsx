import { useRouter } from 'next/router';
import { projects } from '../../constants';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IProjectType } from '@/app/types';

interface ProjectProps {
  project: IProjectType;
}

const ProjectPage = ({ project }: ProjectProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Precio: ${project.price.price}</p>
      <img src={project.images[0]} alt={project.title} style={{ width: '100%', height: 'auto' }} />
      <div>
        <p>{project?.location?.province} / {project?.location?.city} / {project?.location?.hood}</p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((project) => project.id === params?.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return { props: { project } };
}

export default ProjectPage;
