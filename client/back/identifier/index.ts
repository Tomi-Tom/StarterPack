import Handler from "../utils/meta/Handler";
import * as os from "os";

export default class Identifier {
	@Handler()
	static async identify(): Promise<"windows" | "linux"> {
		if (os.type() == "Windows_NT") return "windows";
		else if (os.type() == "Linux") return "linux";
		else throw new Error("Unknown OS");
	}
}
