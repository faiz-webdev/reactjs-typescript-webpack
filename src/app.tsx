import "./styles.css";
import image from './cover.jpg';
import logoSvg from './react.svg';

export const App = () => {
    return <>
        <h1>React Typescript Webpack Starter Template</h1>
        <img src={image} alt="logo" height={300} width={200} />
        <img src={logoSvg} alt="logo" height={300} width={200} />
    </>
}