import * as vscode from 'vscode'
import Panel from "../Panel/Panel";
import dployPanelHTML from './dployPanelHTML';

export default class DployPanel extends Panel {
    constructor() {
        super(
            'd-ploy', 
            'D-ploy', 
            vscode.ViewColumn.One, 
            dployPanelHTML(), 
            {}
        )
    }
}