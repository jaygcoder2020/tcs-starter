import { Meta } from '@tcs/layouts/Meta';
import { Main } from '@tcs/templates/Main';

const Credits = () => {
  return (
    <Main
      meta={
        <Meta
          title="Tech Career Shifter Philippines - Credits"
          description="Starter project for Tech Career Shifter Philippines. Typescript/Next.js/TailwindCSS. We thank these people and organizations for making this possible"
        />
      }
    >
      <h1>Credits</h1>
      <ul>
        <li>
          Baseline template: Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        </li>
      </ul>
    </Main>
  );
};

export default Credits;
