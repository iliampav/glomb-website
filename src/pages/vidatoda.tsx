import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';
import InsideTopics from '../components/insideTopics';
import ImageGalerySlider from '../components/imageGalerySlider';
import PeopleComents from '../components/peopleComents';
import { GetStaticProps } from 'next'

const Aposentadoria: NextPage = () => {
return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="author" content="Iliam Ferreira Pavkovic"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Glomb - O valor da sua aposentadoria pode dobrar</title>
      <meta name="keywords" content="aposentadoria, valor, advogado, aposentado"></meta>
      <meta name="description" content="A Revisão da Vida Toda permite aumentar o valor de milhares de aposentadorias e pensões e, ainda cobrar uma indenização pelas diferenças dos últimos 5 anos."></meta>
    </Head>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="O VALOR DA SUA APOSENTADORIA PODE DOBRAR"
      subTitle={<>Com a Revisão da Vida Toda você pode aumentar o valor de sua aposentadoria ou pensão e receber uma indenização pelas diferenças dos últimos 5 anos. Clique no botão abaixo para descobrir se você tem direito.</>}
      buttonText="Quero ser atendido"
      buttonLink="/"
      advantages={["Sem compromisso", "100% on-line", "Atendimento especializado"]}
      headerDesktop='/assets/images/aposentadoria/headerPerson.png'
      headerDesktopDescription="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
      headerMobile='/assets/images/aposentadoria/headerPersonMobile.jpg'
      headerMobileDescription="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
    />

    <FormsTopics 
      firstTitle="Poupe seu tempo" 
      firstSubTitle="Avaliamos seu caso sem compromisso e indicamos como conquistar seus direitos."
      secondTitle="Resolva sua necessidade"
      secondSubTitle="Nossos advogados especialistas entrarão em contato para atendê-lo e indicar a melhor solução."
      thirdTitle="Conquiste seus direitos"
      thirdSubTitle="Conte com nossa experiência de 45 anos e descubra se você tem direito à revisão da vida toda."
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Você pode ter uma aposentadoria melhor'} 
      text={
        <>
          <p>
            Milhares de aposentados que contribuíram ao INSS antes de 1994, podem estar recebendo uma aposentadoria menor do que deveriam.<br/>
          </p>
          <p>
            Isso acontece porque, para calcular o valor das aposentadorias, o INSS considerava apenas as contribuições feitas após julho de 1994 e excluía todas as anteriores.<br /> 
          </p>
          <p>
            Por esse motivo, o valor dos benefícios de quem se aposentou até novembro de 2019 pode estar mais baixo do que deveria ser.
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'/'} 
      image={'/assets/images/aposentadoria/imageAposentadoMelhor.jpg'} 
      imageDescription={'Aposentada sorrindo pensando na revisão da apolice'} 
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Vantagens da Revisão da Vida Toda'} 
      text={
        <>  
          <p>
            Em dezembro de 2022 o STF aprovou a Revisão da Vida Toda, que tem como objetivo corrigir a injustiça no cálculo nas aposentadorias.
          </p>
          <p>
            Agora é possível considerar todas as contribuições feitas ao longo da vida para recalcular milhares de aposentadorias e pensões.
          </p>
          <p>
            Isso pode refletir em um aumento no valor mensal do seu benefício e indenização pelas diferenças dos últimos 5 anos.
          </p>
        </>
      } 
      buttonText={'Quero ser atendido'} 
      buttonLink={'/'} 
      image={'/assets/images/aposentadoria/vantagemMelhorRevisao.jpg'} 
      imageDescription={'Aposentada sorrindo pensando na revisão da apolice'} 
      invertImagePosition={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Quem tem direito?'} 
      text={<p>Infelizmente não são todas as pessoas que têm esse direito. A Revisão da Vida Toda se aplica apenas aos aposentados e pensionistas que:</p>} 
      listText={[
        'Contribuíram ao INSS antes de 1994 e',
        'Recebem o benefício há menos de 10 anos.'
      ]}
      buttonText={'Quero ser atendido'} 
      buttonLink={'/'} 
      grayBoxText={<>Se você se encaixa nesses requisitos, clique em <strong>quero ser <br/> atendido</strong> e descubra se a revisão da vida toda pode <strong>aumentar o valor</strong> da sua aposentadoria ou pensão.</>}
      image={'/assets/images/aposentadoria/quemTemDireito.jpg'} 
      imageDescription={'Aposentada sorrindo pensando na revisão da apolice'} 
    />
    
    <ImageGalerySlider 
      title={'Transformar vidas por meio da justiça é nosso propósito'} 
      subTitle={['46+ anos de atuação', '25.000+ clientes atendidos']} 
      initialSlideNumber={5}
      carrouselImages={[
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice2.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice3.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice4.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice5.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice6.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice7.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice8.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice9.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice10.jpg',
          imageDescription: ''
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice11.jpg',
          imageDescription: ''
        }
      ]}
    />

    <PeopleComents 
      sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
      clientCardsTitle='O que nossos clientes dizem'
      imageUrl={'/assets/images/aposentadoria/grupoPessoas.png'} 
      imageDescription={'Aposentados e pensionistas felizes'}
      clientsComentCard={[
        {
          title: 'Gratidão pela justiça alcançada',
          text:'Agradeço por transformarem minha vida através da justiça, proporcionando tranquilidade e segurança na defesa dos meus direitos de pensão. O atendimento personalizado e a clareza nas informações foram excepcionais. Sua competência e comprometimento concretizaram meus direitos. Muito obrigada por serem verdadeiros agentes de justiça!',
          starNumber:5,
          clientName:'Jussara Miranda'
        },
        {
          title: 'Muito bem atendida',
          text:'Muito bem atendida pela excelente advogada, Dra. Bruna Stephano, "expert" em direito previdenciário. Super Recomendo',
          starNumber:5,
          clientName:'Doroti Valeixo'
        },
        {
          title: 'Confiança e profissionalismo',
          text:'Sou cliente deste conceituado escritório de advocacia há mais de 20 anos, e sempre fui atendido com muito profissionalismo... Recomendo!',
          starNumber:5,
          clientName:'Tadeu Timowicz'
        },
        {
          title: 'Há mais de 25 anos juntos',
          text:'Atendimento impecável, tratei com os advogados mais experientes da área. Sou cliente do escritório a mais de 25 anos...',
          starNumber:5,
          clientName:'Nilva Carvalho'
        },
        {
          title: 'Rápido e excelente trabalho',
          text:'Gostaria de agradecer o excelente trabalho realizado pela Dra Bruna Stefano... Oprocesso foi concluído com sucesso em um tempo muito bom...',
          starNumber:5,
          clientName:'Daiane Lima'
        },
        {
          title: 'Atendimento excelente',
          text:'Ótimo atendimento com atendimento excelente. Super indico para quem está procurando um serviço de qualidade.',
          starNumber:5,
          clientName:'Gabriela Fialho'
        },
        {
          title: 'Proficionais focados e respeiosos',
          text:'Ótimos profissionais, super respeitosos, focados em atender o cliente com excelência',
          starNumber:5,
          clientName:'Matilde Rodrigues'
        },
      ]}
    />
  </>
  )
}

export default Aposentadoria