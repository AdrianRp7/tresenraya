export class Jugador {
    private _name: string;
    private _text: string;
    private _background: string;

    constructor(name: string, text: string, background: string = '') {
        this._name = name;
        this._text = text;
        this._background = background;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        if(newName.length > 1 && newName.length <= 11) {
            this._name = newName
        } else {
            throw new Error("The name is invalid");
        }
    }

    public get text(): string {
        return this._text;
    }

    public set text(newText: string) {
        if(newText.length === 1 && newText.length <= 11) {
            this._text = newText; 
        } else {
            throw new Error("The text is invalid, you can insert one character only");
        }
    }

    public get background(): string {
        return this._background;
    }

    public set background(newBackground: string) {
        if(newBackground.includes("http://") || newBackground.includes("https://")) {
            this._background = newBackground;
        } else {
            throw new Error("The background is invalid, You can only insert a valid url");
        }
    }
} 