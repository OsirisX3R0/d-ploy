import * as vscode from 'vscode'
// import iPanel from './iPanel'

export default abstract class Panel {
    protected context: vscode.ExtensionContext
    protected panel: vscode.WebviewPanel | undefined
    protected readonly viewType: string
    protected readonly title: string
    protected readonly showOptions: vscode.ViewColumn | {preserveFocus: boolean, viewColumn: vscode.ViewColumn}
    protected options?: vscode.WebviewPanelOptions & vscode.WebviewOptions = {}

    constructor(
      context: vscode.ExtensionContext,
      viewType: string,
      title: string,
      showOptions: vscode.ViewColumn | {preserveFocus: boolean, viewColumn: vscode.ViewColumn},
      options?: vscode.WebviewPanelOptions & vscode.WebviewOptions) {
      this.context = context
      this.viewType = viewType;
      this.title = title;
      this.showOptions = showOptions;
    }

    init(): void {
      this.panel = vscode.window.createWebviewPanel(this.viewType, this.title, this.showOptions, this.options);
      console.log('initiated')
    }

    abstract get webViewHTML() : string

    setWebViewHTML() : void {
      if (this.panel) {
        this.panel.webview.html = this.webViewHTML
        console.log('html loaded')
      }
    }
}