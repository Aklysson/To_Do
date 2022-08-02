import { useState , KeyboardEvent } from 'react'
import * as C from './style'

type Props = {
    onUptade: (taskName: string) => void
}

export const AddArea =({onUptade}:Props) => {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
        onUptade(inputText);
        setInputText('');
     }
    } 


    return (
        <C.Container>
            <div className="img">✚</div>
            <input 
            type="text"
            placeholder='Adicionar Uma Tarefa'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp} 
            />
        </C.Container>
    );
}