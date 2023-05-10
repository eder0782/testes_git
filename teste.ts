const world = "world";
const idade =40;

export function hello(who: string = world, old:number = idade): string {
  return `Hello ${who}!, você tem ${old} `;
}


