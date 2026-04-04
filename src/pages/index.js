import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/motivation">
            Read the Build Manual
          </Link>
        </div>
      </div>
    </header>
  );
}

// 1. New Component for the YouTube Video
function ProjectOverviewVideo() {
  return (
    <section className="padding-vert--xl" style={{ backgroundColor: 'var(--ifm-color-emphasis-100)' }}>
      <div className="container text--center">
        <Heading as="h2" style={{ marginBottom: '2rem' }}>Project Overview</Heading>
        {/* Container to enforce the 16:9 aspect ratio and maximum width */}
        <div style={{ maxWidth: '800px', margin: '0 auto', aspectRatio: '16/9' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gRGoBV__nzw"
            title="7-DoF Robotic Arm Project Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Official documentation and build log for the 7-DoF high-precision robotic arm.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* 2. Call the new video component directly under the features */}
        <ProjectOverviewVideo />
      </main>
    </Layout>
  );
}