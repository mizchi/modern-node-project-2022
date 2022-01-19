import { v } from "@internal/helper";
import { denoPkg } from "@internal/deno-pkg-node";

const el = document.querySelector("#app") as HTMLElement;

el.textContent = "hello:" + v;

console.log(denoPkg);