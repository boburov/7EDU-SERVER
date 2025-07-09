import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail/mail.service';
import { CoursesModule } from './courses/courses.module';
import { UploadsModule } from './uploads/uploads.module';
import { QuizsModule } from './quizs/quizs.module';
import { QuessionsModule } from './quessions/quessions.module';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationsModule } from './notifications/notifications.module';
import { DictonaryModule } from './dictonary/dictonary.module';
import { ActivityModule } from './activity/activity.module';
import confuguration from './config/confuguration';
import { MigrationModule } from './migiration/migiration.module';
import { MigrationController } from './migiration/migiration.controller';
import { MigrationService } from './migiration/migiration.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true ,load: [confuguration]}),
    ScheduleModule.forRoot(),
    PrismaModule,
    UserModule,
    AuthModule,
    CoursesModule,
    UploadsModule,
    QuizsModule,
    QuessionsModule,
    DictonaryModule,
    NotificationsModule,
    ActivityModule,
    MigrationModule
  ],
  controllers: [AppController,MigrationController],
  providers: [AppService, MailService,MigrationService],
})
export class AppModule { }
