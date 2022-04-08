export function CountWords(str: string): number;

export function calculateDiscountCouponAmount(
	coupon: any,
	serviceAmount: number
): number;

export function downloadFile(
	url: string,
	name: string,
	token: string,
	body: any
): Promise<boolean>;

export function fbRTDBSnapshot2Array(snapshot: any): any[];

export function fbRTDBObj2Array(snapshot: any): any[];

export function createdAtTimeStamp2DateObj(list: any[], key: string): any[];

export function removeTempId(data: any[], name: string): any[];

export function parseJwt(token: string): any;

export function isFBTokenExpiry(token: string): boolean;

export function loadScript(url: string, callback: () => any): boolean;

export function isCountryRequireState(countryCode: string): boolean;

export function camel2Snake(str: string): string;
export function snake2Camel(str: string): string;
export function camel2Kebap(str: string): string;
export function kebap2Camel(str: string): string;
export function objCamel2Snake(obj: any): any;
export function objSnake2Camel(obj: any): any;

export function setPageTitle(title: string): void;

export function setOrders(data: any[]): any[];

export function escapeRegex(str: string): string;

export function html2String(str: string): string;

export function getUniqueID(): string;
