export interface OrderInterface{
	id?: string;
	orderNumber?: string;
	customerName?: string;
	order?: Array<string>;
	completed?: boolean;
	totalOrder?: number;
}