import { type NestInterceptor, type ExecutionContext, type CallHandler } from "@nestjs/common";
import type { Observable } from "rxjs";
export declare class DatabaseLoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
