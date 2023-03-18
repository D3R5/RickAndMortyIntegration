import Card from '../Card/Card';
import { CardContainer } from './styledComponents';
import {TextContainer} from './styledComponents';

export default function Cards({ characters, onClose }) {
    //puedo poner dentro del parentesis {characters} y es lo mismo que el const
    //const {characters} = props;
    return (
        <CardContainer>
        {characters.map(({ id, name, species, gender, image }) => {
        return (
            <div>
                <TextContainer>
                I'M PICKLE RICK!
                </TextContainer>
            <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                onClose={onClose}
            />
            </div>
            );
        })}
        </CardContainer>
    );
} 