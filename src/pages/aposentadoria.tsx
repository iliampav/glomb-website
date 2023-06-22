import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';

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
      subTitle={<>A Revisão da Vida Toda permite <strong>aumentar o valor</strong> de milhares de aposentadorias e pensões e, ainda cobrar uma <strong>indenização</strong> pelas diferenças dos últimos 5 anos.</>}
      buttonText="Quero ser atendido"
      buttonLink="/"
      advantages={["Sem compromisso", "100% on-line", "Atendimento especializado"]}
      headerDesktop='/assets/images/aposentadoria/headerPerson.png'
      headerMobile='/assets/images/aposentadoria/headerPersonMobile.png'
    />

    <FormsTopics 
      firstTitle="Poupe seu tempo" 
      firstSubTitle="Avaliamos seu caso sem compromisso e indicamos a melhor forma de conquistar seus direitos."
      secondTitle="Resolva sua necessidade"
      secondSubTitle="Nossos advogados especialistas entrarão em contato para atendê-lo e indicar a melhor solução."
      thirdTitle="Conquiste seus direitos"
      thirdSubTitle="Conte com nossa experiência de 45 anos e descubra se você tem direito a revisão da vida toda."
    />
    
  </>
  )
}

export default Aposentadoria