import ProjectCard from '~/components/ProjectCard/ProjectCard';
import Text from '~/components/Text/Text';
import AppLayout from '~/layouts/AppLayout';

export default function Index() {
  return (
    <main className="home">
      <AppLayout>
        <div className="home__content">
          <div className="home__header">
            <Text tag="h1" className="home__title">
              Hi, I'm Slobodan Ostojic
            </Text>
            <Text tag="h4" className="home__subtitle">
              I'm a web developer specializing in Frontend technologies
            </Text>
          </div>
          <div className="home__projects">
            <Text tag="h2" className="home__section-title">
              My Projects
            </Text>
            <div className="home__projects-container">
              <ProjectCard
                title="Vrata Jadrana"
                description="Website where users can apply for seasonal jobs. Jobs are paginated and every job has it's own single view where the user can fill the required information. Provided information will be delivered to client's email address."
                technologiesUrls={[
                  '/assets/icons/typescript.svg',
                  'https://avatars.githubusercontent.com/u/64235328?s=200&v=4',
                  '/assets/icons/prisma.svg',
                  '/assets/icons/mongodb.svg',
                ]}
                demoUrl="http://jadran-doors-vercel.vercel.app/"
              />
              <ProjectCard
                title="Educons Practices"
                description="Website made for students of the university. There is a page with students where their portfolios can be seen. There is a newsletter feature where users can get latest newsletter notifications to their email address. Students can be searched by name or studies they attend."
                technologiesUrls={[
                  '/assets/icons/javascript.svg',
                  '/assets/icons/react-icon.svg',
                  '/assets/icons/redux.svg',
                  '/assets/icons/nodejs-icon.svg',
                  '/assets/icons/expressjs-icon.svg',
                  '/assets/icons/mongodb.svg',
                ]}
                demoNotAvailable
              />
              <ProjectCard
                title="Adventuro"
                description="Practice project where I created a website for a fictional travel company. Users are able authenticate, book a travel, and select travel categories that they would like to see."
                technologiesUrls={[
                  '/assets/icons/javascript.svg',
                  '/assets/icons/react-icon.svg',
                  '/assets/icons/redux.svg',
                  '/assets/icons/firebase.svg',
                  '/assets/icons/stripe.svg',
                ]}
                demoUrl="https://adventuro-39e3f.web.app/"
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </main>
  );
}
