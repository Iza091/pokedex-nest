import { url } from 'inspector/promises';

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}