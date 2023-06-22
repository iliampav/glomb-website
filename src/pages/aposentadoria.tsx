import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';
import InsideTopics from '../components/insideTopics';

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

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="O VALOR DA SUA APOSENTADORIA PODE DOBRAR"
      subTitle={<>A Revisão da Vida Toda permite <strong>aumentar o valor</strong> de milhares de aposentadorias e pensões e, ainda cobrar uma <strong>indenização</strong> pelas diferenças dos últimos 5 anos.</>}
      buttonText="Quero ser atendido"
      buttonLink="/"
      advantages={["Sem compromisso", "100% on-line", "Atendimento especializado"]}
      headerDesktop='/assets/images/aposentadoria/headerPerson.png'
      headerDesktopDescription="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
      headerMobile='/assets/images/aposentadoria/headerPersonMobile.png'
      headerMobileDescription="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
    />

    <FormsTopics 
      firstTitle="Poupe seu tempo" 
      firstSubTitle="Avaliamos seu caso sem compromisso e indicamos a melhor forma de conquistar seus direitos."
      secondTitle="Resolva sua necessidade"
      secondSubTitle="Nossos advogados especialistas entrarão em contato para atendê-lo e indicar a melhor solução."
      thirdTitle="Conquiste seus direitos"
      thirdSubTitle="Conte com nossa experiência de 45 anos e descubra se você tem direito a revisão da vida toda."
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Quem tem direito?'} 
      text={'A Revisão da Vida Toda se aplica aos Aposentados e Pensionistas que:'} 
      listText={[
        'Contribuíram com valores altos antes de 07/1994 e, após essa data, tiveram contribuições mais baixas;',
        'Tiveram muitas contribuições antes de 07/1994 e, após essa data, tiveram poucas contribuições.'
      ]}
      buttonText={'Quero ser atendido'} 
      buttonLink={'/'} 
      grayBoxText={<>A Revisão da Vida Toda se aplica apenas aos aposentados ou pensionistas que estejam recebendo o benefício há <br /><strong>menos de 10 anos.</strong></>}
      image={'/assets/images/aposentadoria/quemTemDireito.png'} 
      imageDescription={'Aposentada sorrindo pensando na revisão da apolice'} 
    />
    
  </>
  )
}

export default Aposentadoria