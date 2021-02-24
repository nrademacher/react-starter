import { globalStyles } from "./components/globalStyles";
import HelloWorld from "./components/HelloWorld";
import app, { helloWorld } from "./app";

helloWorld();

document.body.append(HelloWorld());
