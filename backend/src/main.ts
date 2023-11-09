import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as packageJson from "../package.json";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
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
