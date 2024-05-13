import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './libs/persistence/db_config';
import { PersistenceModule } from './libs/persistence/persistence.module';
import { AuthModule } from './libs/auth/auth.module';
import { AdminModule } from './modules/Users/User.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './libs/auth/Guard/jwt.guard';
import { CoderModule } from './modules/coders/coder.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    AuthModule,
    AdminModule,
    CoderModule,
    PersistenceModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
