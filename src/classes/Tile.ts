export class Tile {
    private _icon: string;
    private _background: string;

    constructor (icon: string, background: string) {
        this._icon = icon;
        this._background = icon;
    }

    public get icon(): string {
        return this._icon;
    }

    public set icon(newIcon: string) {
        if(newIcon.length === 1) {
            this._icon = newIcon
        } else {
            throw new Error("The icon is invalid");
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

    public returnActualTile(): string {
        return this.background === "" ? this.icon : this.background;
    }
}