import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import obfuscator from "rollup-plugin-obfuscator";
import react from "@vitejs/plugin-react";

const obfuscatorConfigured = obfuscator({
	global: true,
	options: {
		compact: true,
		controlFlowFlattening: true,
		selfDefending: true,
		splitStrings: true,
		stringArray: true,
		stringArrayEncoding: [ "rc4" ],
		stringArrayThreshold: .25,
		unicodeEscapeSequence: true,
		stringArrayShuffle: true,
		stringArrayRotate: true,
		stringArrayIndexShift: true,
		mangle: true,
		identifierNamesGenerator: "hexadecimal",
		transformObjectKeys: true,
		transformObjectKeysThreshold: 0.4,
		debugProtection: true,
		reservedNames: [ "electron", "window", "process", "require", "exports", "module" ],
		ignoreImports: true,
		renameGlobals: true,
		rotateStringArray: true,
		rotateStringArrayEnabled: true
	}
});

export default defineConfig({
	plugins: [
		react(),
		electron([
			{
				// Main-Process entry file of the Electron App.
				entry: "back/main.ts",
				vite: {
					plugins: process.env.NODE_ENV === "development" ? [] : [ obfuscatorConfigured ],
					build: {
						rollupOptions: {
							external: [ "axios", "electron-store" ]
						},
						minify: process.env.NODE_ENV !== "development"
					}
				}
			},
			{
				entry: "back/preload.ts",
				onstart(options) {
					// Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
					// instead of restarting the entire Electron App.
					options.reload();
				},
				vite: {
					plugins: process.env.NODE_ENV === "development" ? [] : [ obfuscatorConfigured ],
					build: {
						minify: process.env.NODE_ENV !== "development"
					}
				}
			}
		])
	]
});
