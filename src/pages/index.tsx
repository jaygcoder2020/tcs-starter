import { Meta } from '@tcs/layouts/Meta';
import { Main } from '@tcs/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Tech Career Shifter Philippines - Starter Project (Typescript)"
          description="Starter project for Tech Career Shifter Philippines. Typescript/Next.js/TailwindCSS"
        />
      }
    >
      <h1 className="text-blue-100">
        A starter for the TCS PH community, using a real-world baseline.
      </h1>
    </Main>
  );
};

export default Index;
