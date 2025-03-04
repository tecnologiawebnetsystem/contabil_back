const { execSync } = require("child_process")
const path = require("path")

console.log("Starting build process...")

// Limpar a pasta dist
console.log("Cleaning dist folder...")
try {
  execSync("rm -rf dist", { stdio: "inherit" })
} catch (error) {
  console.log("No dist folder to clean or error cleaning:", error.message)
}

// Compilar TypeScript
console.log("Compiling TypeScript...")
try {
  execSync("npx tsc -p tsconfig.build.json", { stdio: "inherit" })
  console.log("TypeScript compilation successful!")
} catch (error) {
  console.error("Error during TypeScript compilation:", error.message)
  process.exit(1)
}

console.log("Build completed successfully!")

