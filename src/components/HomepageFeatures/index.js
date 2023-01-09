import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Vision',
    description: (
      <>
        Our goal is to become a global open source leader in geospatial
        imaging processing and analysis for any activity that contributes
        to having a better planet for all human beings.
      </>
    ),
  },
  {
    title: 'Our Mission',
    description: (
      <>
        Develop open source solutions for geospatial data processing tha supports
        data driven decision-making processes for managers in the constructions, operation and
        maintenance of any renewable energy power generation plants and agricultural crops in any of
        its stages and in this way helping our customers and parners to improve their production and
        sustainability by using our tools.
      </>
    ),
  },
  {
    title: 'Our Community',
    description: (
      <>
        Our community work with each other to advance the interests of the free culture movement.
        Everyone is invited to join. No matter what your skills are, we believe that all contributors
        should be excellent to each other. We treat ourselves as equals with respect and empathy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
        <div className="row">
          <div className={clsx('col col--12')}>
            <div className="text--center padding-horiz--md">
              <h3>Leadership and Governance</h3>
              <p>
                  As in any large project, there are many different levels of responsibility, accountability, and decision-making.
                  And as such, the maintainers give their free time to build and maintain the source code held within. They make the
                  code freely available in the hope that it will be of use to other developers. It would be extremely unfair for them
                  to suffer abuse or anger for their hard work. It's the duty of the maintainer to ensure that all submissions to the project
                  are of sufficient quality to benefit the project. Many developers have different skillsets, strengths, and weaknesses.
                  Respect the maintainer's decision, and do not be upset or abusive if your submission is not used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
