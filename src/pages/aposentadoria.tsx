import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';

const Aposentadoria: NextPage = () => {
return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="author" content="Iliam Ferreira Pavkovic"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <meta name="keywords" content=""></meta>
      <meta name="description" content=""></meta>
    </Head>

    <StaticBanner 
      title="O VALOR DA SUA APOSENTADORIA PODE DOBRAR"
      subTitle="A Revisão da Vida Toda permite <strong>aumentar o valor</strong> de milhares de aposentadorias e pensões e, ainda cobrar uma <strong>indenização</strong> pelas diferenças dos últimos 5 anos."
      buttonText="Quero ser atendido"
      buttonLink="/"
      advantages={["Sem compromisso", "100% on-line", "Atendimento especializado"]}
    />
    
  </>
  )
}

export default Aposentadoria