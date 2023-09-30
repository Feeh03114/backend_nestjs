/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : PostgreSQL
 Source Server Version : 140009 (140009)
 Source Host           : localhost:5432
 Source Catalog        : teste_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140009 (140009)
 File Encoding         : 65001

 Date: 29/09/2023 23:23:12
*/


-- ----------------------------
-- Sequence structure for product_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "product_id_seq";
CREATE SEQUENCE "product_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "user_id_seq";
CREATE SEQUENCE "user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for video_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "video_id_seq";
CREATE SEQUENCE "video_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS "product";
CREATE TABLE "product" (
  "id" int4 NOT NULL DEFAULT nextval('product_id_seq'::regclass),
  "name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "price" float8 NOT NULL DEFAULT '0'::double precision,
  "description" varchar(400) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of product
-- ----------------------------
BEGIN;
INSERT INTO "product" ("id", "name", "price", "description") VALUES (1, 'Câmera fotográfica', 4654.05, 'A Canon SL3 DSLR com 24.1MP, tela de 3 polegadas e gravação em Full HD é uma câmera versátil e compacta que atende às necessidades tanto de iniciantes quanto de fotógrafos entusiastas que desejam explorar a fotografia e a gravação de vídeo com qualidade. Seu design compacto, recursos avançados e qualidade de imagem fazem dela uma escolha popular no mundo da fotografia.');
INSERT INTO "product" ("id", "name", "price", "description") VALUES (2, 'MacBook Air', 9166.8, 'O Apple MacBook Air de 13" com Processador M1 de 8 núcleos de CPU e 7 núcleos de GPU, 8 GB de RAM e 256 GB de armazenamento na elegante cor dourada oferece desempenho excepcional em um design fino e leve. Com potência de processamento ágil, gráficos vívidos e a portabilidade característica da linha, é uma escolha premium para produtividade e entretenimento em grande estilo.');
INSERT INTO "product" ("id", "name", "price", "description") VALUES (3, 'Predador Triton 300 SE', 7500, 'O notebook Predator Triton 300 SE é uma máquina gamer portátil com processadores Intel Core de 11ª geração e gráficos NVIDIA GeForce RTX. A tela Full HD de 14" com 144Hz oferece visuais suaves. Com design fino e teclado RGB personalizável, é ideal para jogadores em movimento que valorizam desempenho e mobilidade.');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
  "id" int4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
  "name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(100) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO "user" ("id", "name", "email") VALUES (2, 'Maria do Carmo', 'maria.carmo@gmail.com');
INSERT INTO "user" ("id", "name", "email") VALUES (1, 'João Ferreira dos Santos', 'joao.ferreira@gmail.com');
INSERT INTO "user" ("id", "name", "email") VALUES (3, 'Izabel Souza Fernanda', 'izabel.souza@gmail.com');
INSERT INTO "user" ("id", "name", "email") VALUES (4, 'Felipe Alessander', 'felipe03114@gmail.com');
COMMIT;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS "video";
CREATE TABLE "video" (
  "id" int4 NOT NULL DEFAULT nextval('video_id_seq'::regclass),
  "name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "url" varchar(100) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of video
-- ----------------------------
BEGIN;
INSERT INTO "video" ("id", "name", "url") VALUES (1, 'favorito', 'https://www.youtube.com/embed/ABON3RDQF3A?si=k6Fh6iN5DH5ckl1U');
INSERT INTO "video" ("id", "name", "url") VALUES (2, 'gosto1', 'https://www.youtube.com/embed/3M_Y6FkQez0?si=F06n2vt76bziUxLY');
INSERT INTO "video" ("id", "name", "url") VALUES (3, 'gosto2', 'https://www.youtube.com/embed/xArK9D1BjX4?si=40i8FGj0_zwOCmSx');
INSERT INTO "video" ("id", "name", "url") VALUES (4, 'gosto3', 'https://www.youtube.com/embed/MrdCSsl7GEs?si=VFlfyrqZ5jwRyufS');
INSERT INTO "video" ("id", "name", "url") VALUES (5, 'gosto4', 'https://www.youtube.com/embed/kYCXgLRCys0?si=0ukdYCcnELlsQBJX');
INSERT INTO "video" ("id", "name", "url") VALUES (6, 'gosto5', 'https://www.youtube.com/embed/vM9VJYwRLGk?si=K6yrCVZkLX9WsT9-');
INSERT INTO "video" ("id", "name", "url") VALUES (7, 'gosto6', 'https://www.youtube.com/embed/bCYGuSfwbKU?si=2rLE7nOcmlFTcB3I');
COMMIT;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "product_id_seq"
OWNED BY "product"."id";
SELECT setval('"product_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "user_id_seq"
OWNED BY "user"."id";
SELECT setval('"user_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "video_id_seq"
OWNED BY "video"."id";
SELECT setval('"video_id_seq"', 7, true);

-- ----------------------------
-- Primary Key structure for table product
-- ----------------------------
ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table video
-- ----------------------------
ALTER TABLE "video" ADD CONSTRAINT "PK_1a2f3856250765d72e7e1636c8e" PRIMARY KEY ("id");
