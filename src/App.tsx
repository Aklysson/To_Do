import { useState } from 'react';
import * as C from './app.styles'
import { ListItem } from './components/Listitem';
import { Item } from './types/Item'

const App = () => {
const[list, setList] = useState<Item[]>([
  { id: 1 , name: 'Comprar Pão' , done: false},
  { id: 2 , name: 'Comprar Pão doce' , done: false}
]);

  return (
    
<C.Container>
  <C.Area>
    <C.Header>Lista De Tarefas</C.Header>

    {
      list.map((item,index)=>(
        <ListItem key={index} item={item}/>
      ))
    }
  </C.Area>
</C.Container>
  )
}

export default App;