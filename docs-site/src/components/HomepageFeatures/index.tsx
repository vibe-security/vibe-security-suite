import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unified Security Toolkit',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Run code, dependency, and container scans from a single, open-source suite. No more juggling separate tools—Vibe Security Suite does it all.
      </>
    ),
  },
  {
    title: 'Dev & CI/CD Friendly',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Use the CLI locally, automate with GitHub Actions, or run scans in Docker. Integrate security into every stage of your workflow—without friction.
      </>
    ),
  },
  {
    title: 'Open, Extensible, Community-Driven',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        100% open source and built for extensibility. Join our community, contribute features, or adapt Vibe Security Suite to your team’s needs.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
