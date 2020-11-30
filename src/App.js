import './App.css';
import Card from './components/Card';
import HelloUser from './components/HelloUser';
import HelloVar from './components/HelloVar';
import HelloWorld from './components/HelloWorld'
import HelloProps from './components/HelloProps'
import ButtonProps from './components/ButtonProps'
import List from './components/List';

function App() {
  let nameFather = 'Lelouch Lamperouge';

  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld/> */}
        <HelloWorld></HelloWorld>
        <Card></Card>
        <HelloVar></HelloVar>
        <HelloUser></HelloUser>
        <HelloProps name={nameFather}></HelloProps>
        <HelloProps name={'Son Gohan'}></HelloProps>
        <HelloProps name='Carlos Ocelote'></HelloProps>
        <ButtonProps text='Enviar'></ButtonProps>
        <ButtonProps text='Cancelar'></ButtonProps>
        <List list={['Aceitunas', 'Jamon serrano', 'Levadura', 'Limón']}></List>
        
      </header>
    </div>
  );
}

export default App;
