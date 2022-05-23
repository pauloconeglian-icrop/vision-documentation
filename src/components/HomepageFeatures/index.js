import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Solução exclusiva',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Com uma solução híbrida, o módulo de umidade orbital que concilia sensor ótico + radares de satélite é possível  checar a umidade do solo semanalmente, mesmo à distância.
      </>
    ),
  },
  {
    title: 'Recomendação ​​​​​​​de irrigação',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Com visão para os próximos 7 dias, permite que o produtor realize a <strong>programação de irrigação</strong> conciliada a previsão de chuva.
      </>
    ),
  },
  {
    title: 'Diagnóstico remoto de pivôs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Através da checagem remota de uniformidade de aplicação da água, é possível  visualizar cada anel do pivô diretamente no mapa da fazenda, além de gerar relatórios de histórico de uniformidade de cada equipamento da propriedade.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
      </div>
    </section>
  );
}
