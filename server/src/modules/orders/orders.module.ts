import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';
import { DataStoreModule } from '../../persistence/data-store.module.js';
import { CartModule } from '../cart/cart.module.js';

@Module({ imports: [DataStoreModule, CartModule], controllers: [OrdersController], providers: [OrdersService] })
export class OrdersModule {}
