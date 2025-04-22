interface IJSONFlat {
  [key: string]: string;
}
interface IDriverFile {
  [variantKey: string]: IJSONFlat;
}

declare const driver: IDriverFile;

export default driver;
