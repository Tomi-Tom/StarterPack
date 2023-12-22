import Handler from "../utils/meta/Handler";
import * as os from "os";

export type Identifier = "windows" | "linux"

export default class Identifier {
	@Handler()
	static async identify(): Promise<Identifier> {
		if (os.type() == "Windows_NT") return "windows";
		else if (os.type() == "Linux") return "linux";
		else throw new Error("Unknown OS");
	}
}
