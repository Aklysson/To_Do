import { Item } from "../../types/Item";
import { Container } from "./style";

type Props = {
    item: Item
}

export function ListItem({item}: Props){
    return (
        <Container>
            {item.name}
        </Container>
    )
}