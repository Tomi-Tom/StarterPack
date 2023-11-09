import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as packageJson from "../package.json";
import { patchNestJsSwagger as zodPatchNestJsSwagger, ZodValidationPipe } from "nestjs-zod";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// DTO Validation w/ zod

	app.useGlobalPipes(new ZodValidationPipe());

	// Swagger documentation

	zodPatchNestJsSwagger();
	const swaggerConfiguration = new DocumentBuilder()
		.setTitle("StarterPack API")
		.setDescription(packageJson.description)
		.setVersion(packageJson.version)
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfiguration);
	SwaggerModule.setup("documentation", app, document);

	await app.listen(3000);
}

bootstrap();
