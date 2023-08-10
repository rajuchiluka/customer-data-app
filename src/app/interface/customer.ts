export interface Customer {
    customer_id: number;
    pack_data: PackData[];
  }

  export interface PackData {
    ingredient: string;
    inventory_code: string;
    quantity: number;
    unit: string;
  }