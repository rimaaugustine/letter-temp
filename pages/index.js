
import Question from '../components/questions'
import Head from 'next/head'


const Index = () => {

return(
<div>
    <Head>
      <title>A Letter</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet"/>
      <link rel="stylesheet" href="static/style.css" />
    </Head>
    
    <Question className="text"/>
    
 
    
</div>)
}
export default Index