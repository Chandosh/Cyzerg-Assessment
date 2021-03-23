export class User {
    private _id: string;
    private _isActive: boolean;
    private _picture: string;
    private _name: string;
    private _email: string;
    private _phone: string;

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter isActive
     * @return {boolean}
     */
	public get isActive(): boolean {
		return this._isActive;
	}

    /**
     * Getter picture
     * @return {string}
     */
	public get picture(): string {
		return this._picture;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter phone
     * @return {string}
     */
	public get phone(): string {
		return this._phone;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter isActive
     * @param {boolean} value
     */
	public set isActive(value: boolean) {
		this._isActive = value;
	}

    /**
     * Setter picture
     * @param {string} value
     */
	public set picture(value: string) {
		this._picture = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter phone
     * @param {string} value
     */
	public set phone(value: string) {
		this._phone = value;
	}

}