import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'High-Torque Mechanics',
    img: '/img/high_torque_arm_robot_icon.png',
    description: (
      <>
        Powered by NEMA 23 and NEMA 17 stepper motors with 70:1 planetary gearboxes 
        for maximum precision and payload capacity.
      </>
    ),
  },
  {
    title: 'Professional Aesthetics and Infinite Rotation',
    img: '/img/proffesional_aestetics.png',
    description: (
      <>
        No visible wires on the arm, due to the use of slip rings for continuous rotation and a clean, modular design.
      </>
    ),
  },
  {
    title: 'Budget-Friendly',
    img: '/img/budget_friendly.png',
    description: (
      <>
        All components are off-the-shelf and cost under $1000, making high-precision robotics accessible to everyone.
      </>
    ),
  },
];

function Feature({img, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* If there is an img path, use <img>. Otherwise, use <Svg> */}
        {img ? (
          <img src={img} className={styles.featureSvg} alt={title} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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