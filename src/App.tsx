import { useState } from 'react';
import * as C from './app.styles'
import { AddArea } from './components/AddArea';
import { ListItem } from './components/Listitem';
import { Item } from './types/Item'

const App = () => {
const[list, setList] = useState<Item[]>([
  { id: 1 , name: 'Comprar Pão' , done: true},
  { id: 2 , name: 'Colocar Comida Pro Coelho' , done: false}
]);

const HandleAdd = (taskName: string) => {
  let newList = [...list]
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false  
  })

  setList(newList)
}

  return (
    
<C.Container>
  <C.Area>
    <C.Header>Lista De Tarefas</C.Header>
    <AddArea onUptade={HandleAdd}/>
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