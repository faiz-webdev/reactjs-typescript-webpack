import "./styles.css";
import image from './cover.jpg';
import logoSvg from './react.svg';
import ClickCounter from "./ClickCounter";

export const App = () => {
    return <>
        <h1>Hello React Typescript Webpack Starter Template - {process.env.NODE_ENV} - {process.env.name}</h1>
        <img src={image} alt="logo" height={300} width={200} />
        <img src={logoSvg} alt="logo" height={300} width={200} />

        <ClickCounter />
    </>
}