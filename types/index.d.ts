export interface Options {
    debug: boolean;
  }
  
  export interface AdvancedMatching {
    user_email?: string;
    user_phone_number?: string;
    user_hashed_email?: string;
    user_hashed_phone_number?: string;
  }
  
  export interface Data {}
  
  export interface Purchase extends Data {
    transaction_id: string;
    currency: string;
    price: number;
  }
  
  export interface Item extends Data {
    item_category?: string;
    item_ids?: string[];
  }

  export interface SearchString extends Data {
      search_string: string;
  }

  export interface NumberItems extends Data {
      number_items: number;
  }

  export interface PaymentInfoAvailable extends Data {
    payment_info_available: 0 | 1;
  }

  export interface SignUpMethod extends Data {
    sign_up_method: string;
  }
  
  export interface Success extends Data {
    success: 0 | 1;
  }

  export function init(
    pixelId: string,
    advancedMatching?: AdvancedMatching,
    options?: Options,
  ): void;
  
  export function pageView(): void;
  export function track(title: string, data?: Data | any): void;
  export function snaptr(...args: Array<unknown>): void;