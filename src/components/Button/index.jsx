import {ButtonColor} from './style.js';

const Button = ({titleButton, type='submit', primary, secondary, tertiary, ...rest}) => {
    return (
        <div>
            {primary && (<ButtonColor primary {...rest}>{titleButton}</ButtonColor>)}
            {secondary && (<ButtonColor secondary>{titleButton}</ButtonColor>)}
            {tertiary && (<ButtonColor tertiary>{titleButton}</ButtonColor>)}
        </div>
    )
}
export default Button;