import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Video } from "src/database/entity/video";
import { BaseController } from "../base/base.controller";
import { VideoService } from "./video.service";

@ApiTags('Video')
@Controller('videos')
export class VideoController extends BaseController<Video> {
  constructor(private readonly videoService: VideoService) {
    super(videoService);
  }

  @Post()
  async create(@Body() data: Video): Promise<Video> {
    return this.videoService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Video): Promise<void> {
    this.videoService.update(id, data);
  }
}