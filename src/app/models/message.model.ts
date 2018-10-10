export class Message {
  private _id: number;
  private _eng: string;
  private _hay: string;
  private _globkey: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get eng(): string {
    return this._eng;
  }

  set eng(value: string) {
    this._eng = value;
  }

  get hay(): string {
    return this._hay;
  }

  set hay(value: string) {
    this._hay = value;
  }

  get globkey(): string {
    return this._globkey;
  }

  set globkey(value: string) {
    this._globkey = value;
  }
}
