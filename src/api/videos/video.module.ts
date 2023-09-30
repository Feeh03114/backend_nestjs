import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Video } from "src/database/entity/video";
import { VideoController } from "./video.controller";
import { VideoService } from "./video.service";

@Module({
    controllers: [VideoController],
    imports: [TypeOrmModule.forFeature([Video])],
    providers: [VideoService],
})
export class VideoModule {}