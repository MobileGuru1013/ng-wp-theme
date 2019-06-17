export abstract class PageBaseTemplate {
  public static readonly className: string; // this property is unfortunately required
                                               // because loading templates by component class name is not supported with minification...
  public page: any;
}
