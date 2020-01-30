export class DiagramModel {

  public name: string;
  public xml: string;

  public static instance(name: string, xml: string): DiagramModel {
    const self: DiagramModel = new this();

    self.name = name;
    self.xml = xml;

    return self;
  }
}
