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
        </div>
      </AppLayout>
    </main>
  );
}
