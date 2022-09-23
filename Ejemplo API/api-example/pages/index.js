import MainComponent from "../components/MainComponent";

export default  function Home(props){
  return (
    <div>
      <MainComponent listaDePalabras = {props.lista}></MainComponent>
    </div>
    )
}


export async function getServerSideProps(context){

  let listaDePalabras =  await fetch("http://localhost:3000/api/palabras")
  let response = await listaDePalabras.json()
  
  return {
    props: {
      lista: response
    }, // will be passed to the page component as props
  }
}

