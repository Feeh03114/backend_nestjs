import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Video } from "src/database/entity/video";
import { Repository } from "typeorm";
import { BaseService } from "../base/base.service";

@Injectable()
export class VideoService extends BaseService<Video>{
    constructor(
        @InjectRepository(Video)
        private videoRepository: Repository<Video>,
    ) {
        super(videoRepository);
    }
}