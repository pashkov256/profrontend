//глобальная декларация типов d.ts
declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
