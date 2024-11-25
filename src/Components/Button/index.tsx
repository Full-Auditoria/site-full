import { ContainerButton } from './style'

interface ButtonProps {
    text: string;
    onClick?: () => void;
    url: string
}

const Button = ({ text, url }: ButtonProps) => {
    const handleClick = () => {
        if (url) {
            window.location.href = url; 
        }
    };

    return (
        <ContainerButton>
            <button onClick={handleClick}>{text}</button>
        </ContainerButton>
    );
};

export default Button;