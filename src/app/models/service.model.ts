/**
 * Created by Home on 3/4/2017.
 */
export class Service {
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


  get translatedName(): string {
    return this._translatedName;
  }

  set translatedName(value: string) {
    this._translatedName = value;
  }

  private _id: number;
  private _eng: string;
  private _hay: string;
  private _globkey: string;
  private _translatedName: string;

  constructor(id: number,
              servicename_eng: string,
              servicename_arm: string,
              globkey: string) {
    this._id = id;
    this._eng = servicename_eng;
    this._hay = servicename_arm;
    this._globkey = globkey;
  }

}
