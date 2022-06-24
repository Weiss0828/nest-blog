import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwiperModule } from './swiper/swiper.module';
import { WeblogModule } from './weblog/weblog.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: 'root',
      password: 'root',
      database: 'blog',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SwiperModule,
    WeblogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
